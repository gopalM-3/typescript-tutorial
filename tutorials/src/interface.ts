interface UserInterface {
    name: string;
    age?: number;
    sayHi(): string;
}

const user1: UserInterface = {
    name: "Marc",
    age: 30,
    sayHi() {
        return "Hi " + this.name + "!";
    },
};
const user2: UserInterface = {
    name: "Steven",
    sayHi() {
        return "Hi " + this.name + "!";
    },
};

console.log(user1.sayHi());
console.log(user2.sayHi());
