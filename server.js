var slugify = require('slugify')
let a = slugify("some string")
console.log(a) // "some-string"

const b = slugify('some string',"-")
console.log(b) // "some-string" npm