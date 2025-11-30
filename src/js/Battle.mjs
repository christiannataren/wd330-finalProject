import { Cat, Dog } from "./Animals.mjs";
import { catDog, loading } from "./Templates.mjs";
export class Battle {
    constructor(screen) {
        this.screen = screen;

        this.cat = new Cat();
        this.dog = new Dog();
    }
    async start() {
        this.loading();
        let cat = await this.cat.get();
        let dog = await this.dog.get();
        this.loadOptions(cat, dog);
    }

    loading() {
        this.screen.innerHTML = loading();
    }

    loadOptions(cat, dog) {
        let options = catDog(cat, dog);
        this.screen.innerHTML = options;

    }


}