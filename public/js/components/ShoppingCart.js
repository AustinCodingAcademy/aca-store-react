function ShoppingCart (props) {
    const productDetail = props.cart.map((product, i)=>{
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
    return(
        <div className="row">
            {productDetail}
            <button>Checkout</button>
        </div>
    )
}

ShoppingCart.propTypes = {
    cart: PropTypes.array.isRequired,
    numberOfItemsInCart: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired
}