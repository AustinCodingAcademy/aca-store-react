function ProductsDetail(props){
    return(
        <div class="col-sm-4 col-lg-4 col-md-4">
         <div class="thumbnail">
            <img src={props.product.imgUrl} alt=""/>
                <div class="caption">
                     <h4 class="pull-right">{props.product.price}</h4>
                        <h4><a href="#">{props.product.name}</a></h4>
                        <p>{props.product.description} at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                 </div>
                 <div class="ratings">
                    <p class="pull-right">{props.product.reviews} reviews</p>
                    <p>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                    </p>
                 </div>
             </div>              
        </div>
      )
}
        
   