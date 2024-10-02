import { useState, useEffect } from "react";
import { products } from "../../../../productos";
import { CartsList} from "./ItemList"


const CartsContainer = () => {
  const [items, setItems] = useState([]); 

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {

        res(products);

        rej({ message: "algo salio mal" });
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log("entro en el catch ", error);
      });
  }, []);

    return <CartsList items={items}/>
};


export default CartsContainer;