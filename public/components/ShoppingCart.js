function ShoppingCart(props){
    console.log(props)
    return(
        <div className="row">
            {props.cart.map((p,i) =>
                <ProductDetail
                    key = {i}
                    product = {p}
                    view = "cart"
                />
            )}
            <button>checkout</button>
        </div>
    )
}