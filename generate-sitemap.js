const https = require('https')
const fs = require('fs')
const path = require('path')

const TOKEN = 'patce5V5klpQYrEFU.10c60e5a13472e4c60c48c51c817d0966dd843ea7d9340ef648317e56cd4fb2e'
const BASE_ID = 'appl1Zu56GojcivLE'
const BASE_URL = `https://sparkly17.github.io/checkpoint-4`

const STATIC_PAGES = [
  '',
  '/#/category/living',
  '/#/category/finance',
  '/#/category/work',
  '/#/category/docs',
  '/#/category/learn',
  '/#/category/social',
]

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, { headers: { Authorization: `Bearer ${TOKEN}` } }, res => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => resolve(JSON.parse(data)))
    })
    req.on('error', reject)
    req.end()
  })
}

async function fetchAllSlugs() {
  const slugs = []
  let offset = null
  do {
    const url = `https://api.airtable.com/v0/${BASE_ID}/Articles?fields[]=slug${offset ? `&offset=${offset}` : ''}`
    const data = await fetchJson(url)
    slugs.push(...(data.records || []).map(r => r.fields.slug).filter(Boolean))
    offset = data.offset || null
  } while (offset)
  return slugs
}

async function generate() {
  console.log('Fetching articles...')
  const slugs = await fetchAllSlugs()
  console.log(`Found ${slugs.length} articles`)

  const urls = [
    ...STATIC_PAGES.map(p => `${BASE_URL}${p}`),
    ...slugs.map(slug => `${BASE_URL}/#/article/${slug}`)
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>\n    <loc>${url}</loc>\n  </url>`).join('\n')}
</urlset>`

  const outPath = path.join(__dirname, 'docs', 'sitemap.xml')
  fs.writeFileSync(outPath, xml, 'utf-8')
  console.log(`Sitemap written to ${outPath} (${urls.length} URLs)`)
}

generate().catch(console.error)
