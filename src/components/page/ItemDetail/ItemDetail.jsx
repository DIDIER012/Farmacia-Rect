import CounterContainer from "../../common/CounterProducts/CounterContainer";

const ItemDetail = ({ item, onAdd }) => {
  return (
    <div className="grid items-center justify-center gap-5">
      <div className="items-center justify-center gap-8">
        <img src={item.imageUrl} alt= {item.title} />

        <h1>{item.title}</h1>

        <p>{item.description}</p>
      </div>

    <span>{item.price}</span>
      <CounterContainer onAdd={onAdd} stock={item.stock}/>
    </div>
  );
};

export default ItemDetail;
