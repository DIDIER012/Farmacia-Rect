import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/layauts/navbar/Navbar";
import Error from "./components/page/Error/Error";
import CartsContainer from "./components/page/itemList/ItemListContainer";
import ItemDetailContainer from "./components/page/ItemDetail/ItemDetailContainer";
import { ShopContextProvider } from "./context/shopContext";
import CartContainer from "./components/page/Cart/CartContainer";
import Checkout from "./components/page/Checkout/Checkout";



function App() {
  return (
    <BrowserRouter>
    <ShopContextProvider>
    <Navbar/>
    <Routes>
      <Route path={"/"} element= {<CartsContainer/>}/>
      <Route
          path={"/category/:categoryName"}
          element={<CartsContainer />}
          />


      <Route path={"/"}  element= {<CartsContainer/>}/>
      <Route path= "*" element= {<Error/>}/>
      <Route path={"/Detalle/:id"} element={<ItemDetailContainer />} />
      <Route path={"/Carrito"} element= {<CartContainer/>}/>
      <Route path={"Comprobante"} element= {<Checkout/>}></Route>
    </Routes>
          </ShopContextProvider>
    </BrowserRouter>
  );
}

export default App;
