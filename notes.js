let x = 1;
let y = 2;
let x1 = 1;
let y1 = 2;
console.log("|\t\tx\t\t|\t\ty\t\t|")
for (let i = 0; i < 10; i++) {
    x = x1;
    y = y1;
    x1 = (9+2*y)/5
    y1 = (8-x*2)/-3
    

    console.log("|"+x1+"|"+y1+"|")
    console.log("------------------")
}


// let x = 1;
// let y = 2;
// let z = 3;
// let x1 = 0;
// let y1 = 0;
// let z1 = 0;
// console.log("|\t\tx\t\t|\t\ty\t\t|\t\tz\t\t|")
// for (let i = 0; i < 20; i++) {
//     x1 = (4-2*y-z)/4
//     x = x1;
//     y1 = (4-3*x-5*z)/-1
//     y = y1;
//     z1 = (-2-3*y-5*x)/-3
//     z = z1
//     console.log("|"+x1+"|"+y1+"|"+z1+"|")
//     console.log("------------------")
// }