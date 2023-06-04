import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [newTaskFields, setNewTaskFields] = useState({
    text: "",
    category: "Code",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTaskFields({ ...newTaskFields, [name]: value });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onTaskFormSubmit(newTaskFields);
      }}
      className="new-task-form"
    >
      <label>
        Details
        <input
          value={newTaskFields.text}
          onChange={handleInputChange}
          type="text"
          name="text"
        />
      </label>

      <label>
        Category
        <select
          value={newTaskFields.category}
          onChange={handleInputChange}
          name="category"
        >
          {categories.map((category, index) => (
            category !== "All" && <option key={index}>{category}</option>
          ))}
        </select>
      </label>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;