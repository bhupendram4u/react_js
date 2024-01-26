// Link https://www.youtube.com/watch?v=GKJh3vdat8A

const form = document.querySelector("form")
const input = document.querySelector("input")
const errorMsg = document.querySelector(".error")
const successMsg = document.querySelector(".success")
form.addEventListener("submit", e => {
    e.preventDefault()
    const numberofchildren = parseInt(input.value)
    errorMsg.textContent = ""
    successMsg.textContent = ""


    //    if (!"") {   # it also return true 
    // if(isNaN(numberofchildren)) // It is valid condition 

    if (!numberofchildren) {  // Error when user Enter 0   . And for 0 It accept 
        errorMsg.textContent = "Please enter number of children"
    } else {
        successMsg.textContent = "Success"
    }
})