import { Cat, Dog } from "./Animals.mjs";
import { catDog, loading } from "./Templates.mjs";
import { Saver } from "./Saver.mjs";
export class Battle {
    constructor(screen) {
        this.screen = screen;

        this.cat = new Cat();
        this.dog = new Dog();
    }
    async verifyWinner() {
        if (Saver.getLikes().length >= 10) {
            let likes = Saver.getLikes();
            let dogs = likes.filter(animal => animal.type == "dog");
            let cats = likes.filter(animal => animal.type == "cat");
            console.log(dogs);
            console.log(cats);
        }

        return false;
    }
    async start() {
        this.verifyWinner();

        this.loading();
        let cat = await this.cat.get();
        let dog = await this.dog.get();
        try {
            cat[0].breeds[0];
        } catch {
            this.start();
        }
        this.loadOptions(cat, dog);
    }

    loading() {
        this.screen.innerHTML = loading();
    }

    loadOptions(cat, dog) {
        let options = catDog(cat, dog);
        this.screen.innerHTML = options;

    }

    error() {

    }


}