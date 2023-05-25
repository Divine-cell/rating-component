

let selectAlart = document.getElementById("selection-alart")
let thanksCard = document.getElementById("thankyou-card")
let rateCount = document.getElementById("rate-count")
let ratingBtn = document.querySelectorAll(".rating-btn")



let rate1El = document.getElementById("rate1")
let rate2El = document.getElementById("rate2")
let rate3El = document.getElementById("rate3")
let rate4El = document.getElementById("rate4")
let rate5El = document.querySelector("#rate5")


let count = 0


rate1El.addEventListener("click", function(e) {
     const isClicked = rate1El.classList.contains("current_rating") // check if the current button has the .current_rating class name
   
     if (isClicked) {
        rate1El.classList.remove("current_rating") // remove .current_rating classname
       

    } else {
        rate1El.classList.add("current_rating") // remove .current_rating classname
        rate4El.classList.remove("current_rating") // add .current_rating classname
         rate5El.classList.remove("current_rating") // remove .current_rating classname from rate5El
         rate3El.classList.remove("current_rating") // remove .current_rating classname
         rate2El.classList.remove("current_rating") // remove .current_rating classname
    }
    
})


rate2El.addEventListener("click", function(e) {
   const isClicked = rate2El.classList.contains("current_rating") // check if the current button has the .current_rating class name
   
     if (isClicked) {
        rate2El.classList.remove("current_rating") // remove .current_rating classname
       

    } else {
         rate1El.classList.remove("current_rating") // remove .current_rating classname
        rate2El.classList.add("current_rating") // remove .current_rating classname
        rate4El.classList.remove("current_rating") // add .current_rating classname
         rate5El.classList.remove("current_rating") // remove .current_rating classname from rate5El
         rate3El.classList.remove("current_rating") // remove .current_rating classname

    }
})




rate3El.addEventListener("click", function(e) {
    const isClicked = rate3El.classList.contains("current_rating") // check if the current button has the .current_rating class name
   
     if (isClicked) {
        rate3El.classList.remove("current_rating") // remove .current_rating classname
       

    } else {
         rate1El.classList.remove("current_rating") // remove .current_rating classname
         rate2El.classList.remove("current_rating") // remove .current_rating classname
        rate3El.classList.add("current_rating") // remove .current_rating classname
        rate4El.classList.remove("current_rating") // add .current_rating classname
         rate5El.classList.remove("current_rating") // remove .current_rating classname from rate5El
    }
})



rate4El.addEventListener("click", function(e) {
   const isClicked = rate4El.classList.contains("current_rating") // check if the current button has the .current_rating class name
   
    if (isClicked) {
        rate4El.classList.remove("current_rating") // remove .current_rating classname
       

    } else {
         rate1El.classList.remove("current_rating") // remove .current_rating classname
         rate2El.classList.remove("current_rating") // remove .current_rating classname
         rate3El.classList.remove("current_rating") // remove .current_rating classname
        rate4El.classList.add("current_rating") // add .current_rating classname
         rate5El.classList.remove("current_rating") // remove .current_rating classname from rate5El
    }
})



rate5El.addEventListener("click", function(e) {
    const isClicked = rate5El.classList.contains("current_rating") // check if the current button has the .current_rating class name
   
    if (isClicked) {
        rate5El.classList.remove("current_rating") // remove .current_rating classname
    } else {
         rate1El.classList.remove("current_rating") // remove .current_rating classname
          rate2El.classList.remove("current_rating") // remove .current_rating classname
        rate5El.classList.add("current_rating") // add .current_rating classname
         rate4El.classList.remove("current_rating") // remove .current_rating classname
          rate3El.classList.remove("current_rating") // remove .current_rating classname from rate3El 
    }
})

    
        
        


   
    const submitEl = document.querySelector('#submit-el')
    const form = document.querySelector('#rating_form')

    submitEl.addEventListener("click", function(e) {
        e.preventDefault() // prevent the form from being submitted and control the submission yourself

    // find a button with a 
    })

    form.addEventListener("submit", function(e) {
        e.preventDefault();

    })
















 

