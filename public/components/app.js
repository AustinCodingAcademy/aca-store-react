function App(props){
    return (<div class="App">
        {/* <!--<Header>--> */}
       <Header details={props.products}/>
        {/* <!--</Header>--> */}
    
       <div class="container">
   
           <div class="row">
   
               <div class="col-md-3">
                   <p class="lead">Shop Name</p>
                   <div class="list-group">
                       <a href="#" class="list-group-item">Category 1</a>
                       <a href="#" class="list-group-item">Category 2</a>
                       <a href="#" class="list-group-item">Category 3</a>
                   </div>
               </div>
   
               <div class="col-md-9">
                   {/* <!--<Carousel>--> */}
                   <Carousel/>
                   {/* <!--</Carousel>--> */}
                   <div class="row">
                       {/* <!--<ProductDetail>--> */}
                       <ProductDetail details ={props.products}/>
                       {/* <!--</ProductDetail>--> */}
                   </div>
   
               </div>
   
           </div>
   
       </div>
      
       <Footer/>
         </div>
    )
}