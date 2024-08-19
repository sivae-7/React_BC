import "./storeItems.css";

type storeItemProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const StoreItems = ({ id, name, price, quantity }: storeItemProps) => {
  return (
    <div className="items">
      <div className="property1">
        <p>
          {id}
          {name}
          {price}
        </p>
      </div>
      <div className="property2">
        <p>{quantity}</p>
      </div>
    </div>
  );
};

export default StoreItems;
