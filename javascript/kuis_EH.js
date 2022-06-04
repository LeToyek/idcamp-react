class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name = message
    }
}
const validateNumberInput = (a,b,c) =>{
    if (isNaN(a)) {
        throw new ValidationError('Argumen pertama harus number')
    }else if(isNaN(b)){
        throw new ValidationError('Argumen kedua harus number')
    }else if(isNaN(c)){
        throw new ValidationError('Argumen ketiga harus number')
    }
}
try {
    validateNumberInput('1',2,false)
} catch (error) {
    console.log(error)
}
