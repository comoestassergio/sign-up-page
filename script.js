const passwordField = document.querySelector("#password")
const passwordCheckField = document.querySelector("#password-check")
const firstName = document.querySelector("#first-name")
const errorText = document.querySelector(".text-error")

function passCheck() {
    if (passwordField.value === "" || passwordCheckField.value === ""){
        return
    }
    if (passwordField.value === passwordCheckField.value){
        passwordField.classList.toggle("error")
    }
}

window.onload = function(){
    if (passwordField.value === "" || passwordCheckField.value === ""){
        passwordField.classList.add("error")
        passwordCheckField.classList.add("error")
        errorText.style.color = "rgb(190, 10, 10)" 
        errorText.textContent = "* passwords don't match"
    }
}