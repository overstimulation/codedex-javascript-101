const pig = {
  name: "Lola",
  type: "pig",
  age: 3,
  makeSound() {
    return (
      pig.name +
      " is a " +
      pig.age +
      " year old " +
      pig.type +
      " that goes oink!"
    );
  },
};

const sheep = {
  name: "Shaun",
  type: "sheep",
  age: 18,
  makeSound() {
    return (
      sheep.name +
      " is a " +
      sheep.age +
      " year old " +
      sheep.type +
      " that goes baa!"
    );
  },
};

const dog = {
  name: "Hachiko",
  type: "dog",
  age: 11,
  makeSound() {
    return (
      dog.name +
      " is a " +
      dog.age +
      " year old " +
      dog.type +
      " that goes woof!"
    );
  },
};

console.log(pig.makeSound());
console.log(sheep.makeSound());
console.log(dog.makeSound());
