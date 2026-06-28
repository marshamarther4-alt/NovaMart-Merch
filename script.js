const products = [

{

id:1,

name:"8 Mile T-Shirt",

price:34.99,

category:"Shirts",

image:"images/IMG_4086.JPG"

},

{

id:2,

name:"Vintage Album T-Shirt",

price:36.99,

category:"Shirts",

image:"images/IMG_4087.JPG"

},

{

id:3,

name:"Gangster's Evolution Tee",

price:34.99,

category:"Shirts",

image:"images/IMG_4088.JPG"

},

{

id:4,

name:"Minimal White Tee",

price:32.99,

category:"Shirts",

image:"images/IMG_4089.JPG"

},

{

id:5,

name:"Green Eminem Tee",

price:35.99,

category:"Shirts",

image:"images/IMG_4090.JPG"

},

{

id:6,

name:"Black Portrait Tee",

price:34.99,

category:"Shirts",

image:"images/IMG_4091.JPG"

},

{

id:7,

name:"Classic Eminem Tee",

price:35.99,

category:"Shirts",

image:"images/IMG_4092.JPG"

},

{

id:8,

name:"Blue Graphic Tee",

price:36.99,

category:"Shirts",

image:"images/IMG_4093.JPG"

},

{

id:9,

name:"Vintage Photo Tee",

price:35.99,

category:"Shirts",

image:"images/IMG_4094.JPG"

},

{

id:10,

name:"Shady Hoodie White",

price:64.99,

category:"Hoodies",

image:"images/IMG_4095.JPG"

},

{

id:11,

name:"Shady Hoodie Blue",

price:64.99,

category:"Hoodies",

image:"images/IMG_4096.JPG"

},

{

id:12,

name:"Performance Hoodie",

price:66.99,

category:"Hoodies",

image:"images/IMG_4097.JPG"

}

];

let cart = [];

const productsContainer = document.getElementById("products");

const search = document.getElementById("search");

const cartCount = document.getElementById("cartCount");

function displayProducts(list){

productsContainer.innerHTML="";

list.forEach(product=>{

productsContainer.innerHTML+=`

<div class="card">

<img src="${product.image}" alt="${product.name}">

<div class="card-info">

<h3>${product.name}</h3>

<p class="price">$${product.price}</p>

<button class="add-btn" onclick="addToCart(${product.id})">

Add To Cart

</button>

</div>

</div>

`;

});

}

function addToCart(id){

cart.push(id);

cartCount.textContent=cart.length;

}

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=products.filter(product=>

product.name.toLowerCase().includes(value)

);

displayProducts(filtered);

});

displayProducts(products);
