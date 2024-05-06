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

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
robin.roll();
robin.companion.companion.roll();
robin.companion.roll()


// class Companion extends Character {
//     constructor(name, type) {
//       super(name);
//         this.type = type;
//     }
// }

//Part3: Class features

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
      this.skills = [];
      this.experience = 0;
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }

   getExperience(amount) {
        this.experience += amount;
        console.log(`${this.name} gained ${amount} experience points.`);
    }

    getSkills(skill){
        this.skills.push(skill);
        console.log(`${this.name} learned a new skill: ${skill}.`);
    }
  }