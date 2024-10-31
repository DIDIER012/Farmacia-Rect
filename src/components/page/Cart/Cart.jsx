import { Button } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({ shop, clearCart, deleteProductById, total }) => {
  const limpiarConAlert = () => {
    Swal.fire({
      title: "seguro quieres limpiar?",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No, dejar como estaba`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "se limpio el carrito",
        });
      } else if (result.isDenied) {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "el carrito queda como estaba",
        });
      }
    });
  };



  return (
    <div className='p-52'>
      {shop.length === 0 ? (
        <h2 className='flex justify-center items-center font text-5xl font-bold'>No hay productos en el carrito todavía!</h2>
      ) : (
        shop.map((products) => (
          <div key={products.id}>
            <img src={products.imageUrl} alt={products.title} />
            <h2>{products.title}</h2>
            <h3>{products.price}</h3>
            <h3>{products.quantity}</h3>
            <h3>Total a pagar: {products.price * products.quantity}</h3>
            <Button
              variant="contained"
              
              onClick={() => deleteProductById(products.id)}
            >
              Eliminar
            </Button>
          </div>
        ))
      )}

{total > 0 && (
        <>
          <Button
            sx={{ marginTop: 20 }}
            variant="contained"
            onClick={limpiarConAlert}
          >
            Limpiar carrito
          </Button>
          <Link to="/Comprobante">
            <Button sx={{ marginTop: 20 }} variant="contained">
              Finalizar compra
            </Button>
          </Link>
        </>
      )}

      {total > 0 && <h2>El total a pagar es : $ {total}</h2>}
    </div>
  );
};

export default Cart;
