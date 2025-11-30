export function loading() {
    return `<div class="loading"></div>`;
}



export function catDog(cat, dog) {
    console.table(cat[0]);
    console.table(dog[0]);
    return `
    <div id="options">
    <div id="cat" class="option" >
     <div class="values">
     <h3>Cat</h3>
    <span class="hvalue">Breed:</span>
        <span class="value">${cat[0].breeds[0].name}</span>
    <span class="hvalue">Origin:</span>
        <span class="value">${cat[0].breeds[0].origin}</span>
    </div>
    <button class="like" data-action="like"  data-id="${cat[0].id}" data-type="cat">
    </button>
        <img src="${cat[0].url}" alt="">        
    </div>
    <div id="vs"></div>
    <div id="dog" class="option">
    
    <div class="values">
     <h3>Dog</h3>
    <span class="hvalue">Breed:</span>
        <span class="value">${dog[0].breeds[0].name}</span>
    <span class="hvalue">Breed Group:</span>
        <span class="value">${dog[0].breeds[0].breed_group}</span>
    </div>
    <button class="like" data-action="like" data-id="${dog[0].id}" data-type="dog">
    </button>
        <img src="${dog[0].url}" alt="">
    </div>
</div>
    `

}