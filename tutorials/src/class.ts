interface HumanInterface {
    getFullName(): string;
}

class Human implements HumanInterface {
    private firstName: string;
    private lastName: string;
    private readonly fullName: string;
    protected profess: boolean;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }

    getFullName(): string {
        return this.fullName;
    }
}

class Professor extends Human {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
        this.profess = true;
    }
}
class Student extends Human {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
        this.profess = false;
    }
}

const stud = new Student("Gopal", "Matcha");
console.log(stud.getFullName());
