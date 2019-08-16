function ProductDetail(props){

    let star = [];
    for(let i = 0; i < props.product.rating; i ++){
      star.push(<span key={i} className="glyphicon glyphicon-star"></span>);
    }

    let emptystars = [];
    for(let i = 0; i < (5 - props.product.rating); i ++){
        emptystars.push(<span class="glyphicon glyphicon-star-empty"></span>);
    }


    return(<div class="col-sm-4 col-lg-4 col-md-4">
    <div class="thumbnail">
        <img src={props.product.imgUrl} alt=""/>
        <div class="caption">
            <h4 class="pull-right">{props.product.price}</h4>
            <h4><a href="#">{props.product.name}</a>
            </h4>
            <p>{props.product.description}</p>
        </div>
        <div class="ratings">
            <p class="pull-right">{props.product.reviews} reviews</p>
            <p>
                {star}{emptystars}
            </p>
            <button id="addToCart" onClick={()=>{
            state.numberOfItemsInCart += 1;
            props.addToCart(props.product);
        }}>Add To Cart</button>
        </div>
    </div>
</div>);
}