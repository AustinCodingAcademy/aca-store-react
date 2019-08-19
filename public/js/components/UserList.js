
function UserList(props){
    let prodDivs = props.products.map((prod,i)=>{
       return <div key={i}>
           <div>{prod.name}</div>
           <div>{prod.price}</div>
           <hr/>
       </div>
     });
     return (
         <div>{prodDivs}</div>
     )
   }