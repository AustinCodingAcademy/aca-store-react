let { products, numberOfItemsInCart } = state;

const cart = [];

function addToCart(p) {
    numberOfItemsInCart++;
    cart.push(p);
    renderApp();
}

function renderApp() {
    ReactDOM.render(<App products={products} numberOfItemsInCart={numberOfItemsInCart} addToCart={addToCart} />, document.getElementById('root'));
}

renderApp();