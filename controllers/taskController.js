const { tasks } = require("../models/taskModel");

// Create a task
exports.createTask = (req, res) => {
  const { title, description, status, due_date } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    status,
    due_date,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Get all tasks
exports.getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};

// Get tasks by status
exports.getTasksByStatus = (req, res) => {
  const { status } = req.params;
  const filteredTasks = tasks.filter(task => task.status.toLowerCase() === status.toLowerCase());
  res.status(200).json(filteredTasks);
};

// Update a task
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, status, due_date } = req.body;
  
  const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
  if (taskIndex === -1) return res.status(404).json({ message: "Task not found" });
  
  tasks[taskIndex] = { id: parseInt(id), title, description, status, due_date };
  res.status(200).json(tasks[taskIndex]);
};

// Delete a task
exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
  if (taskIndex === -1) return res.status(404).json({ message: "Task not found" });
  
  tasks.splice(taskIndex, 1);
  res.status(200).json({ message: "Task deleted successfully" });
};
