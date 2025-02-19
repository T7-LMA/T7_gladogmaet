console.log("script hentet");

const produclistContainer = document.querySelector(".productlistContainer");
const params = new URLSearchParams(window.location.search);
const mealType = params.get("category");

fetch(`https://dummyjson.com/recipes/meal-type/${mealType}`)
  .then((response) => response.json())
  .then(showProductList);

function showProductList(data) {
  const markup = data.recipes
    .map(
      (recipe) =>
        `
        <article class="recipe_card">
        <img class="kategoribillede" src="${recipe.image}" style="max-width: 300px; max-height: 300px"; alt="billede til opskrift">
        <h2>${recipe.name}</h2>
        <a href="product.html?id=${recipe.id}"><h3><u>Gå til opskrift</u></h3></a>
        </article>
        `
    )
    .join("");
  console.log(markup);
  produclistContainer.innerHTML = markup;
}

document.addEventListener("DOMContentLoaded", () => {
  const burgermenu = document.getElementById("burgermenu");
  const navLinks = document.getElementById("nav_links");

  burgermenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    burgermenu.classList.toggle("open");
  });
});
