console.log("This is tutorial on string")

let a = "harry"

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])

//javascript is most forgiving language as compared to other languages!

console.log(a.length)

//template literals

let name = "Soni"
let friend = "Roshan"
console.log("Her name is " + name + " and her friend's name is " + friend +"")//hectic
console.log(`Her name is ${name} and her friend's name is ${friend}`)//good to use!

let b = "Soni"
// let c = "Son/i"
let c = "Son\"i"  //escape sequence character.
let d = `Son"i`   //convinient way to use.

console.log(c)
console.log(d)

let x = "Fahimul"

console.log(x.toUpperCase())
console.log(x.toLowerCase())

console.log(x.slice(1,5))  //slice(most imp.)
console.log(x.slice(1))

console.log(x.replace("Fahimul","Soni"))  // replace 

console.log(x.concat(b,"Roshan","Arman","Alok"))//concat yani jodna


let y = " Arman "
console.log(y)
console.log(y.trim()) //for trimming

// =========================================================================
// 🚀 SONI'S JS STRINGS & ARCHITECTURE NOTES 🚀
// =========================================================================

// 1. WHAT IS IMMUTABILITY? (Interviews mein bohot puchte hain! 🔥)
// In JavaScript, Strings are IMMUTABLE. Yaani ek baar string ban gayi, 
// toh use direct badla nahi ja sakta.
let myName = "Soni";
myName[0] = "R"; // JS isko ignore kar dega, error nahi dega par badlega bhi nahi!
console.log(myName); // Output ab bhi "Soni" hi aayega.

// 💡 Agar string badalni hai, toh hamesha ek naya variable banana padega:
let newName = myName.replace("S", "R"); 
console.log(newName); // Output: "Roni" (Nayi memory mein naya text bana)


// =========================================================================
// 🌐 TEAM IMMUTABLE VS TEAM MUTABLE (The Architecture Logic)
// =========================================================================

/* 
🔒 TEAM IMMUTABLE: JavaScript, Python, Java, C#
- Yeh languages string ko lock (immutable) rakhti hain.
- WHY USE IN WEB DEV? Security aur Data Stability ke liye!
- Backend par jo data user bhejta hai, wo safely bina badle database tak 
  pahunche, isme immutability help karti hai. No hacker can tamper it easily.

✏️ TEAM MUTABLE: C++, C
- Yeh languages string ko direct badalne deti hain (e.g., str[0] = 'M').
- WHY USE? Extreme speed aur RAM/Memory bachaane ke liye.
- Isliye bade Games (GTA 5) aur Operating Systems C++/C mein bante hain.
- Web Development mein iska use nahi hota kyunki wahan shared memory mein 
  data change hone ka aur hacking ka darr rehta hai.
*/


// =========================================================================
// 🎯 QUICK REVISION: STRING METHODS IMPORTANCE IN MERN & HACKING
// =========================================================================

// A. Template Literals (``) -> 100% USE: Strings aur variables ko bina '+' ke jodne ke liye.
// B. replace() / replaceAll() -> 90% USE: Dangerous words ya urls ko change karne ke liye.
// C. indexOf() / includes() -> 85% USE: Search karne ke liye (Jaise email mein '@' dhoondhna).
// D. slice(start, end) -> 80% USE: Badi string ko chota karne ke liye (Jaise 'Read More...').
// E. Escape Characters (\n) -> 60% USE: Output ko naye line mein print karne ke liye.
// F. trim() -> User ke inputs se फालतू spaces saaf karne ke liye.

console.log("Notes Loaded Successfully! Keep Coding, Soni! 🛡️💻");