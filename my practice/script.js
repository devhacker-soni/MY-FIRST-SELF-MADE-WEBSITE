function add1(a,b) {
        console.log(a+b)
    }
    let x = add1(5,3)
        console.log(x)
    function add2(a,b) {
        return a + b
    }

    let y = add2(5,3)
    console.log(y)

// function greet(name){
//     console.log("Hello" + name)
// }

// let result = greet("soni")
// console.log(result)




// function greet(name){
//     return "hello" + name
// }

// let resu = greet("soni")
// console.log(resu)

function greet(name = "guest") {
    console.log("Hello " + name)
}
greet()
greet("Soni")

//-------------------------------------------------------------

greet1("Soni")

function greet1(name) {
    console.log("Hello " + name) //function declaration
}

//greet2("Soni") function expression me hum pehle call nahi kar sakte hai
let greet2 = function(name){
    console.log("Hello " + name) //functiom expression
}
greet2("Soni")

//----------------------------------------------------------------

let add = (a,b) => a + b
console.log(add(5,6))

//----------------------------------------------------------------

let btn = document.querySelector(".container")
btn.addEventListener("click", function(e){
    console.log(e.target)
    alert("hey!")

})
