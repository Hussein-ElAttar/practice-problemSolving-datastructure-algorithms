interface FlyingBehaviour {
    tryToFly(): string;
}

class FlyingHigh implements FlyingBehaviour {

    tryToFly(): string {
        return "it flys realy high"
    };

}

class DoesntFly implements FlyingBehaviour {

    tryToFly(): string {
        return "can't fly"
    };

}

class Duck {
    flyingBehaviour: FlyingBehaviour = new FlyingHigh();

    constructor() { }

    setFlyingBehaviour(fb: FlyingBehaviour){
        this.flyingBehaviour = fb
    };
}

class MallordDuck extends Duck {
    constructor() {
        super();
    }
}

let md:MallordDuck = new MallordDuck()
console.log(md.flyingBehaviour.tryToFly())

md.setFlyingBehaviour(new DoesntFly())
console.log(md.flyingBehaviour.tryToFly())