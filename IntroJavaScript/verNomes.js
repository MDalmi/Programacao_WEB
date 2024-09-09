const fs = require('fs');

console.log(1)

// callback

/* function callback(err, contents){
    console.log(err, String(contents));
}

fs.readFile('./nomes.txt', callback) */

/* fs.readFile('./nomes.txt', (err, contents) => {
    console.log(err, String(contents))
}) */


// usando promisses

const readFile = file => new Promise( (resolvem, reject) => {
    fs.readFile(file, (err, contents) => {
        if(err){
            rejec(err)
        }
        else
        {
            resolve(contents)
        }
    })
})

//chamando a promisse normalmente
readFile('./nomes.txt').then(contents => {console.log(String(contents))}).catch(err => console.log(err))

console.log(2)

// metodo assyc

const leitura = async () => {
    const contents = await readFile('./nomes.txt')
    console.log(String(contents))
}

console.log(3)

console.log(4)

console.log(5)