//Part1: Humble Beginnings

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion2: {
            name: "Frank",
            type: "flea",
            belongings: ["hat", "sunglasses"]
        }
    }
};

// adventurer.inventory.forEach((item) =>{
//     console.log(item)
// })
for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i])
}

// console.log(adventurer.companion.name, adventurer.companion.type);


// console.log(adventurer.name);
// console.log(adventurer.companion.name);

//part2: Class Fantasy

class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
      };
};

class Companion extends Character {
    constructor(name, type) {
      super(name);
        this.type = type;
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];

const leo = new Companion("Leo", "Cat");
const frank = new Companion("Frank", "Flea");
frank.inventory = ["small hat", "sunglasses"];
robin.companion = leo;
robin.companion.companion = frank;
robin.roll();
leo.roll(); 
frank.roll(); 


