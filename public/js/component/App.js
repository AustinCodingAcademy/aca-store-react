class App extends React.Component{
    state ={
        cart: [],
        numberOfItemsInCart: 0,
    }
    addItemToCart = (product)=>{
        this.setState(()=>{
            this.state.cart.push(product);
            numberOfItemsInCart += 1;
            return {cart: this.state.cart}
        })
    }
    render(){
        let aProduct = this.props.products.map((product,i)=>{
            return <ProductDetail 
            itemAdd = {this.addItemToCart}
            key={i}
            product = {product}
            />
        })
    return (
<div className="App">
            <Header  cart={this.state.cart}/>
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
                    //<ProductDetail product={aProduct}/>
                {/* {aProduct} */}
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <hr/>
        <Footer/>
    </div>
</div>
    )
   }
}
