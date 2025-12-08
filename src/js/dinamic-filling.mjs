import { loadTemplate } from "./Fetcher.mjs"
export async function loadHeader(file) {
    let data = await loadTemplate("/portion/header.html");
    let header = document.querySelector("header");
    header.insertAdjacentHTML("afterbegin", data);
    let lis = header.querySelectorAll("li");
    Array.from(lis).forEach(function (li) {
        let link = li.querySelector("a").getAttribute("href");
        if (link == file) {
            li.classList.add("current");
        }
    });
    
}
export async function loadFooter() {
    let data = await loadTemplate("/portion/footer.html");
    (function addTime() {
        document.querySelector("footer").insertAdjacentHTML("beforeend", data);
        document.querySelector("#currentyear").textContent = new Date().getFullYear();
        document.querySelector("#lastmodified").textContent = "Last modification: " + document.lastModified;
    })();
}