import { Cat, Dog } from "./Animals.mjs";
import { Templates } from "./Templates.mjs";
import { Saver } from "./Saver.mjs";
export class Battle {
    constructor(screen) {
        this.screen = screen;

        this.cat = new Cat();
        this.dog = new Dog();
        this.winnerChoices = 11;
    }
    verifyWinner() {
        if (Saver.getLikes().length >= this.winnerChoices) {
            let likes = Saver.getLikes();
            let dogs = likes.filter(animal => animal.type == "dog");
            let cats = likes.filter(animal => animal.type == "cat");
            this.addToScreen(Templates.analizingResults());
            let result = "";
            if (dogs.length > cats.length) {
                result = "dog";
            } else {
                result = "cat";
            }
            setTimeout(() => {
                this.addToScreen(Templates.results(result));
            }, 3000);
            return true;
        }

        return false;
    }
    async start() {
        if (this.verifyWinner()) {
            return;
        }

        this.loading();
        let cat = await this.cat.get();
        let dog = await this.dog.get();

        try {
            cat = [await this.cat.getAnimal(cat[0].id)];
            dog = [await this.dog.getAnimal(dog[0].id)];
            cat[0].breeds[0];
            dog[0].breeds[0].name;
        } catch {
            this.error();
        }
        this.loadOptions(cat, dog);
    }

    loading() {
        this.addToScreen(Templates.loading());
    }
    error() {
        this.addToScreen(Templates.errorView());

    }
    addToScreen(html) {
        this.screen.innerHTML = html;

    }

    loadOptions(cat, dog) {
        let options = null;
        try {
            options = Templates.catDog(cat, dog);
        } catch { }
        if (options == null) {
            this.error();
            return;
        }
        this.addToScreen(options);

    }



}