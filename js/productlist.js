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
        <img class="kategoribillede" src="${recipe.image}" style="max-width: 350px; max-height: 350px"; alt="billede til opskrift">
        <h2>${recipe.name}</h2>
        <a href="product.html?id=${recipe.id}"><h3>Gå til opskrift</h3></a>
        </article>
        `
    )
    .join("");
  console.log(markup);
  produclistContainer.innerHTML = markup;
}
