const productsArr = state.products;
const numInCart = state.numberOfItemsInCart;
ReactDOM.render(<App products={productsArr} cart={numInCart}/>, 
    document.getElementById("root"));