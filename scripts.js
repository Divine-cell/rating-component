

let selectAlart = document.getElementById("selection-alart")
let thanksCard = document.getElementById("thankyou-card")
let rateCount = document.getElementById("rate-count")
let ratingBtn = document.querySelectorAll(".rating-btn")



let rate1El = document.getElementById("rate1")
let rate2El = document.getElementById("rate2")
let rate3El = document.getElementById("rate3")
let rate4El = document.getElementById("rate4")
let rate5El = document.getElementById("rate5")


let count = 0


rate1El.addEventListener("click", function(e) {
    if (e. currentTarget.Id === true ) {
        rate1El.style.backgroundColor = "rgb(56, 55, 53)"
        rate1El.style.color = "hsl(216, 12%, 54%)"
    } else  {
        rate1El.style.backgroundColor = "rgb(255, 115, 0)"
        rate1El.style.color = "white"
    } 
    
})


rate2El.addEventListener("click", function(e) {
    if (e.currentTarget.id === true) {
        rate2El.style.backgroundColor = "rgb(56, 55, 53)"
        rate2El.style.color = "hsl(216, 12%, 54%)"
    } else {
        rate2El.style.backgroundColor = "rgb(255, 115, 0)"
        rate2El.style.color = "white"
    }
})




rate3El.addEventListener("click", function(e) {
    if (e.currentTarget.id === true) {
        rate3El.style.backgroundColor = "rgb(56, 55, 53)"
        rate3El.style.color = "hsl(216, 12%, 54%)"
    } else {
        rate3El.style.backgroundColor = "rgb(255, 115, 0)"
        rate3El.style.color = "white"
    }
})



rate4El.addEventListener("click", function(e) {
    if (e.currentTarget.id === true) {
        rate4El.style.backgroundColor = "rgb(56, 55, 53)"
        rate4El.style.color = "hsl(216, 12%, 54%)"
    } else {
        rate4El.style.backgroundColor = "rgb(255, 115, 0)"
        rate4El.style.color = "white"
    }
})



rate5El.addEventListener("click", function(e) {
    if (e.currentTarget.id === true) {
        rate5El.style.backgroundColor = "rgb(56, 55, 53)"
        rate5El.style.color = "hsl(216, 12%, 54%)"
    } else {
        rate5El.style.backgroundColor = "rgb(255, 115, 0)"
        rate5El.style.color = "white"
        }
    })

    
        submitBtn.addEventListener("click", function(e) {
            if (e.currentTarget.id === true) {
             rate1El.addEventListener("click", function(e){
                 if (e.currentTarget.id === true) {
                     rateCount.textContent = count++
                 } else {
                     rateCount.textContent =  count++
                 }
             })
            }
         })
    
    
        
        


   

    /*submitEl.addEventListener("click", function() {
     r
    
    })*/

















 

