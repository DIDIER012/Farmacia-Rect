import CounterContainer from "../../common/CounterProducts/CounterContainer";  

const ItemDetail = ({ item, onAdd }) => {  
  return (  
    <div className="flex flex-col items-center justify-center gap-5 text-center">  
      <img src={item.imageUrl} alt={item.title} className="mb-4" />  

      <h1 className="text-4xl">{item.title}</h1>  

      <p>{item.description}</p>  

      <span>{item.price}</span>  
      
      <CounterContainer onAdd={onAdd} stock={item.stock} />  
    </div>  
  );  
};  

export default ItemDetail;