const title = document.querySelector(".title")

let son = prompt("Son kiriting")
let counter = 0

for (let i = 1; i <= son; i++) {
    counter += i
}
title.textContent = `Jami: ${counter}`