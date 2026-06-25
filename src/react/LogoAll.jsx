import React from 'react'

let _logoAllId = 0

function LogoAll({ color = '#315A9F', size = 40 }) {
  const id = React.useRef(`logo-all-mask-${++_logoAllId}`).current

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id={id} style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
        <rect y="16.5515" width="40" height="6.89655" fill="#D9D9D9"/>
        <rect x="16.5547" y="40" width="40" height="6.89655" transform="rotate(-90 16.5547 40)" fill="#D9D9D9"/>
        <rect x="3.42188" y="31.7041" width="40" height="6.89655" transform="rotate(-45 3.42188 31.7041)" fill="#D9D9D9"/>
        <rect x="31.7031" y="36.5803" width="40" height="6.89655" transform="rotate(-135 31.7031 36.5803)" fill="#D9D9D9"/>
      </mask>
      <g mask={`url(#${id})`}>
        <rect width="40" height="23.4482" fill="#262626"/>
      </g>
      <path d="M16.5201 39.5979L16.5201 28.2974L8.30627 36.5938L3.37634 31.7128L19.983 14.9391L36.6641 31.7069L31.7458 36.5997L23.4576 28.2686L23.4576 39.5979L16.5201 39.5979Z" fill={color}/>
    </svg>
  )
}

export default LogoAll
