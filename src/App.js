import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Additem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItem] = useState(
    JSON.parse(localStorage.getItem("ShoppingList"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItems) => {
    setItem(newItems);
    localStorage.setItem("ShoppingList", JSON.stringify(newItems));
  };
  const addItem = (item) => {
    const id = items.length > 0 ? items.length + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listitems = [...items, myNewItem];
    setAndSaveItems(listitems);
  };
  const handlechange = (id, comp = "default") => {
    const listitem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listitem);
  };
  const handleDelete = (id) => {
    const listitem = items.filter((item) => item.id !== id);
    setAndSaveItems(listitem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="grocessory" />
      <Additem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        setItem={setItem}
        handlechange={handlechange}
        handleDelete={handleDelete}
      />
      <Footer itemlength={items.length} />
    </div>
  );
}

export default App;
