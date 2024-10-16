import { useState, useEffect } from "react";
import { products } from "../../../productos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]); 

  const { categoryName } = useParams(); 

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryName
    );
    const getProducts = new Promise((res) => {
        res(categoryName ? filteredProducts : products);
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log("entro en el catch ", error);
      });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;










// import { useState, useEffect } from "react";  
// import { products } from "../../../productos";
// import ItemList from "./ItemList";
// import { useParams } from "react-router-dom";


// const CartsContainer = () => {  
//   const [items, setItems] = useState([]);   

//   const {filterName} = useParams();


//   useEffect(() => {  
//     const filterProducts = products.filter(
//       (product) => product.category === filterName
//     );


//     const getProducts = new Promise((res) => {
//         res(filterName ? filterProducts : products);
//     });  

//     getProducts  
//       .then((response) => {  
//         setItems(response);   
//       })  
//       .catch((error) => {  
//         console.log("Entró en el catch ", error);  
//       });  
//   }, [filterName]);  

//   return <ItemList items={items} />;  
// };  

// export default CartsContainer;