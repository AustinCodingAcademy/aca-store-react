let localState = {};

function ProductDetail(props) {
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
                <button onClick={(event)=>{
                        localState[name] = event.target.parentNode.name
                        props.addToCart(localState);
                        console.log(numberOfItemsInCart)
                    }}>Add To Cart</button>
                <div className="ratings">
                    <p className="pull-right">Reviews: {props.productReviews}</p>
                    <p>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                    </p>
                </div>
            </div>
        </div>
    )
}