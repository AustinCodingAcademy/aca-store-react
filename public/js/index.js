function fetchProducts(){
    fetch('http://localhost:3001/products')
    .then(res => res.json())
    .then(data => {
        ReactDOM.render(
            <App 
                products = {data}
            />,
            document.getElementById("root")
        )
    })
}

fetchProducts();

