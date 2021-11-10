

let record = 1

function plus() {
    
let number = parseInt(document.getElementById('number').innerText)

number = number + 1

document.getElementById('number').innerText = number


document.getElementById('record').innerHTML = `Seu recorde de atrasos é ${record} dias`
console.log(record)

record  = record + 1

}

function zerar() {

    let number = parseInt(document.getElementById('number').innerText)

    number = 0
    
    document.getElementById('number').innerText = number
}
