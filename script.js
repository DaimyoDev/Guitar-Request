const cartItems = document.getElementById("cartitems");
const strat = document.getElementById("strat");
const lesPaul = document.getElementById("lespaul");
const acoustic = document.getElementById("acoustic");

function addItem(e) {
  if (e === "strat") {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = ` <div class="cart__item">
    <h2>Strat Electric</h1>
    <img src="https://cdn.pixabay.com/photo/2017/04/09/16/11/guitar-2216068_960_720.jpg" alt="Electric Guitar">
    <p>Price: $350</p>
  </div>`;
    cartItems.appendChild(cartItem);
  }
  if (e === "lespaul") {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = ` <div class="cart__item">
    <h2>Les Paul Electric</h1>
    <img src="https://cdn.pixabay.com/photo/2016/03/09/09/37/guitar-1245903_960_720.jpg" alt="Second Electric Guitar">
    <p>Price: $215</p>
  </div>`;
    cartItems.appendChild(cartItem);
  }
  if (e === "acoustic") {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = ` <div class="cart__item">
    <h2>Acoustic</h1>
    <img src="https://cdn.pixabay.com/photo/2010/12/13/10/01/guitar-2119_960_720.jpg" alt="Acoustic Guitar">
    <p>Price: $200</p>
  </div>`;
    cartItems.appendChild(cartItem);
  }
}

strat.addEventListener("click", (e) => {
  const idName = e.target.id;
  addItem(idName);
});
lesPaul.addEventListener("click", (e) => {
  const idName = e.target.id;
  addItem(idName);
});
acoustic.addEventListener("click", (e) => {
  const idName = e.target.id;
  addItem(idName);
});
