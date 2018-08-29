function pipeasync(istream, ostream, stopEvent) {
  return new Promise((res, rej) => {
    istream.on('error', e => rej(new Error(`pipeasync istream error ${e.message}`)))
    ostream.on('error', e => rej(new Error(`pipeasync ostream error ${e.message}`)))
    ostream.on(stopEvent, () => res(true))
    istream.pipe(ostream)
  })
}

module.exports = pipeasync
