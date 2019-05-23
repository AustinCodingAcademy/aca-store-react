function ProductDetail(props) {
    let allStars = []
    let numStars = props.rating
    while (numStars > 0) {
        allStars.push(<span key={numStars} className="glyphicon glyphicon-star"></span>)
        numStars--
    }
    //random counter variable to assign unique keys for empty stars
    let emptyStarKeys = 1000
    while (allStars.length !== 5) {
        allStars.push(<span key={emptyStarKeys} className="	glyphicon glyphicon-star-empty"></span>)
        emptyStarKeys--
    }
    return(
    <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src={props.imgUrl} alt=""/>
            <div className="caption">
                <h4 className="pull-right">{props.price}</h4>
                <h4><a href="#">{props.name}</a>
                </h4>
                <p>{props.description}</p>
            </div>
            <button variant="primary" onClick={()=>props.addProductToCart(props.product)}>Add Product</button>
            <div className="ratings">
                <p className="pull-right">{props.reviews} reviews</p>
                <p>
                    {allStars}
                </p>
            </div>
            
        </div>
    </div>
    )
}
