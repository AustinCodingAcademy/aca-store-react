function ProductDetail(props) {
    let stars=[];
    for (let i=0; i<props.prods.rating; i++){
        stars.push(<span className="glyphicon glyphicon-star"></span>)
    };
    let greyStars = [];
    for(let i=5; i>props.prods.rating; i--){
        greyStars.push(<span className="glyphicon glyphicon-star text-muted"></span>)
    };


    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src="http://placehold.it/320x150" alt="" />
                <div className="caption">
                    <h4 className="pull-right">{props.prods.price}</h4>
                    <h4><a href="#">{props.prods.name}</a>
                    </h4>
                    <p>{props.prods.description}</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">{props.prods.reviews}</p>
                    <p>
                        {stars}
                        {greyStars}
                    </p>
                </div>
            </div>
        </div>
    )
}