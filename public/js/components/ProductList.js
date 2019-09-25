function ProductList (props) {
    let productDetail = null;
    if (props.products.length === 0) {
        productDetail = "No Product Available"
    } else {
        productDetail = props.products.map((product, i)=>{
            return <ProductDetail 
                key={i}
                product={product}
                productName={product.name}
                productDescription={product.description}
                productReviews={product.reviews}
                productRating={product.rating}
                productUrl={product.imgurl}
                productPrice={product.price}
                numberOfItemsInCart={props.numberOfItemsInCart}
                addToCart={props.addToCart}
            />
        })
    }
    return (
        <div className="row">
            {productDetail}
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    numberOfItemsInCart: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired
}