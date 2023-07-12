import { useState } from "react";
import { Task } from "./interfaces/Task";
import logo from "./logo.svg";

// Components
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

//Las interfaces nos permiten declarar el tipo de dato esperado
interface Props {
  title?: string; //El signo de pregunta permite que el dato sea undefined
}

export const App = ({ title = "default title" }: Props): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>([]);

  //Declaración de función que no recibe valores y retorna un dato de tipo number
  const getCurrentTimestamp = (): number => new Date().getTime();

  //Declaración de una función que recibe un dato de tipo Task y no retorna valor
  const addANewTask = (task: Task): void =>
    setTasks([
      ...tasks,
      { ...task, completed: false, id: getCurrentTimestamp() },
    ]);

  //Declaración de función que recibe un dato de tipo number y no retorna valor
  const deleteATask = (id: number): void =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="React Logo" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <h6 className="text-light d-flex justify-content-end">
                Total Tasks{" "}
                <span className="badge bg-primary ms-2">{tasks.length}</span>
              </h6>

              <TaskList tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
