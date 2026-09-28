import {useEffect,usecontext,} from "react";
import CartContext from "./CartContext";

function ProductList(){
    const [product,setproduct]=useState([]);

useEffect(()=>{
    fetch (`https://fakestoreapi.com/products`)
    .then ((response)=>response.json)
    .setproduct(data);
    })
}[]


return(
    <div>
        <h1>ClassName {Product}"Product"</h1>
          <h3> Product</h3>
    </div>
   
)
 
export default ProductList;
