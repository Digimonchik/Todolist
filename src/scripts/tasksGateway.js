const baseUrl =
  "https://crudcrud.com/api/5a897385732a4d78a6c393b5058283ba/tasks";

const mapTasks = (tasks) => tasks.map((task) => ({ ...task, id: task._id }));

export const getTasksList = () =>
  fetch(baseUrl)
    .then((response) => response.json())
    .then((tasks) => mapTasks(tasks));

export const createTask = (taskData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });

export const updateTask = (taskId, updatedTaskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTaskData),
  });

export const deleteTask = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  });
