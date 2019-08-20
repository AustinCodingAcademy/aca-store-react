class Header extends React.Component {
    state = {}
    render(){
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li >
                            <a href="#" onClick={()=>{
                                this.props.changeView(0)
                            }}>Products</a>
                        </li>
                        <li >
                            <a href="#" onClick={()=>{
                                this.props.changeView(1)
                            }}>Items In Cart ({this.props.cart.length})</a>
                        </li>
                        <li >
                            <a href="#" onClick={()=>{
                                this.props.changeView(2)
                            }}>Create New Product</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}
Header.propTypes = {
    changeView: PropTypes.func.isRequired,
    numberOfItemsInCart: PropTypes.number.isRequired
}