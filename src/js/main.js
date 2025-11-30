import { Battle } from "./Battle.mjs";
import Starter from "./Starter.mjs"

new Starter();
export const battle = new Battle(document.querySelector("#battle"));
// battle.start();
// new Battle(document.querySelector("#battle"));
// (async function () {
//     let dog = await new Dog().get();
//     console.table(dog[0].breeds[0])
// })();
// setInterval(async function () {
//     let choice = Math.round(Math.random() * 2);
//     if (choice == 1) {
//         let dog = await new Dog().get();
//         console.table(dog);
//         document.querySelector("img").setAttribute("src", dog[0].url);
//     } else {
//         let dog = await new Cat().get();
//         document.querySelector("img").setAttribute("src", dog[0].url);
//         console.table(dog);
//     }
// }, 5000);
