

class App extends React.Component{
    state ={
        shoppingcart: [],
        products:[]
    }
    componentDidMount(){
        fetch("http://localhost:4000/products")
          .then((res)=>res.json())
          .then((products)=> {
            this.setState({products})
          })
        }


    addToCart=(product)=>{
        this.state.shoppingcart.push(product)
        this.setState({
            shoppingcart: this.state.shoppingcart
        })
        console.log(this.state.shoppingcart)
    }
    render(){
    return(
        <div className="App">
            <Header shoppingcart={this.state.shoppingcart}/>
            <Container products={this.state.products} addToCart={this.addToCart}/> 
            <Footer />
        </div>
        )
    }
}

//ReactDOM.render(<App/>,document.getElementById('root'))
