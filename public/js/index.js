let {
    products
} = state;

let numberOfItemsInCart = 0;
let cart = [];

function addToCart(cartItem) {
    numberOfItemsInCart += 1;
    cart.push(cartItem)
    render();
}

function render() {
    ReactDOM.render(
        <App 
            products={products}
            cartPlusOne={addToCart}
            />,
        document.getElementById("root")
    );
}
render();