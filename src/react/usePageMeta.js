import { useEffect } from 'react'

function setMeta(property, content, isName = false) {
  const attr = isName ? 'name' : 'property'
  let el = document.querySelector(`meta[${attr}="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function applyPageMeta({ title, description, type = 'website' }) {
  document.title = title ? `${title} — Чекпоинт` : 'Чекпоинт'
  setMeta('og:title', title || 'Чекпоинт')
  setMeta('og:type', type)
  setMeta('og:url', window.location.href)
  if (description) {
    setMeta('description', description, true)
    setMeta('og:description', description)
  }
}

export function usePageMeta(meta) {
  useEffect(() => { applyPageMeta(meta) }, [meta.title, meta.description])
}

import React from 'react'
export function PageMeta({ title, description, type }) {
  usePageMeta({ title, description, type })
  return null
}
