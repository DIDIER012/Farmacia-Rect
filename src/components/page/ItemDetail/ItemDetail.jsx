import CounterContainer from "../../common/CounterProducts/CounterContainer";  

const ItemDetail = ({ items, add, totalItems}) => {  
  return (  
    <div className="flex flex-col items-center justify-center gap-5 text-center">  
      <img src={items.imageUrl} alt={items.title} className="mb-3 w-72" />  

      <h1 className="text-4xl">{items.title}</h1>  

      <p>{items.description}</p>  

      <span>{items.price}</span>  
      
      <CounterContainer add={add} stock={items.stock} totalItems={totalItems} />  
    </div>  
  );  
};  

export default ItemDetail;