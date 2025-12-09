import { getJson } from "./Fetcher.mjs";
class Animal {

    constructor(url, api_key = "") {
        this.url = url;
        this.searchEnpoint = "/v1/images/search"
        this.params = { has_breeds: true }
        this.animalEndpoint = "/v1/images/"
    }
    async get() {
        let data = await getJson(this.url + this.searchEnpoint, this.params);
        return data;
    }
    async getAnimal(id) {
        let animal = await getJson(this.url + this.animalEndpoint + id, this.params);
        return animal;

    }
}

export class Cat extends Animal {
    constructor() {
        super("https://api.thecatapi.com");
    }



}

export class Dog extends Animal {
    constructor() {
        super("https://api.thedogapi.com");

    }




}
