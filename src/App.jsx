import { useState } from "react";
import MainPage from "./MainPage";
export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const buttonClick = (e) => {
    e.preventDefault();
    if (todos.includes(value)) {
      setValue("")
      return;
    }

    else if (value.trim()) {
      setTodos([...todos, value]);
      setValue("");
    }


  };

  return (
    <>
      <MainPage
        value={value}
        setValue={setValue}
        onButtonClick={buttonClick}
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
}
