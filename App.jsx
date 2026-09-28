
import CartProvider from "./CartProvider";
import Header from "./Header";
import CartContext from "./CartContext";

function App(){
  return(
    <div>
      <CartProvider>
      <Header/>
      <CartContext/>
     </CartProvider>
    </div>
  );
}
export default App;