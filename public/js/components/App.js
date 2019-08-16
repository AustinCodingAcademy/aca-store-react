function App(props) {
    let products = props.products.map((prod, i) => {
        <ProductDetail 
            key={i} 
            name={prod.name}
            description={prod.description} 
            reviews={prod.reviews}
            rating={prod.rating}
            imgUrl={prod.imgURL}
            price={prod.price}
        />
    })

    return (
        <div className="App">
            <Header cartNumber={props.numberOfItemsInCart}/>
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
                            {products}
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <hr/>
                <Footer />
            </div>
        </div>
    )
}
