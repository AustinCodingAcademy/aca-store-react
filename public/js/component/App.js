
class App extends React.Component {
    state = {
        cart: []
    }
    
    allProducts = this.props.products.map((product)=>{
        let addProductToCart = this.addProductToCart.bind(this)
        return (<ProductDetail key={product.id} addProductToCart={addProductToCart} product={product} name={product.name} imgUrl={product.imgUrl} description={product.description} reviews={product.reviews} price={product.price} rating={product.rating}/>)
    })
    addProductToCart(product) {
        this.state.cart.push(product)
        this.setState({cart: this.state.cart})
    }
    //temporary number for items in cart
    render () {
        
        return (
            <div className="App">
            
                <Header numberOfItemsInCart={this.state.cart.length} />
    
            
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
                                {this.allProducts}
                        
            
        
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

