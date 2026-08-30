import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'public', 'images', 'doctors')
const mapFile = path.join(root, 'src', 'data', 'doctor-images.json')

const doctors = [
  { id: 'varun-v-kumar', url: 'https://stjohns.co.in/doctor/dr-varun-v-kumar/' },
  { id: 'arjun-antony', url: 'https://stjohns.co.in/doctor/dr-arjun-antony/' },
  { id: 'haris-t-p', url: 'https://stjohns.co.in/doctor/dr-haris-t-p/' },
  { id: 'rejoy-mathews', url: 'https://stjohns.co.in/doctor/dr-rejoy-mathews-george/' },
  { id: 'praveen-p', url: 'https://stjohns.co.in/doctor/dr-praveen-p/' },
  { id: 'aswathy-a-r', url: 'https://stjohns.co.in/doctor/dr-aswathy-a-r/' },
  { id: 'apsara', url: 'https://stjohns.co.in/doctor/dr-apsara/' },
  { id: 'aarthi', url: 'https://stjohns.co.in/doctor/dr-aarthi/' },
  { id: 'latha-g', url: 'https://stjohns.co.in/doctor/dr-latha-g/' },
  { id: 'ansu-annie-tomy', url: 'https://stjohns.co.in/doctor/dr-ansu-annie-tomy/' },
  { id: 'betty-joseph', url: 'https://stjohns.co.in/doctor/dr-betty-joseph/' },
  { id: 'ria-roy', url: 'https://stjohns.co.in/doctor/dr-ria-roy/' },
  { id: 'sebin-sebastian', url: 'https://stjohns.co.in/doctor/dr-sebin-sebastian/' },
  { id: 'neethu-baby', url: 'https://stjohns.co.in/doctor/dr-neethu-baby/' },
  { id: 'nithina-prasad', url: 'https://stjohns.co.in/doctor/dr-nithina-prasad/' },
  { id: 'riyamol-jose', url: 'https://stjohns.co.in/doctor/dr-sr-riyamol-jose-scjg/' },
  { id: 'muhammed', url: 'https://stjohns.co.in/doctor/dr-muhammed/' },
  { id: 'mercylet', url: 'https://stjohns.co.in/doctor/dr-sr-mercylet/' },
  { id: 'gouri-priya', url: 'https://stjohns.co.in/doctor/dr-gouri-priya/' },
  { id: 'mosin-b', url: 'https://stjohns.co.in/doctor/dr-mosin-b/' },
  { id: 'saneesh-m', url: 'https://stjohns.co.in/doctor/dr-saneesh-m/' },
  { id: 'dheeraj-eldho', url: 'https://stjohns.co.in/doctor/dr-dheeraj-eldho-paulose/' },
  { id: 'jobin-martin', url: 'https://stjohns.co.in/doctor/dr-jobin-martin-sebastian/' },
  { id: 'varun-t-k', url: 'https://stjohns.co.in/doctor/dr-varun-t-kachiramattam/' },
  { id: 'leons-joy', url: 'https://stjohns.co.in/doctor/dr-leons-joy/' },
  { id: 'pandiprakash', url: 'https://stjohns.co.in/doctor/dr-pandiprakash-s-s/' },
  { id: 'jolly-varghese', url: 'https://stjohns.co.in/doctor/dr-jolly-varghese/' },
  { id: 'saravana-kumar', url: 'https://stjohns.co.in/doctor/dr-saravana-kumar/' },
  { id: 'anju-ann-varghese', url: 'https://stjohns.co.in/doctor/dr-anju-ann-varghese/' },
  { id: 'abhinand-s-s', url: 'https://stjohns.co.in/doctor/dr-abhinand-s-s/' },
  { id: 'kiran-sivanandan', url: 'https://stjohns.co.in/doctor/dr-kiran-sivanandan/' },
  { id: 'lini-b-das', url: 'https://stjohns.co.in/doctor/dr-lini-b-das/' },
  { id: 'sr-elizabeth', url: 'https://stjohns.co.in/doctor/dr-sr-elizabeth/' },
  { id: 'nithya-devi-k', url: 'https://stjohns.co.in/doctor/dr-nithya-devi-k/' },
  { id: 'pradhosh-mammen', url: 'https://stjohns.co.in/doctor/dr-pradhosh-mammen/' },
  { id: 'simi-samuel', url: 'https://stjohns.co.in/doctor/dr-simi-samuel/' },
  { id: 'm-dharmabai', url: 'https://stjohns.co.in/doctor/dr-m-dharmabai/' },
  { id: 'anil-pradeep', url: 'https://stjohns.co.in/doctor/dr-anil-pradeep/' },
  { id: 'manju-b', url: 'https://stjohns.co.in/doctor/dr-manju-b/' },
  { id: 'ritesh-r', url: 'https://stjohns.co.in/doctor/dr-ritesh-r/' },
  { id: 'jaise-joseph', url: 'https://stjohns.co.in/doctor/dr-jaise-joseph/' },
]

function largestFromSrcset(srcset) {
  const candidates = srcset
    .split(',')
    .map((part) => {
      const [url, size] = part.trim().split(/\s+/)
      return { url, w: Number.parseInt(size, 10) || 0 }
    })
    .filter((item) => item.url)

  candidates.sort((a, b) => b.w - a.w)
  return candidates[0]?.url ?? null
}

function extractProfileImage(html) {
  const mediumImg = html.match(/<img\b[^>]*class="attachment-medium size-medium[^"]*"[^>]*>/i)
  if (mediumImg) {
    const tag = mediumImg[0]
    const srcsetMatch = tag.match(/srcset="([^"]+)"/)
    if (srcsetMatch) {
      const largest = largestFromSrcset(srcsetMatch[1])
      if (largest) return largest
    }

    const srcMatch = tag.match(/src="(https:\/\/stjohns\.co\.in\/wp-content\/uploads\/[^"]+)"/)
    if (srcMatch) return srcMatch[1]
  }

  const lazyMatch = html.match(
    /<img[^>]*src="(https:\/\/stjohns\.co\.in\/wp-content\/uploads\/[^"]+\.(?:jpg|jpeg|png|webp))"[^>]*loading="lazy"/i,
  )
  if (lazyMatch && !/logo|app-store|google-play|Untitled|Br\.-Baiju|ST\.JOHNS-LOGO/i.test(lazyMatch[1])) {
    return lazyMatch[1]
  }

  const uploads = [...html.matchAll(/src="(https:\/\/stjohns\.co\.in\/wp-content\/uploads\/[^"]+\.(?:jpg|jpeg|png|webp))"/gi)]
    .map((match) => match[1])
    .filter((url) => !/logo|app-store|google-play|Untitled|Br\.-Baiju|ST\.JOHNS-LOGO/i.test(url))

  return uploads[0] ?? null
}

function extFromUrl(url) {
  const clean = url.split('?')[0]
  const ext = path.extname(clean).toLowerCase()
  return ext === '.jpeg' ? '.jpg' : ext || '.jpg'
}

await mkdir(outDir, { recursive: true })

const imageMap = {}
const failures = []

for (const doctor of doctors) {
  try {
    const response = await fetch(doctor.url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; StJohnsSiteBuilder/1.0)' },
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const html = await response.text()
    const imageUrl = extractProfileImage(html)
    if (!imageUrl) throw new Error('No profile image found')

    const ext = extFromUrl(imageUrl)
    const filename = `${doctor.id}${ext}`
    const filePath = path.join(outDir, filename)

    const imageResponse = await fetch(imageUrl)
    if (!imageResponse.ok) throw new Error(`Image HTTP ${imageResponse.status}`)
    const buffer = Buffer.from(await imageResponse.arrayBuffer())
    await writeFile(filePath, buffer)

    imageMap[doctor.id] = `/images/doctors/${filename}`
    console.log(`OK  ${doctor.id} -> ${filename}`)
  } catch (error) {
    failures.push({ id: doctor.id, error: error.message })
    console.error(`FAIL ${doctor.id}: ${error.message}`)
  }
}

await writeFile(mapFile, `${JSON.stringify(imageMap, null, 2)}\n`)

console.log(`\nSaved ${Object.keys(imageMap).length} images to ${outDir}`)
if (failures.length) {
  console.log(`Failed: ${failures.length}`)
  process.exitCode = 1
}
