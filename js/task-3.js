"use strict"

function getElementWidth(content, padding, border) {
    let numberContent = Number.parseFloat(content)
    let numberPadding = Number.parseFloat(padding)
    let numberBorder = Number.parseFloat(border)
    return numberContent + numberPadding * 2 + numberBorder * 2
    
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200


