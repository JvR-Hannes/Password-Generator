const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstKeyEl = document.getElementById("keyOne")
let secondKeyEl = document.getElementById("keyTwo")
let passwordCondition = document.getElementById("numbersOnly")
let passwordLength = 15
let condition = false

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function getRandomNumber() {
    let randomNum = ""
    for (let i = 0; i < passwordLength; i++) {
        randomNum += Math.floor(Math.random() * 10)
    }
    return randomNum
}

// function numbersOnly() {
//     let checkbox = document.getElementById("numbersOnly")
//     condition = checkbox.checked
    
//     if(condition) {
//         firstKeyEl.textContent = getRandomNumber()
//         secondKeyEl.textContent = getRandomNumber()
//     }else {
//         firstKeyEl.textContent = generateKey()
//         secondKeyEl.textContent = generateKey()
//     }
    
// }

function generateKey() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

function generatePassword() {
    let checkbox = document.getElementById("numbersOnly")
    condition = checkbox.checked
    
    if(condition) {
        firstKeyEl.textContent = getRandomNumber()
        secondKeyEl.textContent = getRandomNumber()
    }else {
        firstKeyEl.textContent = generateKey()
        secondKeyEl.textContent = generateKey()
    }
}
