import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "./MainPage.css";
export default function MainPage({
  onButtonClick,
  value,
  setValue,
  todos,
  setTodos,
}) {
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleDelete = (indexToDelete) => {
    const newTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(newTodos);
  };

  const handleEdit = (todoToDelete) => {
    const newTodos = todos.filter((_) => _ !== todoToDelete);
    setTodos(newTodos);
    setValue(todoToDelete);
  };

  const handleClearAll = () => {
    setTodos([])
  }

  const [dateTime, setDateTime] = useState()

  setInterval(() => {
    let datetime = new Date();
    let formattedDate = datetime.toLocaleDateString();
    let formattedTime = datetime.toLocaleTimeString();

    setDateTime(`${formattedDate} - ${formattedTime}`)
  }, 1000);

  return (
    <div>
      <div className="container">
        <div className="main">
          <h4>iTask Manager</h4>
          <h6>{dateTime}</h6>
          <input
            id="input"
            type="text"
            value={value}
            onChange={onInputChange}
            placeholder="Search anything.."
          />
          <button type="submit" id="btn" onClick={onButtonClick}>
            Add
          </button>
          <div className="lists">
            {todos.map((todo, index) => (
              <ul key={index}>
                <li
                  style={{
                    listStyle: "none",
                  }}
                  key={index}
                >
                  {todo}
                </li>
                <button
                  onClick={() => handleEdit(todo)}
                  className="btns"
                  id="edit-btn"
                >
                  <FaEdit />
                </button>
                <button
                  className="btns"
                  id="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  <MdDelete />
                </button>
              </ul>
            ))}
          </div>
          <button onClick={handleClearAll} type="button" id={todos.length == 0 ? 'clear-button-display' : 'clear-button'
          }>Clear All</button>
        </div>
      </div>
    </div>
  );
}
