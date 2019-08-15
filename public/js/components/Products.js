function Products(props){
    let myProducts = props.theProducts
        let productsList = myProducts.map((product)=>{
            return (      
                <div> 
                    <ProductsDetail product={product}/>
                </div>  
            )   
        })
    return(
    <div>
        <div>{productsList}</div>
    </div>
    ) 
}
