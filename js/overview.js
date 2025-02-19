const categories = document.querySelector(".categories");

fetch(`'https://dummyjson.com/recipes'`)
  .then(res => res.json())
  .then((data) => {
    console.log(data); // Debugging: Se om data hentes korrekt
    showCategories(data);
  });

function showCategories(data) {
  const markup = data
    .map(
      (element) => `
      <p>
        <a href="productlist.html?category=${element.category}">${element.category}</a>
      </p>
    `
    )
    .join("");

  categories.innerHTML = markup;
}