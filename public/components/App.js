class App extends React.Component{
    state = {
        products: [],
        user:{},
        view: "all"
    }
    
    componentDidMount(){
        fetch('/products')
            .then(res => res.json())
            .then(data => this.setState({products: data}))
        fetch('/users')
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
        let user = this.state.user;
        // let cart = [...this.state.user.cart]
        let foundProd = this.state.products.find(p => p._id === prodId);
        let foundInCart = user.cart.find(p => p._id === prodId);
        if(!foundInCart){
            let product = new CartItem(foundProd._id, foundProd.price, 1, foundProd.imgUrl, foundProd.name, foundProd.description)
            user.cart.push(product)
            console.log(user);
        }
        else{
            let quantity = Number(foundInCart.quantity);
            foundInCart.quantity = quantity + 1;
            console.log(user);
        }
        fetch('/users',{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user)
            })
        
    }

    cartView = e =>{
        this.setState({view: "cart"})
        console.log(this.state.view)
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
        return(
            <div>
                <Layout
                    user = {this.state.user}
                    products = {this.state.products}
                    countCartItems = {this.countCartItems}
                    cartView = {this.cartView}
                    view = {this.state.view}
                >
                    {this.props.children}
                </Layout>
            </div>
        )
    }
}