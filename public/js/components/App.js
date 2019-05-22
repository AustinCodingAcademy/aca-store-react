function App(props) {

    function mapProductDetails() {
        return props.products.map(p => {
                return <ProductDetail product={p} />
            })
    }

    return (
        <div className="App">
            <Header numberOfItemsInCart={numberOfItemsInCart} />
        
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
                            {mapProductDetails()}        
                        </div>
        
                    </div>
        
                </div>
        
            </div>
            
            <div className="container">
        
                <hr/>
        
                <Footer />
                {/* <!--</Footer>--> */}
            </div>
        </div>
    )
}