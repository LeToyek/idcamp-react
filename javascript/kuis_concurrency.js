const Car = {
    stock: 30,
    price: 200
}

const testAsync = ()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if (Car.stock >10) {
                resolve("stok ada gan")
            }else{
                reject("gada stok gan")
            }
        }, 3000);
    })
        
}

console.log("doto doto")
testAsync().then((value) => {
    console.log(value)
}).catch((err) => {
    console.log(err)
});
console.log("lama bgt boy")