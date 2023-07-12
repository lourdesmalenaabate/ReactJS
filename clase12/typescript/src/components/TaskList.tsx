import React from "react";
import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";
import { BiTaskX } from "react-icons/bi";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

const TaskList = ({ tasks, deleteTask }: Props) => {
  if (tasks.length === 0) {
    return (
      <div className="text-light text-center">
        <h1>There are no tasks yet</h1>
        <BiTaskX size="20rem" />
      </div>
    );
  }
  return (
    <>
      <div className="col-md-4 mt-2">
        {tasks.map((task, i) => (
          <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
