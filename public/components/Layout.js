function Layout(props){
    console.log(props.view)
    if(props.view === "all"){
        return(
            <div className="App">
                <Header 
                    cart = {props.user.cart}
                    countCartItems = {props.countCartItems}
                    cartView = {props.cartView}
                />
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
                        <ListProducts
                            products = {props.products}                    
                        />       
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
    else{
        return(
            <div className="App">
                <Header 
                    cart = {props.user.cart}
                    countCartItems = {props.countCartItems}
                    cartView = {props.cartView}
                />
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
                        <ShoppingCart
                            cart = {props.user.cart}
                        />
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