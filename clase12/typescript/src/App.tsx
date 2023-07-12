import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./interfaces/Task";

interface Props {
  title?: string;
}

function App({ title = "Valor por defecto" }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createId = (): number => new Date().getTime();

  const addNewTask = (task: Task): void => {
    setTasks([...tasks, { ...task, completed: false, id: createId() }]);
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="./" className="navbar-brand">
            <img src={logo} alt="React Logo" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <h6 className="text-light d-fle justify-content-end">
                Total Tasks
                <span className="badge bg-primary ms-2">{tasks.length}</span>
              </h6>
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
