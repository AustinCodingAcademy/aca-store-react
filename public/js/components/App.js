

function App(props){
    let shoppingcart = props.numberOfItemsInCart
    return(
        <div className="App">
            <Header shoppingcart={shoppingcart}/>
            <Container theProducts={props.theProducts}/> 
            <Footer />
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))
