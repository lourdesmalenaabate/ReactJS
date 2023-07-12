import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/Task";

interface Props {
  addNewTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};

const TaskForm = ({ addNewTask }: Props) => {
  const [task, setTask] = useState<Task>(initialState);
  const titleInput = useRef<HTMLInputElement>(null);

  const handleChange = ({ target: { name, value } }: HandleInputChange) =>
    setTask({ ...task, [name]: value });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): any => {
    e.preventDefault();
    addNewTask(task);
    setTask(initialState);
  };

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="form-control mb-3 shadow-none border-0 rounded-0"
          value={task.title}
          ref={titleInput}
          onChange={handleChange}
        />
        <textarea
          name="description"
          className="form-control mb-3 shadow-none border-0"
          value={task.description}
          onChange={handleChange}></textarea>
        <button type="submit" className="btn btn-primary">
          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
