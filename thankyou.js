let count = [1, 2, 3, 4, 5] 

let submitEl = document.getElementById("sumbit-el")
let selectAlart = document.getElementById("selection-alart")

function mySubmit() {
    selectAlart.textContent = "You selected " + count[0] + "out of 5"
}