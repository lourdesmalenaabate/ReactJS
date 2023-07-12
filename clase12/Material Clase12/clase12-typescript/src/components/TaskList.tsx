import React from "react";
import { TaskCard } from "./TaskCard";
import { Task } from "../interfaces/Task";
//Importación de ícono
import { BiTaskX } from "react-icons/bi";

//Interface de Props esperadas
interface Props {
  //tasks = lista de tareas
  tasks: Task[];
  //deleteATask = función que recibe un number y retorna cualquier tipo de dato
  deleteATask: (id: number) => any;
}

//Props destructuradas
export const TaskList = ({ tasks, deleteATask }: Props): JSX.Element => {
  if (tasks.length === 0)
    return (
      <div className="text-light text-center">
        <h1>There are no tasks yet</h1>
        <BiTaskX size="20rem" />
      </div>
    );

  return (
    <>
      {tasks.map((task, i) => (
        <div className="col-md-4 mt-2">
          <TaskCard key={task.id} task={task} deleteATask={deleteATask} />
        </div>
      ))}
    </>
  );
};
