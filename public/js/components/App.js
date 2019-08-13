class App extends React.Component {
    state = {
        products: [],
        numberOfItemsInCart: 0,
        cart: []
    }
    componentDidMount() {
        fetch("http://localhost:3002/products")
            .then(res=>res.json())
            .then(products=>this.setState({products}));
        fetch("http://localhost:3002/orders")
            .then(res=>res.json())
            .then(cart=>this.setState({cart}));
    }
    addToCart = (cartItem) => {
        const newCartQty = this.state.numberOfItemsInCart+1;
        const newCart = [...this.state.cart, cartItem];
        console.log(cartItem)
        this.setState({
            numberOfItemsInCart: newCartQty,
            cart: newCart
        })
        fetch("http://localhost:3002/orders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:cartItem})
        })
    }
    createItem = (item) => {
        const newProducts = [...this.state.products, item]
        this.setState({products: newProducts})
        fetch("http://localhost:3002/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
    }
    stars = (star) => {
        let show = [];
        for (let i=0; i<star; i++) {
            show.push(<span key={i} className="glyphicon glyphicon-star"></span>)
        }
        return show
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
                            </div>
                        </div>
                        <div className="col-md-9">
                            <Carousel />
                            <NewProduct
                            createItem={this.createItem}
                            printProduct={this.printProduct}
                            />
                            <div className="row">
                                {this.state.products.map((product, i)=>(
                                    <ProductDetail 
                                    key={i}
                                    productName={product.name}
                                    productDescription={product.description}
                                    productReviews={product.reviews}
                                    productRating={product.rating}
                                    productUrl={product.imgurl}
                                    productPrice={product.price}
                                    numberOfItemsInCart={this.state.numberOfItemsInCart}
                                    addToCart={this.addToCart}
                                    stars={this.stars}
                                    />
                                )
                                    )}
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