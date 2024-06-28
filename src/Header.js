const Header = () => {
  //embeded stylesheet
  const headerStyle = {
    backgroundColor: "blue",
    color: "white",
  };

  const handleClick = () => {
    console.log("this is handleClick fun");
  };

  const handleClick2 = (name, lastname) => {
    alert(`hello i am ${name} ${lastname}`);
  };
  return (
    <header
      style={headerStyle}

      //inline style
      // style={{
      //   backgroundColor: "blue",
      //   color: "white",
      // }}
    >
      <h1>Groceries List</h1>
      <button onClick={handleClick}> Click me!</button>
      <button onClick={() => handleClick2("Deepak", "kumar")}>
        {" "}
        Click me with paramiter!
      </button>
      <p> Hi this is button</p>
    </header>
  );
};

export default Header;
