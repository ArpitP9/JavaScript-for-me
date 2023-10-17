
// const isUserLoggedin = true
// const temperature = 41

// if(temperature === 40){
//     console.log("less then 50")
// } else {
//     console.log("temperatureis greater then 50")
// }



// const score = 200

// if(score >100){
//     let power = "fly"
//     console.log(`User power : ${power}`)
// }

// console.log(`User power : ${power}`)


// const balance = 1000

// if(balance>500) console.log("test")


const isUserLoggedin = true
const debitcard = true
const loggedinFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedin && debitcard ){
    console.log("allow to buy course");
}

if(loggedInFromEmail || loggedinFromGoogle){
    console.log("user logged in")
}
