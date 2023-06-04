import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.text !== taskToDelete));
  }

  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All") return true;
    return selectedCategory === task.category;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm
        onTaskFormSubmit={addNewTask}
        categories={categories}
      />
      <TaskList onDeleteTask={deleteTask} tasks={tasksToDisplay} />
    </div>
  );
}

export default App;

