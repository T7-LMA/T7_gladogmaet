console.log("Overview.js loaded");

const categories = document.querySelector(".text");

fetch(`'https://dummyjson.com/recipes'`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data); // Debugging: Se om data hentes korrekt
    showCategories(data);
  });

function showCategories(data) {
  const markup = data
    .map(
      (element) => `
      <p>
        <a href="productlist.html?category=${element.mealType}">${element.mealType}</a>
      </p>
    `
    )
    .join("");

  categories.innerHTML = markup;
}
