function App(props) {
  return <div className="App">
    <Header numberOfItemsInCart= {props.state.numberOfItemsInCart}/>


    <div className="container">

      <div className="row">

        <div className="col-md-3">
          <p className="lead">Shop Name</p>
          <div className="list-group">
            <a href="#" className="list-group-item">Category 1</a>
            <a href="#" className="list-group-item">Category 2</a>
            <a href="#" className="list-group-item">Category 3</a>
          </div>
        </div>

        <div className="col-md-9">
          <Carousel />

          <div className="row">
            {props.state.products.map(product => <ProductDetail product={product} onAddProduct={() => props.state.numberOfItemsInCart++}/>)}


          </div>

        </div>

      </div>

    </div>

    <div className="container">

      <hr />



    </div>
    <Footer/>
  </div>
}