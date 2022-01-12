const baseUrl =
  "https://crudcrud.com/api/a04b51c5b2794728b353b8a5beaf21f5/tasks";

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
