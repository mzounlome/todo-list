import { TaskCheckbox, TaskDiv, TaskLabel, TaskMain } from "./Task-styles";

function TaskManager({ tasks, completeTask, taskType }) {
  const handleTaskStatus = () => {
    switch (taskType) {
      case "Active":
        return tasks
          .filter((task) => task.completed === false)
          .map((task) => (
            <TaskDiv key={task.id}>
              <TaskCheckbox
                checked={task.completed}
                onChange={() => completeTask(task)}
              />
              <TaskLabel completed={task.completed}>
                {task.description}{" "}
              </TaskLabel>
            </TaskDiv>
          ));
      case "Completed":
        return tasks
          .filter((task) => task.completed === true)
          .map((task) => (
            <TaskDiv key={task.id}>
              <TaskCheckbox
                checked={task.completed}
                onChange={() => completeTask(task)}
              />
              <TaskLabel completed={task.completed}>
                {task.description}{" "}
              </TaskLabel>
            </TaskDiv>
          ));

      default:
        return tasks.map((task) => (
          <TaskDiv key={task.id}>
            <TaskCheckbox
              checked={task.completed}
              onChange={() => completeTask(task)}
            />
            <TaskLabel completed={task.completed}>
              {task.description}{" "}
            </TaskLabel>
          </TaskDiv>
        ));
    }
  };
  return <TaskMain>{tasks && handleTaskStatus()}</TaskMain>;
}

export default TaskManager;
