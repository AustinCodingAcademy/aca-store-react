class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: state.products,
            cart: state.numberOfItemsInCart,
        }
        this.addCart = this.addCart.bind(this);
        this.checkout = this.checkout.bind(this);
    }

    addCart = (product) => {
        this.setState(() => {
            this.state.cart.push(product);
            return { cart: this.state.cart }
        })
        console.log(this.state.cart)
    }

    checkout = () => {
        this.setState(() => {
            return { cart: [] }
        })
        console.log(this.state.cart)
    }
    render() {
        let Products = this.state.products.map((p, i) => {
            return <ProductDetail product={p} key={i} cart={this.state.cart} addCart={this.addCart} />
        });
        return (
            <div>
                <div className="App">
                    <Header cart={this.state.cart} checkout={this.checkout} />
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
                                <Carousel />>
                        <div className="row">
                                    {Products}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <hr />
                        <Footer />
                    </div>
                </div>

            </div>
        )
    }
}