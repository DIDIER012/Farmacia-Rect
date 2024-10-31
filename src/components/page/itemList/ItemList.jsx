
import ProductCard from "../../common/ProductCard/ProductCard";  

const ItemList = ({ items }) => {  

    return (  
        <div className="flex justify-center items-center gap-20 flex-wrap mt-44">  
            {items.map((item) => (  
                <ProductCard key={item.id} {...item} />  
            ))}  
        </div>  
    );  
};  

export default ItemList;