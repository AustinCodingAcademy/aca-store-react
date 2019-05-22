let { numberOfItemsInCart } = state;
function ProductDetail(props) {

    function generateStars() {
        let rating = props.product.rating;
        let stars = [];
        for( let i = 0; i < 5; i++ ) {
            if(i < rating) {
                stars.push(<span className='glyphicon glyphicon-star'></span>)
            }
        }
        return stars;
    }

    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src={props.product.imgUrl} alt=""/>
                <div className="caption">
                    <h4 className="pull-right">{props.product.price}</h4>
                    <h4><a href="#">{props.product.name}</a>
                    </h4>
                    <p>{props.product.description}</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">{props.product.reviews} reviews</p>
                    <p>
                        {generateStars()}
                    </p>
                </div>
                <button onClick={() => {
                    numberOfItemsInCart++;
                    console.log(numberOfItemsInCart);
                }}>Add to Cart</button>
            </div>
        </div>
    )
}