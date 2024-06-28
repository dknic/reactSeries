import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const Content = () => {
  const [items, setItem] = useState([
    { id: 1, checked: false, item: "item1" },
    { id: 2, checked: false, item: "item2" },
    { id: 3, checked: false, item: "item3" },
  ]);

  const handlechange = (id) => {
    const listitem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listitem);
    localStorage.setItem("ShoppingList", JSON.stringify(listitem));
    //console.log(`this is id ${id}`);
  };
  const handleDelete = (id) => {
    console.log(id);
    const listitem = items.filter((item) => item.id !== id);
    setItem(listitem);
    localStorage.setItem("DeletedItem", JSON.stringify(listitem));
  };

  return (
    <div>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handlechange(item.id)}
              ></input>
              <label
                onDoubleClick={() => handlechange(item.id)}
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.item}
              </label>
              <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>List is Empty</p>
      )}
    </div>
  );
};

export default Content;
