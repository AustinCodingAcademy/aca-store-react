// ### ProductDetail
// * The ProductDetail should repesent only one single product
// * The ProductDetail should take a prop called `product` which is an object, and use it to populate price, name, description reviews and stars.
// * Remove all hard coded information and use the props
// * Make the star images represent the number rating from data.
// * Bonus. Notice the grey stars.



function ProductDetail(props){
    return(
    <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src="http://placehold.it/320x150" alt=""/>
            <div className="caption">
                <h4 className="pull-right">{props.product.price}</h4>
                <h4><a href="#">{props.product.name}</a>
                </h4>
                <p>{props.product.description}<a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
            </div>
            <div className="ratings">
                <p className="pull-right">{props.product.reviews} Reviews</p>
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