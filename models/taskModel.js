const tasks = [
    {
      id: 1,
      title: "Fix login bug",
      description: "Resolve the login issue on the homepage.",
      status: "To-Do",
      due_date: "2025-01-10",
    },
    {
      id: 2,
      title: "Implement feature X",
      description: "Develop feature X for the user dashboard.",
      status: "In Progress",
      due_date: "2025-01-15",
    },
    {
      id: 3,
      title: "Update API documentation",
      description: "Revise the API docs to include new endpoints.",
      status: "Done",
      due_date: "2024-12-20",
    },
    {
      id: 4,
      title: "Fix UI bugs",
      description: "Fix the layout issues on the profile page.",
      status: "To-Do",
      due_date: "2025-01-05",
    },
  ];
  
  // Export the tasks array for use in the controller
  module.exports = { tasks };
  