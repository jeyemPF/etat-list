import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the input value is not empty
    if (value.trim() !== "") {
      editTodo(value, task.id);
      setValue("");
      // Hide the alert if it was previously shown
      setShowAlert(false);
    } else {
      // Show the alert if the input value is empty
      setShowAlert(true);
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update the task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update task
      </button>

      {/* Display an alert if the input is empty */}
      {showAlert && <p style={{ color: "red" }}>Please fill up the task to update it!</p>}
    </form>
  );
};
