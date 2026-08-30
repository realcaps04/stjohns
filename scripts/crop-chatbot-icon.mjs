import sharp from 'sharp'

const path = 'public/images/chatbot-icon.jpg'
const out = 'public/images/chatbot-icon.png'
const size = 512
const insetRatio = 0.09

const meta = await sharp(path).metadata()
const min = Math.min(meta.width, meta.height)
const inset = Math.round(min * insetRatio)
const left = Math.floor((meta.width - min) / 2) + inset
const top = Math.floor((meta.height - min) / 2) + inset
const crop = min - inset * 2
const center = size / 2

const circle = Buffer.from(
  `<svg width="${size}" height="${size}"><circle cx="${center}" cy="${center}" r="${center}" fill="white"/></svg>`,
)

const masked = await sharp(path)
  .extract({ left, top, width: crop, height: crop })
  .resize(size, size)
  .ensureAlpha()
  .composite([{ input: circle, blend: 'dest-in' }])
  .png()
  .toBuffer()

await sharp({
  create: { width: size, height: size, channels: 4, background: '#010091' },
})
  .composite([{ input: masked, blend: 'over' }])
  .png()
  .toFile(out)

console.log('Wrote', out)
