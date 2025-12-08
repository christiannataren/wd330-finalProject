import Starter from "./Starter.mjs"
import { Cat, Dog } from "./Animals.mjs";
import { Favorites } from "./Favorites.mjs";
new Starter("/favorites/");
// new Starter();

let favs = new Favorites(document.querySelector("#favorites"));
favs.init();
