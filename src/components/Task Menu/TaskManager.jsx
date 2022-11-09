import { TaskCheckbox, TaskDiv, TaskLabel, TaskMain } from "./Task-styles";

import React from "react";

function TaskManager({ tasks }) {
  console.log(tasks);
  return (
    <TaskMain>
      {tasks &&
        tasks.map((task, idx) => (
          <TaskDiv key={idx}>
            <TaskCheckbox
              completed={task.completed}
              onClick={(e) => console.log(e)}
            />
            <TaskLabel completed={task.completed}>
              {task.description}{" "}
            </TaskLabel>
          </TaskDiv>
        ))}
    </TaskMain>
  );
}

export default TaskManager;
