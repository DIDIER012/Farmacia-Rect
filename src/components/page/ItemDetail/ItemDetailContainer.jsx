import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {products} from "../../../productos"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});

  const { id } = useParams(); 



  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }


  }, [id]);

  const onAdd = (quantity) => {
    let productoParaElCarrito = { ...item, quantity };
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;

