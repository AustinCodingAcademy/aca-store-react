function ProductDetail(props) {
    let starSign = "";

    if (props.product.rating === 1) {
        starSign = <Stars />
    } else if (props.product.rating === 2) {
        starSign =
            <div>
                <Stars /><Stars />
            </div>
    } else if (props.product.rating === 3) {
        starSign =
            <div>
                <Stars /><Stars /><Stars />
            </div>
    } else if (props.product.rating === 4) {
        starSign =
            <div>
                <Stars /><Stars /><Stars /><Stars />
            </div>
    } else if (props.product.rating === 5) {
        starSign =
            <div>
                <Stars /><Stars /><Stars /><Stars /><Stars />
            </div>
    }

    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src="http://placehold.it/320x150" alt="" />
                <div className="caption">
                    <h4 className="pull-right">{props.product.price}</h4>
                    <h4><a href="#">{props.product.name}</a>
                    </h4>
                    <p>{props.product.description}<a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">{props.product.reviews}</p>
                    {starSign}
                    <button onClick={() => props.addCart(props.product)}>Add to Cart</button>
                </div>
            </div>
        </div >
    )
}
//onClick={(e) => this.props.addCart(this.props.products)}
//