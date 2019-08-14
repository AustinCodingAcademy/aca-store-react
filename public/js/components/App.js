

function App(props){
    return(
        <div>
            <Header />
            <Container theProducts={props.theProducts}/> 
            <Footer />
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))
