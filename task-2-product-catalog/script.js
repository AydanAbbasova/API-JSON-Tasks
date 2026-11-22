const searchInput = document.querySelector(".search");
const categorySelect = document.querySelector(".category");
const message = document.querySelector(".message");
const productsList = document.querySelector(".products");
const loadMoreBtn = document.querySelector(".load-more");

let limit = 12;
let skip = 0;
let searchText = "";
let category = "";

async function loadProducts() {
  let url = "https://dummyjson.com/products?limit=" + limit + "&skip=" + skip;
  if (searchText !== "") {
    url =
      "https://dummyjson.com/products/search?q=" +
      searchText +
      "&limit=" +
      limit +
      "&skip=" +
      skip;
  }

  if (category !== "") {
    url =
      "https://dummyjson.com/products/category/" +
      category +
      "?limit=" +
      limit +
      "&skip=" +
      skip;
  }

  message.textContent = "Loading...";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();

    if (data.products.length === 0 && skip === 0) {
      message.textContent = "No products found";
    } else {
      message.textContent = "";
    }
    data.products.forEach(function (product) {
      const card = document.createElement("li");
      card.innerHTML =
        '<img src="' +
        product.thumbnail +
        '">' +
        "<h2>" +
        product.title +
        "</h2>" +
        "<p>Price: $" +
        product.price +
        "</p>" +
        "<p>Category: " +
        product.category +
        "</p>" +
        "<p>Rating: " +
        product.rating +
        "</p>" +
        "<p>Stock: " +
        product.stock +
        "</p>";

      productsList.appendChild(card);
    });

    skip = skip + limit;

    if (skip < data.total) {
      loadMoreBtn.style.display = "block";
    } else {
      loadMoreBtn.style.display = "none";
    }
  } catch (error) {
    message.textContent = "Error: " + error.message;
  }
}

async function loadCategories() {
  try {
    const response = await fetch("https://dummyjson.com/products/categories");
    if (!response.ok) {
      throw new Error("Request failed");
    }

    const categories = await response.json();
    categories.forEach(function (item) {
      const option = document.createElement("option");
      option.value = item.slug;
      option.textContent = item.name;

      categorySelect.appendChild(option);
    });
  } catch (error) {
    message.textContent = "Error: " + error.message;
  }
}

function startOver() {
  skip = 0;
  productsList.innerHTML = "";
  loadMoreBtn.style.display = "none";
  loadProducts();
}

function searchProducts() {
  searchText = searchInput.value.trim();
  category = "";
  categorySelect.value = "";
  startOver();
}

function changeCategory() {
  category = categorySelect.value;
  searchText = "";
  searchInput.value = "";
  startOver();
}

searchInput.addEventListener("input", searchProducts);
categorySelect.addEventListener("change", changeCategory);
loadMoreBtn.addEventListener("click", loadProducts);

loadCategories();
loadProducts();