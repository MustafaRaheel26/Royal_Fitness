const products = [
  // Supplements
  {
    name: "Gold Standard Whey",
    description:
      "Boost your muscle recovery and strength with our high-quality whey protein. Available in various flavors!",
    image: "./GYM_Website_Images/protein-img-2-removebg-preview.png",
    rating: 5,
    price: "49.99",
  },
  {
    name: "Creatine Xplode Powder",
    description:
      "Boost your muscle recovery and strength with our high-quality whey protein. Available in various flavors!",
    image: "./GYM_Website_Images/products-8-removebg-preview.png",
    rating: 5,
    price: "34.99",
  },
  {
    name: "Build Muscle Protein",
    description:
      "Boost your muscle recovery and strength with our high-quality whey protein. Available in various flavors!",
    image: "./GYM_Website_Images/protein-img-5-removebg-preview.png",
    rating: 5,
    price: "39.99",
  },
  {
    name: "Creatine Monohydrate",
    description:
      "Boost your muscle recovery and strength with our high-quality whey protein. Available in various flavors!",
    image: "./GYM_Website_Images/products-11-removebg-preview.png",
    rating: 5,
    price: "44.99",
  },
  {
    name: "Premium Whey Protein",
    description:
      "Boost your muscle recovery and strength with our high-quality whey protein. Available in various flavors!",
    image: "./GYM_Website_Images/produts-12-removebg-preview.png",
    rating: 5,
    price: "49.99",
  },
  {
    name: "Creatine Xtreme Powder",
    description:
      "Boost your muscle recovery and strength with our high-quality whey protein. Available in various flavors!",
    image: "./GYM_Website_Images/products-10-removebg-preview.png",
    rating: 5,
    price: "54.99",
  },
  // Clothing
  {
    name: "Trifit Full Tshirt",
    description:
      "This gym t-shirt, crafted from lightweight, moisture-wicking fabric for enhanced breathability.",
    image: "./GYM_Website_Images/gymfulltshirt-removebg-preview.png",
    rating: 5,
    price: "9.99",
  },
  {
    name: "Gym Trousers Trifit",
    description:
      "These gym trousers feature breathable, stretchable fabric with a slim-fit design for ultimate comfort and flexibility during workouts.",
    image: "./GYM_Website_Images/clothing-2-removebg-preview.png",
    rating: 5,
    price: "12.99",
  },
  {
    name: "Gym Trouser Trifit",
    description:
      "These gym trousers feature breathable, stretchable fabric with a slim-fit design for ultimate comfort and flexibility during workouts.",
    image: "./GYM_Website_Images/clothing-3-removebg-preview.png",
    rating: 5,
    price: "7.54",
  },
  {
    name: "Gray Trifit Tshirt",
    description:
      "This gym t-shirt, crafted from lightweight, moisture-wicking fabric for enhanced breathability.",
    image: "./GYM_Website_Images/clothing-5-removebg-preview.png",
    rating: 5,
    price: "6.99",
  },
  {
    name: "Gym Shorts Trifit",
    description:
      "These gym shorts feature breathable, stretchable fabric with a slim-fit design for ultimate comfort and flexibility during workouts.",
    image: "./GYM_Website_Images/gymshorts-removebg-preview.png",
    rating: 5,
    price: "5.59",
  },
  {
    name: "Colourful Trifit Tshirt",
    description:
      "This gym t-shirt, crafted from lightweight, moisture-wicking fabric for enhanced breathability.",
    image: "./GYM_Website_Images/clothing-4-removebg-preview.png",
    rating: 5,
    price: "6.99",
  },
  // New Gym Gloves
  {
    name: "Gym Gloves Black",
    description:
      "Made with high-quality, lightweight mesh fabric for ventilation, keeping your hands dry and sweat-free.",
    image: "./GYM_Website_Images/clothing-1-removebg-preview.png",
    rating: 5,
    price: "5.99",
  },
  {
    name: "Gym Gloves White",
    description:
      "Made with high-quality, lightweight mesh fabric for ventilation, keeping your hands dry and sweat-free.",
    image: "./GYM_Website_Images/whitecolourgloves-removebg-preview.png",
    rating: 5,
    price: "6.99",
  },
  {
    name: "Gym Gloves Blue",
    description:
      "Made with high-quality, lightweight mesh fabric for ventilation, keeping your hands dry and sweat-free.",
    image: "./GYM_Website_Images/bluecolorgloves-removebg-preview.png",
    rating: 5,
    price: "5.59",
  },
  {
    name: "Gym Belt Small",
    description:
      "Made with high-quality, lightweight mesh fabric for ventilation, keeping your chest dry and sweat-free.",
    image: "./GYM_Website_Images/gymbelt-2-removebg-preview.png",
    rating: 5,
    price: "10.99",
  },
  {
    name: "Gym Belt Large",
    description:
      "Made with high-quality, lightweight mesh fabric for ventilation, keeping your chest dry and sweat-free.",
    image: "./GYM_Website_Images/gymbelt-removebg-preview (1).png",
    rating: 5,
    price: "15.99",
  },
  {
    name: "Gym Hair Band",
    description:
      "Made with high-quality, lightweight mesh fabric for ventilation, keeping your forehead dry and sweat-free.",
    image: "./GYM_Website_Images/gymhairband-2-removebg-preview.png",
    rating: 5,
    price: "7.99",
  },
];

const productsSuppliments = document.querySelector(
  "#products-card-suppliments"
);
const productsClothing = document.querySelector("#products-card-clothing");
const productsSafety = document.querySelector("#products-card-safety");

for (let i = 0; i < 6; i++) {
  productsSuppliments.innerHTML += `<div class="card" data-aos="zoom-in-up">
          <div class="card-image">
            <img
              src="${products[i].image}"
              alt="Supplement"
            />
          </div>
          <div class="card-content">
            <h2>${products[i].name}</h2>
            <p>
            ${products[i].description}
            </p>
            <div class="rating">
              <i class="bx bxs-star" id="Star-2"></i>
              <i class="bx bxs-star" id="Star-2"></i>
              <i class="bx bxs-star" id="Star-2"></i>
              <i class="bx bxs-star" id="Star-2"></i>
              <i class="bx bxs-star" id="Star-2"></i>
            </div>
            <p class="price">Price: $${products[i].price}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${i})">
              <i class="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
          </div>
        </div>`;
}

for (let i = 6; i < 12; i++) {
  productsClothing.innerHTML += `<div class="card" data-aos="zoom-in-up">
          <div class="card-image">
            <img
              src="${products[i].image}"
              alt="Supplement"
            />
          </div>
          <div class="card-content">
            <h2>${products[i].name}</h2>
            <p>
            ${products[i].description}
            </p>
            <div class="rating">
              <i class="bx bxs-star" id="Star-2"></i>
              <i class="bx bxs-star" id="Star-2"></i>
              <i class="bx bxs-star" id="Star-2"></i>
              <i class="bx bxs-star" id="Star-2"></i>
              <i class="bx bxs-star" id="Star-2"></i>
            </div>
            <p class="price">Price: $${products[i].price}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${i})">
              <i class="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
          </div>
        </div>`;
}

for (let i = 12; i < products.length; i++) {
  productsSafety.innerHTML += `<div class="card" data-aos="zoom-in-up">
          <div class="card-image">
            <img
              src="${products[i].image}"
              alt="Supplement"
            />
          </div>
          <div class="card-content">
            <h2>${products[i].name}</h2>
            <p>
            ${products[i].description}
            </p>
            <div class="rating">
              <i class="bx bxs-star" id="Star-2"></i>
              <i class="bx bxs-star" id="Star-2"></i>
              <i class="bx bxs-star" id="Star-2"></i>
              <i class="bx bxs-star" id="Star-2"></i>
              <i class="bx bxs-star" id="Star-2"></i>
            </div>
            <p class="price">Price: $${products[i].price}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${i})">
              <i class="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
          </div>
        </div>`;
}

// Check if items exist in localStorage
let cart = [];
let items = JSON.parse(localStorage.getItem("cartItem"));
cart = items ? items : [];

// Ensure products have a quantity property
products.forEach((product) => {
  if (!product.quantity) {
    product.quantity = 0;
  }
});

// Set initial cart length
let length = cart.length;

// Update Add to Cart button styles for already added items
function updateButtonStyles() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  cart.forEach((cartItem) => {
    products.forEach((product, index) => {
      if (product.name === cartItem.name) {
        const button = addToCartButtons[index];
        if (button) {
          button.style.backgroundColor = "white";
          button.style.color = "var(--main-color)";
          button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Added`;
        }
      }
    });
  });
}

// Display alert for already added items
function showAlert(message) {
  const alertBox = document.createElement("div");
  alertBox.className = "alert-box";
  alertBox.innerHTML = `<p>${message}</p>`;
  document.body.appendChild(alertBox);

  // Remove alert after 2.5 seconds
  setTimeout(() => {
    alertBox.remove();
  }, 2500);
}

// Add to Cart function
function addToCart(cartIndex) {
  const product = products[cartIndex];
  const addToCartBtn = document.querySelectorAll(".add-to-cart-btn")[cartIndex];

  const existingItem = cart.find((item) => item.name === product.name);

  if (existingItem) {
    // If item is already in the cart, increase quantity
    existingItem.quantity += 1;

    // Show alert
    showAlert(`"${product.name}" is already in the cart!`);

    // Update button style
    addToCartBtn.style.backgroundColor = "white";
    addToCartBtn.style.color = "var(--main-color)";
    addToCartBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Added`;
  } else {
    // If item is not in the cart, add it and increase length
    cart.push({ ...product, quantity: 1 });
    length += 1;
    updateCartLength();

    // Update button style
    addToCartBtn.style.backgroundColor = "white";
    addToCartBtn.style.color = "var(--main-color)";
    addToCartBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Added`;
  }
  cartLength.classList.remove("hidden");
  // Save updated cart to localStorage
  localStorage.setItem("cartItem", JSON.stringify(cart));
}

function updateCartLength() {
  const cartLengthBadge = document.querySelector(".cart-length");
  if (cartLengthBadge) {
    cartLengthBadge.textContent = length > 0 ? length : ""; // Show only when > 0
  }
}

updateCartLength();

// Checkout button logic
const checkOutBtn = document
  .querySelector("#cart-btn")
  .addEventListener("click", function () {
    window.location = "cart.html";
    localStorage.setItem("cartItem", JSON.stringify(cart));
  });

const cartLength = document.querySelector("#cart-length");

if (
  cartLength.textContent.trim() === "0" ||
  cartLength.textContent.trim() === ""
) {
  cartLength.classList.add("hidden");
} else {
  cartLength.classList.remove("hidden");
}

updateButtonStyles();
