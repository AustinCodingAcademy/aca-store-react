function ProductDetail (props) {
    let star = [];
    for (let i=0; i<props.productRating; i++) {
        star.push(<span key={i} className="glyphicon glyphicon-star"></span>)
    }
    let emptyStar = [];
    for (let i=0; i<5-props.productRating; i++) {
        emptyStar.push(<span key={i} className="glyphicon glyphicon-star-empty"></span>)
    }
    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src={props.productUrl} alt=""/>
                <div className="caption">
                    <h4 className="pull-right">{props.productPrice}</h4>
                    <h4><a href="#">{props.productName}</a>
                    </h4>
                    <p>{props.productDescription}</p>
                </div>
                <button onClick={()=>{
                        props.addToCart(props.product);
                        console.log(props.numberOfItemsInCart)
                    }}>Add To Cart</button>
                <div className="ratings">
                    <p className="pull-right">Reviews: {props.productReviews}</p>
                    <p>
                        {star}{emptyStar}
                    </p>
                </div>
            </div>
        </div>
    )
}

ProductDetail.propTypes = {
    addToCart: PropTypes.func.isRequired,
    numberOfItemsInCart: PropTypes.number.isRequired
}