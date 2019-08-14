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

//going to need to give an array of <PoductDetail/> components
// renderProductDetail(i){
    //return (
       // <div>
       //   <ProductDetail[i]/>
       //</div>
       // )
    //}