//https://kea-alt-del.dk/t7/api/products/1525

/*
fetch("https://kea-alt-del.dk/t7/api/products/1525")
.then((response)=> response.json())
.then((data)=> showProduct(data));
*/

window.addEventListener("DOMContentLoaded", init);

const url = "https://kea-alt-del.dk/t7/api/products/1525";

function init() {
  console.log("init");

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showProducts(json);
    });
}
function showProducts(beerJSON) {
    let beerClone;
  
    beerJSON.forEach((beer) => {
      console.log("Beer", beer);
      beerClone = beerTemplate.cloneNode(true).content;
      beerClone.querySelector(".beer_image").src = beer.image_url;
      beerClone.querySelector(".beer_image").alt = `Picture of a ${beer.name} beer`;
      beerClone.querySelector(".beer_name").textContent = beer.name;
      beerClone.querySelector(".beer_tagline").textContent = beer.tagline;
      beerClone.querySelector(".beer_description").textContent = beer.description;
      beerContainer.appendChild(beerClone);
    });
  }