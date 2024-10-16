import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/layauts/navbar/Navbar";
import Error from "./components/page/Error/Error";
import CartsContainer from "./components/page/itemList/ItemListContainer";
import ItemDetailContainer from "./components/page/ItemDetail/ItemDetailContainer";



function App() {
  return (
    <BrowserRouter>
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
    </Routes>
    </BrowserRouter>
  );
}

export default App;
