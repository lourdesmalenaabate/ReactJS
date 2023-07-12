import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}

export const TaskCard = ({
  task: { title, id, description },
  deleteATask,
}: Props) => (
  <div className="card card-body bg-secondary rounded-0">
    <h3>{title}</h3>
    <p>{id}</p>
    <p>{description}</p>
    <button
      className="btn btn-danger btn-block"
      //evaluamos si existe un id para poder realizar la ejecución de la función que espera ese dato
      onClick={() => id && deleteATask(id)}>
      Delete
    </button>
  </div>
);
