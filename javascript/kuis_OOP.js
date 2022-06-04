class Animal{
    constructor(name,age,isMammal){
        this.name = name
        this.age = age
        this.isMammal = isMammal
    }
}

class Rabbit extends Animal{
    constructor(name,age){
        super(name,age)
        super.isMammal = true
    }
    eat(){
        return `${this.name} sedang makan!`
    }
}

class Eagle extends Animal{
    constructor(name,age){
        super(name,age)
        super.isMammal = false
    }
    fly(){
        return `${this.name} sedang terbang!`
    }
}

myRabbit = new Rabbit('Labi',2)
myEagle = new Eagle('Elo',4)
