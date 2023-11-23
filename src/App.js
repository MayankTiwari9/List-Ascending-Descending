import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [isDescending, setIsDescending] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const toggleOrderHandler = useCallback(() => {
    setIsDescending((prevIsDescending) => !prevIsDescending);
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9].slice(), []);

  const sortedList = useMemo(() => {
    return [...listItems].sort((a, b) => (isDescending ? b - a : a - b));
  }, [listItems, isDescending]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={sortedList} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={toggleOrderHandler}>
        Change to {isDescending ? "Ascending" : "Descending"} Order
      </Button>
    </div>
  );
}

export default App;
