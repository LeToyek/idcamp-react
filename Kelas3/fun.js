function minimal(a,b) {
    if (a<b) {
        return a
    }else if (b<a) {
        return b
    }else{
        return a
    }
}
function power(a,b) {
    return Math.pow(a,b)
}
console.log(minimal(10,8))
console.log(power(3,4)) 
console.log(power(3,3))
console.log(power(4,0.5))
