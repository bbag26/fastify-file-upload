const fs = require('fs')
const util = require('util')

const { extname } = require('path')
const { pipeline } = require('stream')
const { v4: v4 } = require('uuid')

const engine = util.promisify(pipeline)

module.exports = async function uploader(file, filename) {
  const extension = extname(filename)
  const name = v4()
  const full = `${name}${extension}`

  try {
    await engine(file, fs.createWriteStream(`./storage/uploads/${full}`))
    return {
      uploaded: true,
      filePath: `storage/uploads/${full}`
    }
  } catch {
    return {
      uploaded: false
    }
  }
}
