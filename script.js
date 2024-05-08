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
  
  static MAX_HEALTH = 100;
  constructor(name) {
    this.name = name;
    this.health = Math.floor(Math.random() * 100) + 1;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  };
  getHealth(){
    console.log(`${this.name}'s health: ${this.health}`);
  }
};

const robin = new Character("Sheffer");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
robin.roll();
robin.companion.companion.roll();
robin.companion.roll();
robin.getHealth();
robin.companion.getHealth();
robin.companion.companion.getHealth();




//Part3: Class features

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];
  constructor(name, role) {
    super(name);
    // Adventurers have specialized roles.
    if (Adventurer.ROLES.includes(role)) {
      this.role = role;
    }

    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
    this.skills = [];
    this.experience = 0;
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  getExperience(amount) {
    this.experience += amount;
    console.log(`${this.name} gained ${amount} experience points.`);
  }

  getSkills(skill) {
    this.skills.push(skill);
    console.log(`${this.name} learned a new skill: ${skill}.`);
  }
}

// Companion class

class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type; // Type of the companion (e.g., Cat, Dog, etc.)
    this.tricks = []; // Array to store tricks the companion can perform
  }

  // Method for the companion to perform a trick
  performTrick(trick) {
    console.log(`${this.name} performs ${trick}!`);
  }

  // Method to teach the companion a new trick
  teachTrick(trick) {
    this.tricks.push(trick);
    console.log(`${this.name} learned a new trick: ${trick}.`);
  }
}

//Change the declaration of Robin and the companions using new Adventurer and Companion classes.

const robin2 = new Adventurer("Robin", "Fighter");
robin2.inventory = ["sword", "potion", "artifact"];
robin2.companion = new Companion("Leo");
robin2.companion.type = "Cat";
robin2.companion.companion = new Companion("Frank");
robin2.companion.companion.type = "Flea";
robin2.companion.companion.inventory = ["small hat", "sunglasses"];
robin2.roll();
robin2.companion.companion.roll();
robin2.companion.roll();
robin2.scout();
robin2.getExperience(3);
robin2.getSkills("dentist");
robin2.companion.performTrick("trick");
robin2.companion.teachTrick("trick");
//Part4: Class Uniforms 


