function Products(props){
    let myProducts = props.theProducts
        let productsList = myProducts.map((product, i)=>{
            return (      
                <div> 
                    <ProductsDetail product={product} key={i}/>
                </div>  
            )   
        })
    return(
    <div>
        <div>{productsList}</div>
    </div>
    ) 
}
