import "./App.scss";

import Header from "./components/Menu/Header/Header";
import Input from "./components/Input/Input";
import MainNav from "./components/Menu/Nav/Nav";
import TaskManager from "./components/Task Menu/TaskManager";
import { tasks } from "./data";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState(tasks.All);

  const handleTaskList = (value) => {
    switch (value) {
      case "Active":
        setTaskList(tasks.All.filter((task) => !task.completed));
        break;
      case "Completed":
        setTaskList(tasks.All.filter((task) => task.completed));
        break;
      default:
        setTaskList(tasks.All);
    }
  };

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <MainNav handleTaskList={handleTaskList} />
      </div>
      <div>
        <Input />
      </div>
      <TaskManager tasks={taskList} />
    </div>
  );
}

export default App;
