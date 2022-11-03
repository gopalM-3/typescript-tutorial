var user1 = {
    name: "Marc",
    age: 30,
    sayHi: function () {
        return "Hi " + this.name + "!";
    }
};
var user2 = {
    name: "Steven",
    sayHi: function () {
        return "Hi " + this.name + "!";
    }
};
console.log(user1.sayHi());
console.log(user2.sayHi());
