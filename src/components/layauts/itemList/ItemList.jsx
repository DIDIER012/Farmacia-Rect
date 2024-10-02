
import PropTypes from 'prop-types'; // Asegúrate de importar PropTypes  

const CartsList = ({ items }) => {  
    return (  
        <div className="flex items-center justify-center align-baseline gap-20">  
            {items.map((item) => {  
                return <h2 key={item.id}> {item.title} </h2>;  
            })}  
        </div>  
    );  
};  

// Agregar validación de PropTypes  
CartsList.propTypes = {  
    items: PropTypes.arrayOf(  
        PropTypes.shape({  
            id: PropTypes.number.isRequired, // Asegúrate de que id sea el tipo correcto  
            title: PropTypes.string.isRequired,  
        })  
    ).isRequired, // Especifica que items es obligatorio  
};  

export default CartsList;