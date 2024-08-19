import StoreItems from "../Components/StoreItems";
import storeItems from "../data/items.json";
import "./shop.css";

const Shop = () => {
  return (
    <div className="itemContainer">
      {storeItems.map((item) => (
        <div key={item.id}>
          <StoreItems {...item}></StoreItems>
        </div>
      ))}
    </div>
  );
};

export default Shop;
