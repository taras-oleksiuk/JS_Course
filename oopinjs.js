function Animal(type, name, food) {
    this.type = type;
    this.name = name;
    this.food = food;

    this.toString = () => Object.getPrototypeOf(this).constructor.type.name.food;
    this.sound = function () {
        return "";
    }

}

class Cat extends Animal {
    Cat(type, name, food) {
        this.type = type;
        this.name = name;
        this.food = food;
    }
    sound = function () {
        return "Meow!";
    }
}

class Dog extends Animal {
    constructor(type, name, food) {
        super(type, name, food);
    }
    sound = function () {
        return "Woof!";
    }
}

const Tom = new Cat("cat", "Tom", "milk");
console.log(`${Tom.name} is a ${Tom.type}. ${Tom.name} likes to eat ${Tom.food}, and its sound sounds like a ` + Tom.sound());
const Rex = new Dog("dog", "Rex", "meat");
console.log(`${Rex.name} is a ${Rex.type}. ${Rex.name} likes to eat ${Rex.food}, and its sound sounds like a ` + Rex.sound());
