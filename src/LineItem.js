import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({ item, handlechange, handleDelete }) => {
  return (
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
  );
};

export default LineItem;
