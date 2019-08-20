function ListProducts(props){
    if(props.products)
    return(
        <div className="row">
            {props.products.map((p,i) => 
                <ProductDetail
                    key = {i}
                    product = {p}
                    addToCart = {props.addToCart}  
                    view = "all"       
                />
            )}
        </div>
    )
    else{
        return "No Products Available"
    }
}