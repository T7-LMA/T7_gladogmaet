console.log("script hentet");

const webForm = document.querySelector(".webForm");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://dummyjson.com/recipes/${id}`)
  .then((response) => response.json())
  .then(showProduct);

function showProduct(data) {
  const markup = `<div class="web_1">
          <h1>${data.name}</h1>
          <img
            src="${data.image}"
            alt="pizza"
            class="image"
          />
        </div>
        <div class="web_2">
          <div class="book">
            <div class="page_left">
              <h2>Ingredients</h2>
              <ul>
                <li class="ingredients">${data.ingredients}</li>
              </ul>
            </div>
            <div class="page_right">
              <p>${data.instructions}</p>
            </div>
          </div>
        </div>
      </div>`;

  webForm.innerHTML = markup;
}

document.addEventListener("DOMContentLoaded", () => {
  const burgermenu = document.getElementById("burgermenu");
  const navLinks = document.getElementById("nav_links");

  burgermenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    burgermenu.classList.toggle("open");
  });
});
