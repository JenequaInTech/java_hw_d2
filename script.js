//==== E1====
let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
};

// ===== E #2 =====

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

    this.addAge = () => {
        this.age += 1;
    };
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.printInfo();
person2.printInfo();

person1.addAge();
person1.addAge();
person1.addAge();
person1.printInfo();


function checkStringLength(inputString) {
    return new Promise((resolve, reject) => {
        if (inputString.length > 10) {
            resolve("Big word");
        } else {
            resolve("Small word");
        }
    });
}

checkStringLength("Hello World!").then(message => console.log(message));
checkStringLength("Hi there!").then(message => console.log(message)); 
