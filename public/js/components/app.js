class App extends React.Component{
    state = {
        products: [],
        numberOfItemsInCart: 0,
        cart: []
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

    render(){
        return(
            <div className="App">
           <Header />
        
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
                           <ProductDetail />
         
      
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