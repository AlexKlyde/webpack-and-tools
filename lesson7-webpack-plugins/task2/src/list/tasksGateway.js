const baseUrl = 'https://5ff9ad2b17386d0017b51ffd.mockapi.io/api/v1/tasks';
// const baseUrl = 'https://crudcrud.com/api/18590986118349e6872f6cb98125157d/tasks';

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData),
  });

export const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });

/* const mapTasks = tasks => tasks
  .map(({ _id, ...rest }) => ({ id: _id, ...rest })); */

export const getTasksList = () =>
  fetch(baseUrl)
    .then(response => response.json());
    // .then(tasks => mapTasks(tasks));