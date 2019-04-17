


function render() {

  ReactDOM.render(
    <App
      cart={state.numberOfItemsInCart}
      products={state.products}
    />
    , document.getElementById("root"));
}

render();