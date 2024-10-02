import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/layauts/navbar/Navbar";




function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route/>
      {/* <Route path={"/"}  element= {<ItemList/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
