import { useState, useEffect } from "react";  
import { products } from "../../../productos";
import ItemList from "./ItemList";


const CartsContainer = () => {  
  const [items, setItems] = useState([]);   

  useEffect(() => {  
    const getProducts = new Promise((res) => {  
      res(products);  
    });  

    getProducts  
      .then((response) => {  
        setItems(response);  
        console.log(response);  
      })  
      .catch((error) => {  
        console.log("Entró en el catch ", error);  
      });  
  }, []);  

  return <ItemList items={items} />;  
};  

export default CartsContainer;