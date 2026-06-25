const AIRTABLE_TOKEN = 'patce5V5klpQYrEFU.10c60e5a13472e4c60c48c51c817d0966dd843ea7d9340ef648317e56cd4fb2e'
const BASE_ID = 'appl1Zu56GojcivLE'
const BASE_URL = `https://api.airtable.com/v0/${BASE_ID}`

const headers = {
  Authorization: `Bearer ${AIRTABLE_TOKEN}`,
  'Content-Type': 'application/json'
}

export async function fetchAllArticles() {
  let allRecords = []
  let offset = null
  do {
    const filter = encodeURIComponent(`{type}='article'`)
    const url = `${BASE_URL}/Articles?filterByFormula=${filter}&fields%5B%5D=slug&fields%5B%5D=title&fields%5B%5D=category&fields%5B%5D=type${offset ? `&offset=${offset}` : ''}`
    const res = await fetch(url, { headers })
    const data = await res.json()
    allRecords.push(...(data.records || []))
    offset = data.offset || null
  } while (offset)
  return allRecords
}

export async function fetchArticlesByCategory(category) {
  const formula = encodeURIComponent(`{category}='${category}'`)
  const res = await fetch(`${BASE_URL}/Articles?filterByFormula=${formula}&sort%5B0%5D%5Bfield%5D=card_order&sort%5B0%5D%5Bdirection%5D=asc`, { headers })
  const data = await res.json()
  return data.records || []
}

export async function fetchArticleBySlug(slug) {
  const formula = encodeURIComponent(`{slug}='${slug}'`)
  const res = await fetch(`${BASE_URL}/Articles?filterByFormula=${formula}`, { headers })
  const data = await res.json()
  if (!data.records || data.records.length === 0) return null
  return data.records[0]
}

async function fetchByIds(table, ids) {
  if (ids.length === 0) return []
  const results = []
  for (let i = 0; i < ids.length; i += 10) {
    const batch = ids.slice(i, i + 10)
    const orParts = batch.map(id => `RECORD_ID()='${id}'`).join(',')
    const formula = encodeURIComponent(`OR(${orParts})`)
    const res = await fetch(`${BASE_URL}/${table}?filterByFormula=${formula}`, { headers })
    const data = await res.json()
    results.push(...(data.records || []))
  }
  return results
}

export async function fetchSectionsByArticleId(articleRecord) {
  const sectionIds = articleRecord.fields.Sections || []
  const sections = await fetchByIds('Sections', sectionIds)
  return sections.sort((a, b) => a.fields.order - b.fields.order)
}

export async function fetchBlocksBySectionIds(sectionRecords) {
  const blockIds = sectionRecords.flatMap(s => s.fields.Blocks || [])
  const blocks = await fetchByIds('Blocks', blockIds)
  return blocks.sort((a, b) => a.fields.order - b.fields.order)
}
