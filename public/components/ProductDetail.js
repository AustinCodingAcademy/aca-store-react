function ProductDetail(props){
    console.log("product detail")
    console.log(props)
    let stars = props.product.rating;
    let htmlStars = [];
    for (let i=0; i<stars; i++){
        htmlStars.push(<span className="glyphicon glyphicon-star"></span>)
    }


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
            </div>
        </div>
    )
}