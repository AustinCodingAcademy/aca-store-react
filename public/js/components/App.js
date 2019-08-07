class App extends React.Component {
    state = {
        products: [],
        numberOfItemsInCart: 0,
        cart: []
    };
    products = this.state.products.map((product,i)=>{
        return <Class ProductDetail 
            key={i}
            productName={product.name}
            productDescription={product.description}
            productReviews={product.reviews}
            //productRating={product.rating}
            productUrl={product.imgUrl}
            productPrice={product.price}
            addToCart={this.state.numberOfItemsInCart}
        />
    })
    addToCart = (cartItem) => {
        this.setState((state, props) => {
            this.state.numberOfItemsInCart += 1;
            this.state.cart.push(cartItem)
            return {cart: this.state.cart};
        })
    }
    render(){
        return (
            <div className="App">
                <Header numberOfItemsInCart={this.state.numberOfItemsInCart}/>    
                <div className="container">   
                    <div className="row">
                        <div className="col-md-3">
                            <p className="lead">Shop Name</p>
                            <div className="list-group">
                                <a href="#" className="list-group-item">Category 1</a>
                                <a href="#" className="list-group-item">Category 2</a>
                                <a href="#" className="list-group-item">Category 3</a>
                                <NewProduct />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <Carousel />
                            <div className="row">
                                {this.state.products}  
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