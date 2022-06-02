const user ={
    name: "toyek",
    age:19
}
const user2 ={
    name: "p",
    age:3
}
arr = [
    user,
    user,
    user2
]
for (const users of arr) {
    console.log(users.age)
}