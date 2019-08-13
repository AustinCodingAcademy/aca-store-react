// ### index.js
// * Create a index.js file and put the code of rendering App into the div with id = root
// * Provide App with a prop called "products" sending in the products array from the global state variable in state.js


ReactDOM.render(
  <App 
    numberOfItemsInCart = {state.numberOfItemsInCart}
    products={state.products}
  />
  ,document.getElementById("root"));