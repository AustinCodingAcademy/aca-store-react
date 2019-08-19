function ProductDetail(props) {
    let ratings = [];
    for(let i = 0; i < props.rating; i++) {
            ratings.push(<ProductRating />)
    }

    return(
        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src={props.imgUrl} alt={props.name}/>
                <div className="caption">
                    <h4 className="pull-right">{props.price}</h4>
                    <h4><a href="#">{props.name}</a></h4>
                    <p>{props.description}</p>
                    <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">{props.reviews} reviews</p>
                    <p>
                        {ratings}
                    </p>
                </div>
            </div>
        </div>
    )
}
