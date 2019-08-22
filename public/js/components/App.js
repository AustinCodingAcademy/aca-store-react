
class App extends React.Component{
    state ={
        shoppingcart: [],
        products:[],
        orders:[]
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
    postOrders=(orderedProd)=>{
        let newOrdName = orderedProd.name
        let newOrdDescrip = orderedProd.description
        let newOrdPrice = orderedProd.price
        let options ={
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({name:newOrdName, description:newOrdDescrip, price:newOrdPrice})
        }
        fetch('/orders',options)
        .then(res=>res.json())
        .then(data=> console.log("here is my" + data))
    }
    render(){
    return(
        <div className="App">
            <Header shoppingcart={this.state.shoppingcart} postOrders={this.postOrders}/>
            <Container products={this.state.products} addToCart={this.addToCart}/> 
            <Footer />
        </div>
        )
    }
}


