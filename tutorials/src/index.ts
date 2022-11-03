type ID = string;
type ColdDrink = string;
type HotDrink = ColdDrink | null;

interface UserInterface {
    name: string;
    age?: number;
    sayHi(): string;
}

const coldDrinks: ColdDrink[] = ["coffee", "beer"];
const hotDrinks: HotDrink[] = null;

const variable: string | number = 3;

const obj: UserInterface | null = null;
