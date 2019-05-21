function ProductDetail(props){
    function starGenerator(){
        let stars = props.details[0].rating
        let starArray = []
        let span
        for(let i =0; i<5;i++){
            if(i<stars){
                span = <span class="glyphicon glyphicon-star"></span>
            }else{
                span = <span class="glyphicon glyphicon-star-empty"></span>
            }
        starArray.push(span)
        }
        return starArray
    }
    function handleAddToCart(){
        props.details[0].quantity += 1
    }
    return(
        <div class="col-sm-4 col-lg-4 col-md-4">
                               <div class="thumbnail">
                                   <img src={props.details[0].imgUrl} alt=""/>
                                   <div class="caption">
                                       <h4 class="pull-right">{props.details[0].price}</h4>
                                       <h4><a className="nameDetails" href="#">{props.details[0].name}</a>
                                       </h4>
                                       <p>{props.details[0].description+" "}<a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                                   </div>
                                   <div class="ratings">
                                       <p class="pull-right">{props.details[0].reviews+" Reviews"}</p>
                                       <p>
                                        {starGenerator()}
                                       </p>
                                   </div>
                                   <button id="addToCart" type="button" class="btn btn-primary" onClick={handleAddToCart}>Add to Cart
                                   </button>
                               </div>
                           </div>
    )
}