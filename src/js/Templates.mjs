import { getRandomNumber } from "./Utils.mjs";
export class Templates {
    static loading() {
        return `<div class="loading"></div>`;
    }
    static errorView() {
        return `
        <div class="error-container">
            <p>Meow!! 🚫 You are going to fast. Calm down!</p>
            <button data-action="re-start"  class="error">Try again</button>
        </div>
        `
    }
    static favorite(favorite) {
        let data = favorite.data;
        let breed = null;
        try {
            breed = favorite.data.breeds[0];
        } catch {

        }
        if (breed == null) {
            return "";
        }
        return `
        <div class="fav-container">
        <div class="header-animal"><h3>${favorite.type.toUpperCase()}</h3></div>

        <img src="${data.url}" alt="photo of ${breed.name}" >
        <div class="values">
    <span class="hvalue">Breed:</span>
        <span class="value">${breed.name}</span>
    <span class="hvalue">${(favorite.type == "cat") ? "Origin" : "Breed Group"}:</span>
        <span class="value">${(favorite.type == "cat") ? breed.origin : breed.breed_group}</span>
    <span class="hvalue">Temperament:</span>
        <span class="value">${breed.temperament}</span>
        <button data-action="show-more" data-id="${data.id}">See more</button>
    </div>

        
        </div>
        `;
    }


    static results(result) {
        let choice = "";
        if (result == "dog") {
            choice = `<p >You are a dog person</p>
            <span class="spinning doggy"></span>
            `;
        } else {
            choice = `<p>You are a cat person</p>
            <span class="spinning kitty"></span>
            `;
        }
        let element = document.createElement("div");
        element.classList.add("result");
        element.innerHTML = choice;
        element.insertAdjacentHTML("beforeend", `<button data-action="favs">
        My favorites
        </button>`);
        element.insertAdjacentHTML("beforeend", `<button data-action="start">
        Try again
        </button>`);
        return element.outerHTML;


    }
    static analizingResults() {
        return `
        
        <div class="result">
        <p>Analyzing...</p>
        <div class="gift-container"><img src="${(getRandomNumber(1) == 0) ? "images/analyzing-cat.gif" : "images/analyzing-dog.gif"}" alt=""></div>
        </div>
        `;

    }
    static catDog(cat, dog) {
        return `
    <div id="options">
    <div id="cat" class="option" >
    <button class="like" data-action="like"  data-id="${cat[0].id}" data-type="cat">
    I choose cat!
    </button>

    <div id="img-container">
    
         <div class="values">
    <span class="hvalue">Origin:</span>
        <span class="value">${cat[0].breeds[0].origin}</span>
    </div>
    <div class="values">
    <span class="hvalue">Breed:</span>
        <span class="value">${cat[0].breeds[0].name}</span>
        </div>
    
     <img src="${cat[0].url}" alt="photo of ${cat[0].breeds[0].name}">
     </div>
    
               
    </div>
    <div id="vs"></div>
    <div id="dog" class="option">
    <button class="like" data-action="like" data-id="${dog[0].id}" data-type="dog">
    I choose dog!
    </button>
     <div id="img-container">
     
     
     
    <div class="values">
    <span class="hvalue">Breed Group:</span>
        <span class="value">${dog[0].breeds[0].breed_group}</span>
        </div>
        <div class="values">
    
    <span class="hvalue">Breed:</span>
        <span class="value">${dog[0].breeds[0].name}</span>
    
    </div>

    <img src="${dog[0].url}" alt="">
    </div>
    
        
    </div>
</div>
    `

    }

    static addValueIfExist(name, property, data, ending = "") {
        let value = "";
        if (property.includes(".")) {
            let split = property.split(".");
            try {
                value = split.reduce((acc, text) => {
                    acc = acc[text];
                    return acc;
                }, data.breeds[0]);
            } catch { }
        } else {
            try {
                value = data.breeds[0][property]
            } catch { }
        }


        if (value == "" || value == undefined) {
            return ""
        }
        return `<span class="hvalue">${name}:</span>
        <span class="value">${value}${(ending.length > 0) ? " " + ending : ""}</span>`

    }
    static emptyFavorites() {
        return `
        <div class="empty-favs">
        <p>Play the Quiz and see your favorites here. </p>
        </div>
        `;
    }
    static showMore(data) {
        let element = `
        <img src="${data.url}" alt="photo of ${data.breeds[0].name}">
        <div class="values">
    ${this.addValueIfExist("Breed", "name", data)}
    ${this.addValueIfExist("Breed Group", "breed_group", data)}
    ${this.addValueIfExist("Temperament", "temperament", data)}
    ${this.addValueIfExist("Life Span", "life_span", data)}
    ${this.addValueIfExist("Weight", "weight.metric", data, "CM")}
    ${this.addValueIfExist("Height", "height.metric", data, "CM")}
    
    </div>
        `
        let template = document.createElement("div");
        template.insertAdjacentHTML("afterbegin", element);
        if (Object.hasOwn(data.breeds[0], "description")) {
            template.insertAdjacentHTML("beforeend", `<h3>Description:</h3><p>${data.breeds[0].description}</p>`);

        } else {
            if (Object.hasOwn(data.breeds[0], "bred_for")) {
                template.insertAdjacentHTML("beforeend", `<h3>Bred for:</h3><p>${data.breeds[0].bred_for}</p>`);
            }

        }
        return template.innerHTML;
    }
}