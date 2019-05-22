let { products, numberOfItemsInCart, cart } = state;


function addToCart(id) {
    numberOfItemsInCart++;
    let product = products.filter(p => p.id === id);
    cart.push(product);
    renderApp();
}

function renderApp() {
    ReactDOM.render(<App products={products} addToCart={addToCart} />, document.getElementById('root'));
}

renderApp();