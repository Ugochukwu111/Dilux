import fs from 'fs/promises'
import path from 'path'
import axios from 'axios'

const SITE_URL = 'https://diluxproperties.com.ng'
const API_URL = 'https://api.diluxproperties.com.ng/properties'
const OUT_DIR = path.join(process.cwd(), 'public')
const OUT_FILE = path.join(OUT_DIR, 'sitemap.xml')

const staticRoutes = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.7' },
  { url: '/sign-up', changefreq: 'monthly', priority: '0.7' }
]

function isoDateOnly(value) {
  try {
    return new Date(value).toISOString().split('T')[0]
  } catch (e) {
    return null
  }
}

function urlEntry(loc, lastmod = null, changefreq = 'monthly', priority = '0.5') {
  let entry = '  <url>\n'
  entry += `    <loc>${loc}</loc>\n`
  if (lastmod) entry += `    <lastmod>${lastmod}</lastmod>\n`
  entry += `    <changefreq>${changefreq}</changefreq>\n`
  entry += `    <priority>${priority}</priority>\n`
  entry += '  </url>\n'
  return entry
}

async function fetchProperties() {
  const res = await axios.get(API_URL, { timeout: 10000 })
  return res.data
}

async function buildSitemap() {
  await fs.mkdir(OUT_DIR, { recursive: true })

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  // static routes
  for (const r of staticRoutes) {
    const loc = new URL(r.url, SITE_URL).toString()
    xml += urlEntry(loc, null, r.changefreq, r.priority)
  }

  // dynamic property routes
  try {
    const data = await fetchProperties()
    // Expecting data to be an array of property objects with an `id` field and optional `updatedAt` or `updated_at`
    if (Array.isArray(data)) {
      for (const item of data) {
        const id = item.id || item._id || item.propertyId || null
        if (!id) continue
        const loc = `${SITE_URL}/property/${encodeURIComponent(id)}`
        const lastmod = isoDateOnly(item.updatedAt || item.updated_at || item.modifiedAt || item.createdAt || item.created_at)
        xml += urlEntry(loc, lastmod, 'weekly', '0.8')
      }
    } else {
      console.warn('Unexpected properties response shape; expected an array.')
    }
  } catch (err) {
    console.error('Failed to fetch properties from API:', err.message)
    console.error('Skipping dynamic property entries — you can run the script again when the API is available.')
  }

  xml += '</urlset>\n'
  await fs.writeFile(OUT_FILE, xml, 'utf8')
  console.log(`Sitemap written to ${OUT_FILE} — ${new Date().toISOString()}`)
}

// Run when executed directly
if (import.meta.url === `file://${process.cwd()}/${path.relative(process.cwd(), process.argv[1])}` || process.argv[1] === undefined) {
  buildSitemap().catch(err => {
    console.error(err)
    process.exit(1)
  })
}
