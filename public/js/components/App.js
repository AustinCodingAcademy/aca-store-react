class App extends React.Component {
    state = {
        products: [],
        numberOfItemsInCart: 0,
        cart: [],
        display: 0
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
            body: JSON.stringify(cartItem)
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

    changeView = (num) => {
        this.setState({display: num})
    }
    render(){
        let content = null
        if (this.state.display === 0) {
            content = <ProductList
            products = {this.state.products}
            addToCart = {this.addToCart}
            numberOfItemsInCart = {this.state.numberOfItemsInCart}
            />
        } else if (this.state.display === 1) {
            content = <ShoppingCart
            cart = {this.state.cart}
            addToCart = {this.addToCart}
            numberOfItemsInCart = {this.state.numberOfItemsInCart}
            />
        } else if (this.state.display === 2) {
            content = <NewProduct
            createItem = {this.createItem}
            />
        }

        return (
            <Layout
            products = {this.state.products}
            cart = {this.state.cart}
            numberOfItemsInCart = {this.state.numberOfItemsInCart}
            createItem = {this.createItem}
            addToCart = {this.addToCart}
            componentDidMount = {this.componentDidMount}
            changeView = {this.changeView}
            >
                {content}
            </Layout>
        )
    }
}
App.propTypes = {
    products: PropTypes.array.isRequired
}