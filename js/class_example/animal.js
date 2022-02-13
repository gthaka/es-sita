export class Animal{
    constructor(type, legs, classification='Not Classified') {
        this.type = type;
        this.legs = legs;
        this.classification = classification;
    }
    makeNoise(sound = 'Loud Noise'){
        console.log(sound);
    }

    get metaData(){
        return `Type: ${this.type}, Legs: ${this.legs}, Classification: ${this.classification}`;
    }

    static default(){ return 'This is an animal class'; }// No need for instantiation
}

export class Cat extends Animal{
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }
    makeNoise(sound = 'Meow!!') {
        super.makeNoise(sound);
    }
}