import React, { useReducer, useState } from "react";

const taskData = [
  { id: 1, task: "Learn React", description: "Study React and build a simple app" },
  { id: 2, task: "Grocery shopping", description: "Buy grocery for the week" },
  { id: 3, task: "Running", description: "Go for a 30-min run" },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD-TASK":
      alert("Task added ");
      console.log(action.payload);

      return {
        ...state, 
        tasks: [
          ...state.tasks, 
          {
            id: state.tasks.length + 1,
            task: action.payload.task,
            description: action.payload.description,
          },
        ],
      };

    case "DELETE_TASK":
      alert("Task deleted ");
      console.log(action.payload);
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}

export default function TodoApp() {
  const [state, dispatch] = useReducer(reducer, { tasks: taskData });
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <h1>To Do App </h1>
      <input
        onChange={(e) => setTask(e.target.value)}
        type="text"
        placeholder="Enter a task"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Enter task description"
      />
      <button
        onClick={() =>
          dispatch({ type: "ADD-TASK", payload: { task, description } })
        }
      >
        Add Task
      </button>

      <table border={1}>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map((item) => (
            <tr key={item.id}>
              <td>{item.task}</td>
              <td>{item.description}</td>
              <td>
                <button>Edit</button>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_TASK", payload: item.id })
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
