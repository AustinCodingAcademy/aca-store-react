

function App(props){
    let shoppingcart =[6]
    return(
        <div>
            <Header shoppingcart={shoppingcart}/>
            <Container theProducts={props.theProducts}/> 
            <Footer />
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))
