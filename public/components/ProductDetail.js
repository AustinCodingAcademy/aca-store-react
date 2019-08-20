function ProductDetail(props){
    let stars = props.product.rating;
    let htmlStars = [];
    for (let i=0; i<stars; i++){
        htmlStars.push(<span className="glyphicon glyphicon-star"></span>)
    }
    if(stars < 5){
        let emptyStars = 5-stars;
        for (let i=0; i<emptyStars; i++){
            htmlStars.push(<span className = 'glyphicon glyphicon-star-empty'></span>)
        }
    }
    if(props.view === 'all'){
        return(
            <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                    <img src={props.product.imgUrl} alt=""/>
                    <div className="caption">
                        <h4 className="pull-right">{props.product.price}</h4>
                        <h4><a href="#">{props.product.name}</a>
                        </h4>
                        <p>{props.product.description}.</p>
                    </div>
                    <div className="ratings">
                        <p className="pull-right">{props.product.reviews}</p>
                        <p>
                            {htmlStars}
                        </p>
                    </div>
                    <div>
                        <button id="addToCartBtn" onClick = {() => {
                            props.addToCart(props.product._id)
                        }}>Add to Cart</button>
                    </div>
                    
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                    <img src={props.product.imgUrl} alt=""/>
                    <div className="caption">
                        <h4 className="pull-right">{props.product.price}</h4>
                        <h4><a href="#">{props.product.name}</a>
                        </h4>
                        <p>{props.product.description}.</p>
                    </div>
                    <div className="ratings">
                        <p className="pull-right">{props.product.reviews}</p>
                        <p>
                            {htmlStars}
                        </p>
                    </div>
                    <div>
                        <h4>QTY: {props.product.quantity}</h4>
                    </div>
                </div>
            </div>
        )
    }
}