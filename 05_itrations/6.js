// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })


const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

// console.log(newNums)

const books = [
    { title: 'Book one', genre: 'fiction', publish: 1981, edition: 2004 },
    { title: 'Book two', genre: 'non-fiction', publish: 1992, edition: 2008 },
    { title: 'Book three', genre: 'history', publish: 1999, edition: 2007 },
    { title: 'Book four', genre: 'non-fiction', publish: 1989, edition: 2010 },
    { title: 'Book five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book six', genre: 'fiction', publish: 1987, edition: 2010 },
    { title: 'Book seven', genre: 'history', publish: 1986, edition: 1996 },
    { title: 'Book eight', genre: 'science', publish: 2011, edition: 2016 },
    { title: 'Book nine', genre: 'non-fiction', publish: 1981, edition: 1989 }
]
console.log("books with genre history")
let userbook = books.filter((bk) => bk.genre === 'history')
console.log(userbook)

console.log("books published after year 1995 with genre history")
 userbook = books.filter((dk) => dk.publish >= 1995 && dk.genre === 'history')
console.log(userbook)

