
function Header(props){
    return(
        <div>
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
                           <a href="#">Items In Cart: {props.shoppingcart.length}</a>
                           </li>
                           <li >
                           <a href="#" onClick={(e)=>{
                                   e.preventDefault();
                                   console.log(props.shoppingcart)
                                   }}
                                   >View Cart Products
                            </a>
                           </li>
                           <li >
                           <a href="#" onClick={(e)=>{
                                   e.preventDefault();
                                    alert("Order Proccessed")
                                   console.log(props.shoppingcart)
                                   }}
                                   >Checkout
                            </a>
                           </li>
                       </ul>
                   </div>
                
               </div>
             
           </nav>
        </div>
    )
}