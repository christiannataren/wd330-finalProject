import { loadTemplate } from "./Fetcher.mjs"
export async function loadHeader() {
    let data = await loadTemplate("/portion/header.html");
    document.querySelector("body").insertAdjacentHTML("afterbegin", data);
}
export async function loadFooter() {
    let data = await loadTemplate("/portion/footer.html");
    (function addTime() {
        document.querySelector("body").insertAdjacentHTML("beforeend", data);
        document.querySelector("#currentyear").textContent = new Date().getFullYear();
        document.querySelector("#lastmodified").textContent = "Last modification: " + document.lastModified;
    })();
}