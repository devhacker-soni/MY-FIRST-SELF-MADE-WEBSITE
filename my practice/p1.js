let number = document.querySelector("h1")
let btn1 = document.querySelector(".btn1")
btn1.addEventListener("click",()=>{
    let currentNumber = parseInt(number.innerText)
    number.innerText = currentNumber + 1 
})
let btn2 = document.querySelector(".btn2")
btn2.addEventListener("click",()=>{
    let currentNumber = parseInt(number.innerText)
    number.innerText = 0
})

let btn3 = document.querySelector(".btn3")
btn3.addEventListener("click",()=>{
    if(parseInt(number.innerText)<=0){
    number.innerText = 0}else{
       number.innerText = parseInt(number.innerText) - 1
    }
})