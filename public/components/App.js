class App extends React.Component{
    state = {
        products: [],
        user:{}
    }
    
    componentDidMount(){
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => this.setState({products: data}))
        fetch('http://localhost:3001/users')
            .then(res => res.json())
            .then(data => this.setState({user: data}))
    }

    addToCart = (prodId) =>{
        class CartItem{
            constructor(id, price, quantity, imgUrl, name, description) {
            this._id = id;
            this.price = price;
            this.quantity = quantity;
            this.imgUrl = imgUrl;
            this.name = name;
            this.description = description;
            }
        }
        
        let cart = [...this.state.user.cart]
        let foundProd = this.state.products.find(p => p._id === prodId);
        let foundInCart = this.state.user.cart.find(p => p._id === prodId);
        if(!foundInCart){
            let product = new CartItem(foundProd._id, foundProd.price, 1, foundProd.imgUrl, foundProd.name, foundProd.description)
            cart.push(product)
        }
        else{
            let quantity = Number(foundInCart.quantity);
            foundInCart.quantity = quantity + 1;
            console.log(cart);
        }
        fetch('http://localhost:3001/users',{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(cart)
            })
        
    }

    countCartItems = (cart) =>{
        let numOfItems = 0;
        cart.map(i =>{
            let quantity = i.quantity
            numOfItems += quantity
        })
        return numOfItems
    }

    render(){
        console.log(this.state.products)
        return(
            <div className="App">
                <Header 
                    cart = {this.state.user.cart}
                    countCartItems = {this.countCartItems}
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
                        <div className="row">
                        {this.state.products.map((p,i) => 
                            <ProductDetail
                                key = {i}
                                product = {p}
                                addToCart = {this.addToCart}         
                            />
                        )}
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