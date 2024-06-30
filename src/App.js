import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const [items, setItem] = useState([
    { id: 1, checked: false, item: "item1" },
    { id: 2, checked: false, item: "item2" },
    { id: 3, checked: false, item: "item3" },
  ]);
  const handlechange = (id, comp = "default") => {
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
    <div className="App">
      <Header title="grocessory" />
      <Content
        items={items}
        setItem={setItem}
        handlechange={handlechange}
        handleDelete={handleDelete}
      />
      <Footer itemlength={items.length} />
    </div>
  );
}

export default App;
