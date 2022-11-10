import "./App.scss";

import Header from "./components/Menu/Header/Header";
import Input from "./components/Input/Input";
import MainNav from "./components/Menu/Nav/Nav";
import TaskManager from "./components/Task Menu/TaskManager";
import { useState } from "react";

function App() {
  const [currentTask, setCurrentTask] = useState("");
  const [taskType, setTaskType] = useState("Active");
  const [taskId, setTaskId] = useState(1);
  const [taskList, setTaskList] = useState([]);

  const completeTask = (task) => {
    //create new task
    const doneTask = { ...task, completed: !task.completed };

    //create new array that filters out the old task with the same id
    const updatedTasks = taskList.filter(
      (currentTask) => currentTask.id !== task.id
    );

    //update taskList to include new task plus all current tasks except the old one
    setTaskList([...updatedTasks, doneTask]);
  };

  //create a function that takes in a description, and returns a task
  const createTask = () => {
    const newTask = { id: taskId, description: currentTask, completed: false };

    //increment taskId by one for next todo
    setTaskId(taskId + 1);

    //add new task to taskList
    setTaskList([...taskList, newTask]);

    //reset current task to empty string
    setCurrentTask("");
  };

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <MainNav setTaskType={setTaskType} />
      </div>
      <div>
        <Input
          setCurrentTask={setCurrentTask}
          createTask={createTask}
          currentTask={currentTask}
        />
      </div>
      <TaskManager
        completeTask={completeTask}
        tasks={taskList}
        taskType={taskType}
      />
    </div>
  );
}

export default App;
