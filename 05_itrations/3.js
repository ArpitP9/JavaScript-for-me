// for of


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const  greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

// console.og(map)

for (const [iterator,value] of map) {
    console.log(iterator,':-',value);
}