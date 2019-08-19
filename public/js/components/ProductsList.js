//NOTES: ProductList commented out: made mapping data from local file- NO FETCHING FROM DATABASE:
/*function ProductsList(props){
    let myProducts = props.theProducts
        let productsList = myProducts.map((product, i)=>{
            return (      
                <div> 
                    <ProductsDetail product={product} key={i} addToCart={props.addToCart}/>
                </div> )   
        })
    return(<div>{productsList}</div>) 
}*/

function ProductsList(props){
        let productsList = props.products.map((product, i)=>{
            return (      
                <div> 
                    <ProductsDetail product={product} key={i} addToCart={props.addToCart}/>
                </div>  
            )   
        });
    return(
        <div>{productsList}</div>
    ) 
}

