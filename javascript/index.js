const user ={
    name: "toyek",
    age:19
}
const user2 ={
    name: "p",
    age:3
}
const {name ,age} = user2
console.log(name)
arr = [
    user,
    user,
    user2
]
const greetings = function (name,lang){
    if (lang === 'jawa') {
        return 'Sugeng rawuh ' + name
    }else if (lang === 'sunda') {
        return 'Sampurasun '+ name
    }else{
        return 'tang ina nak sasalita kama isa'
    }
}

console.log(greetings('toyek','sunda'))

const kerja = (pekerjaan) => console.log('sedang ' + pekerjaan)
kerja('nguli')

const belajar = (nama, subject) =>{
    return nama + ' sedang belajar ' + subject
}

console.log(belajar('toyek','ngoding'))
console.log(...arr.map(r=>r.name))

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newArray = names.map((e)=>`${e}!`)
console.log(newArray)

const pureFunction = (person,age) =>{
    return {...person,age}
}
const person = {
    nomme: 'toyek',
    age: 19
}

const newPerson = pureFunction(person,13)
const newPerson2 = pureFunction(person,14)

console.log(person)
console.log(newPerson)
console.log(newPerson2)

const getCoffee = ()=>{
    return new Promise((resolve,reject)=>{
        const seed = 100
        setTimeout(() => {
            if (seed>10) {
                resolve("kopi siap")
            }else{
                reject("kopi habis")
            }
        }, 2000);
    })
}
async function makeCoffee() {
    const coffee = await getCoffee()
    console.log(coffee)
}
makeCoffee()

let myVariable = 12;
myVariable = 30;
myVariable = 5;

console.log(myVariable);
console.log(`$aosdkoaskd`)
if ((true || false) && (false || false)) {
    console.log("It's true");
} else {
    console.log("It's false");
}