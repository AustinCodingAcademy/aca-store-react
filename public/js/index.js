const {
    numberOfItemsInCart,
    products
} = state;

ReactDOM.render(
    <App 
        numberOfItemsInCart={numberOfItemsInCart} 
        products={products}
    />, document.getElementById('root')
);
