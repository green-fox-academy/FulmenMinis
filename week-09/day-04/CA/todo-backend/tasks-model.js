class TasksModel {
  constructor() {
    this.tasks = [
      { id: 1, title: 'my first task', status: 'todo' },
    ];
  }

  getTasks() {
    return this.tasks;
  }

  createTask(title) {
    const myTask = {
      id: Math.max(0, Math.max.apply(null, this.tasks.map(task => task.id))) + 1,
      title: title,
      status: 'todo',
    };

    this.tasks.push(myTask);
  }

  deleteTask(taskId) {
    const indexToDelete = this.tasks.map(task => task.id).indexOf(taskId);
    if (indexToDelete > -1) {
      this.tasks.splice(indexToDelete, 1);
    }
  }

  updateTask(taskId) {
    let updatedTask = {};
    const indexToUpdate = this.tasks.map(task => task.id).indexOf(taskId);
    if (indexToUpdate > -1) {
      updatedTask = {
        id: taskId,
        title: this.tasks[indexToUpdate].title,
        status: 'done',
      };
      this.tasks.splice(indexToUpdate, 1, updatedTask);
    }
    return updatedTask;
  }
}

module.exports = new TasksModel();
