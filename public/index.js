const { products, numberOfItemsInCart } = state;

ReactDOM.render(<App products={products} numberOfItemsInCart={numberOfItemsInCart} />, document.getElementById('root'));