class App extends React.Component{
    state = {
        shoppingCart: []
    }

    addItemToCart = (product)=> {
        this.setState(()=>{
            this.state.shoppingCart.push(product);
            return {shoppingCart:this.state.shoppingCart}
        })
    }
    render() {
    const productDetails = this.props.products.map((p,i)=>{
        return  <ProductDetail 
        addToCart={this.addItemToCart}
        key={i} 
        product={p} />
    });
    return (<div className="App">
        {/* <!--<Header>--> */}
       <Header cart={this.state.shoppingCart}/>
        {/* <!--</Header>--> */}

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
                   {/* <!--<Carousel>--> */}
                   <Carousel/>
                   {/* <!--</Carousel>--> */}
                   <div className="row">
                       {/* <!--<ProductDetail>--> */}
                       {productDetails}
                       {/* <!--</ProductDetail>--> */}
                   </div>

               </div>

           </div>

       </div>

       <Footer/>
         </div>
        );
    }   
} 