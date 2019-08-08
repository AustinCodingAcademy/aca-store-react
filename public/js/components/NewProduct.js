class NewProduct extends React.Component {
    state ={
        id: '',
        name: '',
        description: '',
        reviews: '',
        rating: '',
        imgurl: '',
        price: ''
    }
    render(){
        return(
            <div>
                <form onSubmit={(event)=>{
                    debugger
                    event.preventDefault();
                    this.props.createItem(this.state);
                    this.props.printProduct();
                }}
                
                onChange={(event)=>{
                    let et = event.target;
                    let val = et.value;
                    let name = et.name
                    this.setState(()=>{
                        let newValue = [];
                        newValue[name] = val;
                        return newValue
                    })
                }}>
                    <h1>Id: <input value={this.state.id} name="id"></input></h1>
                    <h1>Name: <input value={this.state.name} name="name"></input></h1>
                    <h1>Description: <input value={this.state.description} name="description"></input></h1>
                    <h1>Reviews: <input value={this.state.reviews} name="reviews"></input></h1>
                    <h1>Rating: <input value={this.state.rating} name="rating"></input></h1>
                    <h1>imgUrl: <input value={this.state.imgurl} name="imgurl"></input></h1>
                    <h1>Price: <input value={this.state.price} name="price"></input></h1>
                    <button>Add New Product</button>
                </form>
            </div>
        )
    }
}