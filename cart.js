let cartArray = JSON.parse(localStorage.getItem("cartItem"));

const cartData = document.querySelector("#cartData");

function renderArray() {
  if (cartArray != null && cartArray.length > 0) {
    for (let i = 0; i < cartArray.length; i++) {
      cartData.innerHTML += `<div class="card" data-aos="zoom-in-up">
          <div class="card-image">
            <img
              src="${cartArray[i].image}"
              alt="Supplement"
            />
          </div>
          <div class="card-content">
            <h2>${cartArray[i].name}</h2>
            <p>
            ${cartArray[i].description}
            </p>
            <p class="price">Price: $${cartArray[i].price}</p>
            <p><b>Quantity: </b><button class="btn-cart" onclick="AddQuantity(${i})">+</button> 
            <b>${cartArray[i].quantity} </b>
            <button class="btn-cart-2" onclick="SubQuantity(${i})">-</button>
            </p>
            <button class="remove-btn" onclick="removeBtn(${i})">Remove</button>
            </div>
            </div>`;
    }
  } else {
    cartData.innerHTML = `<div class="services-content">
    <div class="row">
    <h4 >No Items Found . . . . .</h4>
    </div>
    </div>`;
  }
}

renderArray();

function removeBtn(index) {
  cartArray.splice(index, 1);
  localStorage.setItem("cartItem", JSON.stringify(cartArray));
  location.reload();
}

function AddQuantity(add) {
  cartData.innerHTML = "";
  cartArray[add].quantity += 1;
  renderArray();
  total();
}

function SubQuantity(sub) {
  if (cartArray[sub].quantity === 1) {
    cartArray.splice(sub, 1);
    localStorage.setItem("cartItem", JSON.stringify(cartArray));
    location.reload();
    total();
  } else {
    cartData.innerHTML = "";
    cartArray[sub].quantity -= 1;
    renderArray();
    total();
  }
}

const totalAmount = document.querySelector("#totalAmount");
let totalPrice = 0;
let totalQuantity = 0;
function total() {
    totalPrice = 0; 
    totalQuantity=0;
    for (let j = 0; j < cartArray.length; j++) {
      totalPrice += cartArray[j].price * cartArray[j].quantity;
      totalQuantity += cartArray[j].quantity;
    }
    totalPrice = parseFloat(totalPrice.toFixed(2));
    totalAmount.innerHTML = `<div class="services-content">
      <div class="row">
      <h4>Total Items : <span>${totalQuantity}</span></h4>
      <h4>Total Amount : <span>$${totalPrice}</span></h4>
      </div>
      </div>`;
  }
  

total();

const checkoutDiv = document.querySelector("#checkout");
// const cartData = document.querySelector("#cartData"); // Assuming this is where the cart items are displayed

// Function to update the checkout button based on the total price
function updateCheckoutButton() {
  const totalPrice = cartArray.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.price),
    0
  );

  if (totalPrice === 0) {
    checkoutDiv.innerHTML = ""; // Clear the div if total price is 0
  } else {
    checkoutDiv.innerHTML = `
      <button class="btn" id="checkout-btn">Checkout</button>
    `;

    const checkoutBtn = document.querySelector("#checkout-btn");
    checkoutBtn.addEventListener("click", handleCheckout);
  }
}

// Function to handle checkout process
function handleCheckout() {
  // Display cart items with their details in the prompt
  const cartItemsDetails = cartArray
    .map(
      (item) =>
        `${item.name} - $${item.price} x ${item.quantity} = $${(
          parseFloat(item.price) * item.quantity
        ).toFixed(2)}`
    )
    .join("\n");

  const totalPrice = cartArray.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.price),
    0
  ).toFixed(2);

  const userConfirmation = confirm(`
    Your Cart Items:
    -------------------------
    ${cartItemsDetails}
    -------------------------
    Total Price: $${totalPrice}

    Please confirm your details to proceed.

    Click OK to enter your details, or Cancel to go back.
  `);

  if (userConfirmation) {
    const userName = prompt("Please enter your name:");
    const userEmail = prompt("Please enter your email:");
    const userContact = prompt("Please enter your contact number:");

    if (userName && userEmail && userContact) {
      alert(`
        Order Details:
        -------------------------
        Name: ${userName}
        Email: ${userEmail}
        Contact: ${userContact}
        Total Price: $${totalPrice}
        -------------------------
        Your order has been placed successfully!
      `);

      // Clear the cart and update the UI
      cartArray = [];
      localStorage.setItem("cartItem", JSON.stringify(cartArray));

      // Update the cart display
      cartData.innerHTML = `<div class="services-content">
        <div class="row">
          <h4>No Items Found . . . . .</h4>
        </div>
      </div>`;

      totalAmount.innerHTML = `<div class="services-content">
      <div class="row">
      <h4>Total Items : <span>0</span></h4>
      <h4>Total Amount : <span>$0</span></h4>
      </div>
      </div>`;

      updateCartLength();
      updateCheckoutButton();
    } else {
      alert("Please provide all the required details to place your order.");
    }
  }
}

// Function to update the cart length display
function updateCartLength() {
  const cartLength = document.querySelector("#cart-length");
  const length = cartArray.length;

  if (cartLength) {
    if (length === 0) {
      cartLength.style.display = "none"; // Hide when the cart is empty
    } else {
      cartLength.style.display = "inline";
      cartLength.textContent = length;
    }
  }
}

// Initialize the checkout button and cart length
updateCheckoutButton();
updateCartLength();


// function showAlert(message) {
//     const alertBox_2 = document.createElement("div");
//     alertBox_2.className = "alert-box-2";
//     alertBox_2.innerHTML = `<p>${message}</p>`;
//     document.body.appendChild(alertBox_2);
  
//     // Remove alert after 2.5 seconds
//     setTimeout(() => {
//       alertBox_2.remove();
//     }, 5500);
//   }


