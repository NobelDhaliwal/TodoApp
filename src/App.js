import React, { useState } from "react";
import TodoList from "./Components/TodoList";
const App = () => {
  /*useState hooks returns an array of two elements one is state variable and 
  other is updated function*/
  /*1. Here we are using two useStates 1st for input field and
   second for button onClick event*/
  const [inputList, setInputList] = useState("");
  //Whatever user is typing we are storing it in empty array
  const [items, setItems] = useState([]);

  //onchange event handler watches changes in input field
  const inputEvent = (event) => {
    setInputList(event.target.value);
  };

  //with help of preVal whatever state variable items has setItems can also acess it 
  //in our case items(state variable) have an emty array
  const itemlist = () => {
    setItems((preVal) => {
      return [...preVal, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    console.log("DELETED");
    setItems((preVal) => {
      return preVal.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input type="text" placeholder="Add a Item"
            onChange={inputEvent} value={inputList}></input>
          <button onClick={itemlist}>+</button>
          <ol>
            {items.map((itemVal, index) => {
              return <TodoList text={itemVal} key={index} id={index} onSelect={deleteItems} />
            })
            }
          </ol>

        </div>
      </div>
    </>
  )
};
export default App;