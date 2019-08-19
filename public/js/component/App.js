class App extends React.Component {
  state = {
    cart: [],
    numberOfItemsInCart: 0
  };

  addItemToCart = product => {
    let newCart = [...this.state.cart, product];
    let cartLength = this.state.cart.length;
    this.setState({ cart: newCart, numberOfItemsInCart: cartLength });
  };
  render() {
    let aProduct = this.props.products.map((product, i) => {
      return (
        <ProductDetail itemAdd={this.addItemToCart} key={i} product={product} />
      );
    });
    return (
      <div className="App">
        <Header cart={this.state.cart} />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p className="lead">Honest Joe Willie's Store!</p>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  Category 1
                </a>
                <a href="#" className="list-group-item">
                  Category 2
                </a>
                <a href="#" className="list-group-item">
                  Category 3
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <Carousel />
              <div className="row">
                //
                {aProduct}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
          <Footer />
        </div>
      </div>
    );
  }
}
