import ProductCard from "./ProductCard";

function App(){
  const product=[
    {id:101,
      name:"Wireless Mouse",
      price: 29.99,
       inStock:true,
    },
    {  
    id : 102,
    name :"Mechincal Keyboard",
    price : 89.99,
    inStock:false ,
    },
    {
      id:103,
      name:"USB-C Hub",
      price:45.00,
      inStock:true,
    }
  ];

  return(
    <div>
      <h1>Product</h1>
      {product.map((product)=>
      <div key = {product.id}>
        <ProductCard
        name = {product.name}
        price={product.price}
        />
        {!product.inStock && <p>Sold Out</p>}
      </div>
    )}
    </div>
  );

  
}
export default App;