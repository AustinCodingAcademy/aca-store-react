const ProductDetail = (props) => {
    const stars = props.product.rating;
    const starsArr = new Array(stars+1).join('0').split('');
    const greyStars = 5 - starsArr.length;
    const greyStarsArr = new Array(greyStars+1).join('0').split('');

    return(    
    <div className="col-sm-4 col-lg-4 col-md-4">
    <div className="thumbnail">
        <img src={props.product.imgUrl} alt=""/>
        <div className="caption">
            <h4 className="pull-right">{props.product.price}</h4>
            <h4><a href="#">{props.product.name}</a>
            </h4>
            <p>{props.product.description} <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
        </div>
        <div className="ratings">
            <p className="pull-right">{props.product.reviews}</p>
            <p>
            
              {starsArr.map(()=> <span className="glyphicon glyphicon-star"></span>)}
              {greyStarsArr.map(()=> <span className="glyphicon glyphicon-star text-muted"></span>)}
            
            </p>
        </div>
    </div>
</div>
    )
}