import React, { useEffect, useRef, useState } from 'react'
import qr from '/src/images/article/qr.png'
import LogoAll from './LogoAll.jsx'
import download from '/src/images/icons/download-white.svg'
import telegram from '/src/images/icons/telegram.svg'
import vk from '/src/images/icons/vk.svg'

function CheckboxIcon({ checked, color }) {
    if (checked) {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <rect x="2" y="2" width="20" height="20" fill={color}/>
                <path d="M19.484 7.879L10.377 16.986L5.514 12.122L6.928 10.708L10.377 14.157L18.070 6.464L19.484 7.879Z" fill="white"/>
            </svg>
        )
    }
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M22 2V22H2V2H22ZM4 20H20V4H4V20Z" fill={color}/>
        </svg>
    )
}

function ChecklistModal({ title, data, color = '#315A9F', onClose }) {
    const checklistRef = useRef(null)
    const items = data?.items || []
    const images = data?.images || []
    const imagesMobile = data?.images_mobile || images
    const subtitle = data?.subtitle || ''
    const intro = data?.intro || ''
    const isImageMode = images.length > 0
    const [checked, setChecked] = useState(() => new Array(items.length).fill(false))

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose() }
        document.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [onClose])

    async function downloadPdf() {
        const html2pdf = (await import('html2pdf.js')).default
        html2pdf()
            .set({ filename: `${title}.pdf`, margin: 8, html2canvas: { scale: 2 } })
            .from(checklistRef.current)
            .save()
    }

    function toggle(i) {
        setChecked(prev => prev.map((v, idx) => idx === i ? !v : v))
    }

    return (
        <div className="cl-modal-overlay" onClick={onClose}>
            <div className="cl-modal-wrap" onClick={(e) => e.stopPropagation()}>

                <h2 className="cl-modal-title b40 m-b24">{title}</h2>

                <div className="cl-modal-checklist" style={{ borderColor: color }} ref={checklistRef}>
                    <div className="cl-modal-checklist-top">
                        <h4 className="cl-modal-checklist-subtitle b20">{subtitle}</h4>
                        <div className="cl-modal-checklist-icons">
                            <img src={qr} alt="QR"/>
                            <LogoAll color={color}/>
                        </div>
                    </div>

                    {intro && <p className="cl-modal-intro s16">{intro}</p>}

                    {isImageMode ? (
                        <div className="cl-modal-images">
                            {images.map((src, i) => (
                                <React.Fragment key={i}>
                                    <img className="desktop" src={src} alt="" />
                                    <img className="mobile" src={imagesMobile[i] || src} alt="" />
                                </React.Fragment>
                            ))}
                        </div>
                    ) : (
                        <div className="cl-modal-checklist-items">
                            {items.map((item, i) => (
                                <div key={i} className="cl-modal-item" onClick={() => toggle(i)}>
                                    <h5 className="sb16 cl-modal-item-title">
                                        <CheckboxIcon checked={checked[i]} color={color} />
                                        {item.title}
                                    </h5>
                                    {item.text && <p className="s10">{item.text}</p>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="cl-modal-buttons">
                    <button className="cl-modal-btn-pdf n20-20" style={{ backgroundColor: color }} onClick={downloadPdf}>
                        Скачать PDF
                        <img src={download} alt=""/>
                    </button>
                    <div className="cl-modal-share">
                        <p className="b16">Поделиться</p>
                        <img src={telegram} alt="Telegram"/>
                        <img src={vk} alt="ВКонтакте"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChecklistModal
