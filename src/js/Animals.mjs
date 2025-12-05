import { getJson } from "./Fetcher.mjs";
class Animal {

    constructor(url, api_key) {
        this.url = url;
        this.searchEnpoint = "/v1/images/search"
        this.params = { has_breeds: true, "api_key": api_key }
    }
    async get() {
        let data = await getJson(this.url + this.searchEnpoint, this.params);
        return data;
    }
}

export class Cat extends Animal {
    constructor() {
        super("https://api.thecatapi.com", "live_ddhEL32ozSG4mKF2qv7GiURNcKWMEb6KAuwJT80whiNIZChhi7fyrV090y8zxAsX");

    }



}

export class Dog extends Animal {
    constructor() {
        super("https://api.thedogapi.com", "live_DNVZgUgPmsTVly7WdebAm2Ygtgt9sa2dKO6aPXH2ddnYW1wOQXlJTr5zlvR6TAzU");
    }




}
