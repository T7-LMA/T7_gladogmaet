console.log("script hentet");

const webForm = document.querySelector(".webForm");
const params = new URLSearchParams(window.location.search);
//const id = params.get("id");
const id = "1";

fetch(`https://dummyjson.com/recipes/${id}`)
.then((response) => response.json())
.then(showProduct);

function showProduct(data) {
    const markup = data.recipes.id
    .map(
        (recipe) =>
            `<div class="web_1">
          <h1>${recipe.name}</h1>
          <img
            src="${recipe.image}"
            alt="pizza"
            class="image"
          />
        </div>
        <div class="web_2">
          <div class="book">
            <div class="page_left">
              <h2>Ingredients</h2>
              <ul>
                <li>${recipe.ingredients}</li>
              </ul>
            </div>
            <div class="page_right">
              <p>${recipe.instructions}</p>
            </div>
          </div>
        </div>
      </div>`
    )
    .join("");
    console.log(markup);
    showProduct.innerHTML = markup;
}