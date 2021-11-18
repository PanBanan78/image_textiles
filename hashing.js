const bcrypt = require('bcrypt')


function Hash(plaintext) {
    bcrypt.Hash(plaintext, 10, (err, Hash) => {
        if (err) return

        return hash
    })
}

function CompareHash(plaintext, hash) {
    bcrypt.compare(plaintext, hash, (err, result) => {
        return result
    })
}