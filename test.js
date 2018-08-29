const pipeasync = require('.')
const fs = require('fs')

async function test() {
  console.log('before:', fs.readdirSync('.'))

  const a = fs.createReadStream('README.md')
  const b = fs.createWriteStream('tmp.txt')
  await pipeasync(a, b, 'finish')

  console.log('after:', fs.readdirSync('.'))
}

test().catch(console.error)