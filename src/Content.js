import ItemList from "./ItemList";
const Content = ({ items, handlechange, handleDelete }) => {
  return (
    <div>
      {items.length ? (
        <ItemList
          items={items}
          handlechange={handlechange}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>List is Empty</p>
      )}
    </div>
  );
};

export default Content;
