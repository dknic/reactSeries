import LineItem from "./LineItem";
const ItemList = ({ items, handlechange, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handlechange={handlechange}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
