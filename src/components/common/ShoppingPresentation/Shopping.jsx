import { Link } from "react-router-dom";  

const ProductCard = ({ title, price, imageUrl, description, id }) => {  
return (  
<div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-300">  
    <img className="w-full h-40 object-cover" src={imageUrl} alt={title} />  
    <div className="px-6 py-4">  
    <h3 className="font-bold text-xl mb-2">{title}</h3>  
    <p className="text-gray-700 text-base mb-4">{description}</p>  
    <p className="text-gray-900 font-semibold">${price}</p>  
    </div>  
    <div className="px-6 py-4">  
    <Link to={`/Detalle/${id}`}>  
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">  
        Ver detalle  
        </button>  
    </Link>  
    </div>  
</div>  
);  
};  

export default ProductCard;