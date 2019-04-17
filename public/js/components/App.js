class App extends React.Component {
    state={
        shoppingCart:[]
    }
    addItemToCart = (product)=> {
     this.setState(()=>{
         this.state.shoppingCart.push(product);
         return {shoppingCart:this.state.shoppingCart}
     })
    }


    render() {
    return (
        <div className="App">
            <Header ItemsInCart={this.cart} />

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
                            {this.props.products.map((product,i) => {
                                return (
                                    <ProductDetail 
                                    key={i} 
                                    prods={this.props.products[i]}
                                    cart={this.props.cart} 
                                    addItemToCart={addItemToCart}/>
                                )
                            })}



                        </div>

                    </div>

                </div>

            </div>

            <div className="container">

                <hr />


                <Footer />
            </div>
        </div>
    )
                        
}
}