// const tinderUser =new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Arpit",
            lastname: "Pandey"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const { courseInstructor: instructor } = course

console.log(instructor)

//   APIs+++++++++++++++++++++

// {
//     "name":"hitesh",
//     "coursename ":"js in hindi",
//     "price":"free"
// }


