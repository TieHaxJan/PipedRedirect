const fs = require('fs')
const path = require('path')
const archiver = require('archiver')

function ensureCleanBuildDir() {
  fs.rmSync('./build', { recursive: true, force: true })
  fs.mkdirSync('./build', { recursive: true })
}

function createZip(browser) {
  return new Promise((resolve, reject) => {
    const outputPath = path.join(__dirname, 'build', `${browser}.zip`)
    const output = fs.createWriteStream(outputPath)
    const archive = archiver('zip', { zlib: { level: 9 } })

    output.on('close', () => {
      console.log(`${browser}.zip created: ${archive.pointer()} bytes`)
      resolve()
    })

    archive.on('error', reject)

    archive.pipe(output)
    archive.directory(`src/${browser}/`, false)
    archive.directory('src/common/', 'common')
    archive.finalize()
  })
}

async function main() {
  ensureCleanBuildDir()
  await createZip('chrome')
  await createZip('firefox')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})