class ProductDetail extends React.Component {
    state = {}
    render(){
        return (
            <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                    <img src={this.props.productUrl} alt=""/>
                    <div className="caption">
                        <h4 className="pull-right">{this.props.productPrice}</h4>
                        <h4><a href="#">{this.props.productName}</a>
                        </h4>
                        <p>{this.props.productDescription}</p>
                    </div>
                    <button onClick={()=>{
                            this.props.addToCart(this.props.productName);
                            console.log(this.props.numberOfItemsInCart)
                        }}>Add To Cart</button>
                    <div className="ratings">
                        <p className="pull-right">Reviews: {this.props.productReviews}</p>
                        <p>
                            {/* {this.props.productRating} */}
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
}