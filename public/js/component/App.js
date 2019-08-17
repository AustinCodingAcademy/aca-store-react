function App(props) {
  let products = props.state.products.map((product, index) => {
    return (
      <ProductDetail
        name={product.name}
        id={product.id}
        description={product.description}
        reviews={product.reviews}
        rating={product.rating}
        imgUrl={product.imgUrl}
        price={product.price}
      />
    );
  });
  return (
    <div className="App">
      <Header numberOfItems={props.state.numberOfItemsInCart} />

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p className="lead">Shop Name</p>
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
            <div className="row">{products}</div>
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
