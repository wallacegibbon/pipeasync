# Introduction

The `pipe` method in Node.js is pretty convenient to use. But it is
based on events. To use it along with async function, you need to
listen to specific events and do some wraps to return a Promise Object.

This package provide a function that wraps necessary things, you only
need to know the `stop event`.

For normal file, the stop event is 'finish'.
For `unzip`, the stop event is 'close'.

e.g.

```javascript
async function test() {
  const a = fs.createReadStream('a.txt')
  const b = fs.createWriteStream('b.txt')
  await pipeasync(a, b, 'finish')

  const c = fs.createReadStream('c.zip')
  const d = unzip.Extract({ path: './d' })
  await pipeasync(c, d, 'close')
}
```