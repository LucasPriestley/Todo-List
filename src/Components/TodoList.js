import React, { useState } from "react";
import "./TodoList.css";
import List from "./List";

function ToDoList() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  
  };

  const AddTask = () => {
    // console.log(task);
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };

      setTaskList([...taskList, taskDetails]);
    }
      const input = document.getElementsByTagName("input")[0];
      input.value = "";
  };

  //   console.log("taskList", taskList)

  const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  const completedTask = (e, id) => {
    e.preventDefault();
console.log(e)
    const element = taskList.findIndex(elem => elem.id === id);

    const newTaskList = [...taskList]

    newTaskList[element] = {...newTaskList[element], isCompleted: true, }

    setTaskList(newTaskList);

  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      AddTask();
    }
  }

  return (
    <div className="todoContainer">
      <div className="todoHeader">
        <span className="todoTitle">Todo List</span>
      </div>
      <div className="inputSection">
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Add Task..."
        onChange={(e) => handleChange(e)}
        onKeyPress={onKeyPress}
      />
      <button className="addBtn" onClick={AddTask}>
        Add
      </button>
      </div>
      <List taskList={taskList} completedTask={completedTask} deleteTask={deleteTask} />
    </div>

  );
}

export default ToDoList;
