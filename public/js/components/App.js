class App extends React.Component {
    state = {
        cart: [],
        numberOfItemsInCart: 0,
        products: products,
    }

    addItemToCart = (product) => {
        this.setState(() => {
            this.state.cart.push(product);
            return {
                cart: this.state.cart
        }})
    }

    render() {
        let productsList = state.products.map((prod, i) => {
            return (
                <ProductDetail 
                    key={i} 
                    id={prod.id}
                    name={prod.name}
                    description={prod.description} 
                    reviews={prod.reviews}
                    rating={prod.rating}
                    imgUrl={prod.imgUrl}
                    price={prod.price}
                    addToCart={this.addItemToCart}
                />
            )
        });

        return (
            <div className="App">
                <Header cartNumber={this.state.cart} />
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
                                {productsList}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <hr/>
                    <Footer />
                </div>
            </div>
        )
    }
}
