function ProductDetail(props) {
    console.log(props.product);
    return <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src={props.product.imgUrl}alt="" />
            <div className="caption">
                <h4 className="pull-right">{props.product.price}</h4>
                <h4><a href="#">{props.product.name}</a>
                </h4>
                <p>{props.product.description}</p>
            </div>
            <div className="ratings">
                <p className="pull-right">{props.product.reviews} reviews</p>
                <p>
                    {new Array(props.product.rating).fill(null).map(() => <span className="glyphicon glyphicon-star"></span>)}
                    {new Array(5 - props.product.rating).fill(null).map(() => <span className="glyphicon glyphicon-star text-muted"></span>)}
                </p>
                <a href="#" onClick={props.onAddProduct}>Add to Cart</a>
            </div>
        </div>
    </div>
}