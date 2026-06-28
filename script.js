const products = [

  {

    id: 1,

    name: "Eminem Logo Hoodie",

    price: 69.99,

    image: "images/hoodie1.jpg"

  },

  {

    id: 2,

    name: "Slim Shady T-Shirt",

    price: 34.99,

    image: "images/shirt1.jpg"

  },

  {

    id: 3,

    name: "Rap God Cap",

    price: 24.99,

    image: "images/cap1.jpg"

  },

  {

    id: 4,

    name: "Eminem Sneakers",

    price: 119.99,

    image: "images/shoes1.jpg"

  },

  {

    id: 5,

    name: "Shady Necklace",

    price: 44.99,

    image: "images/jewelry1.jpg"

  },

  {

    id: 6,

    name: "Marshall Mathers Hoodie",

    price: 74.99,

    image: "images/hoodie2.jpg"

  }

];

const productsContainer = document.getElementById("products");

const search = document.getElementById("search");

const cartCount = document.getElementById("cartCount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {

  cartCount.textContent = cart.length;

  localStorage.setItem("cart", JSON.stringify(cart));

}

function displayProducts(items) {

  productsContainer.innerHTML = "";

  items.forEach(product => {

    productsContainer.innerHTML += `

      <div class="card">

        <img src="${product.image}" alt="${product.name}">

        <div class="card-info">

          <h3>${product.name}</h3>

          <p class="price">$${product.price}</p>

          <button class="add-btn" onclick="addToCart(${product.id})">

            Add to Cart

          </button>

        </div>

      </div>

    `;

  });

}

function addToCart(id) {

  const product = products.find(p => p.id === id);

  cart.push(product);

  updateCart();

  alert(product.name + " added to cart!");

}

search.addEventListener("input", () => {

  const value = search.value.toLowerCase();

  displayProducts(

    products.filter(product =>

      product.name.toLowerCase().includes(value)

    )

  );

});

displayProducts(products);

updateCart();
