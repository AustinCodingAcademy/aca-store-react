function Container(props){
    return(
         <div className="container">
               <div className="row">
                   <div className="col-md-3">
                       <p className="lead">Smitty's Shop</p>
                       <div className="list-group">
                           <a href="#" className="list-group-item">Category 1</a>
                           <a href="#" className="list-group-item">Category 2</a>
                           <a href="#" className="list-group-item">Category 3</a>
                       </div>
                   </div>
                   <div className="col-md-9">
                       <Carousel />
                       <div className="row">
                       <ProductsList products={props.products}  addToCart={props.addToCart}/>
                       </div>
                   </div> 
               </div>      
           </div>
    )
}