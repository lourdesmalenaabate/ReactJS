import React from "react";
import { TaskCard } from "./TaskCard";
//Importación de ícono
import { BiTaskX } from "react-icons/bi";

export const TaskList = (): JSX.Element => {
  /* if (tasks.length === 0)
    return (
      <div className="text-light text-center">
        <h1>There are no tasks yet</h1>
        <BiTaskX size="20rem" />
      </div>
    );
 */
  return (
    <>
      <TaskCard />
    </>
  );
};
