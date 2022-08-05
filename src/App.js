

import { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");

  const change = (event) => {
    setTodo(event.target.value);
  };
  const click = (e) => {
    e.preventDefault();
    if (toDo === "") {
      window.alert("No task found");
    } else {
      setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    }
  };
  console.log(toDo);
  const remove = (index) => {
    const popup = window.confirm("do you want to remove this task");
    if (popup) {
      const test = [...toDos];

      test.splice(index, 1);

      setTodos(test);
    } else {
      window.confirm("the task does not deleted");
    }
  };

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="🖊️ Add item..."
          onChange={change}
          value={toDo}
        />
        <i className="fas fa-plus" onClick={click}></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    setTodos(
                      toDos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={remove} className="fas fa-times"></i>
              </div>
            </div>
          );
        })}

        <div className="todos">
          <h1>Active list</h1>
          {toDos.map((obj) => {
            if (obj.status) {
              return (
                <div className="todo">
                  <div className="left">
                    <p>{obj.text}</p>
                  </div>
                </div>
              );
            }
            return "";
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
