

function App(props){
    return(
        <div>
            <Header />
            <Container /> 
            <Products theProducts={props.theProducts}/>
            <Footer />
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))
