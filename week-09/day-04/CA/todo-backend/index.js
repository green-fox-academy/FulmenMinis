'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const TasksModel = require('./tasks-model');

const PORT = 8080;
const app = express();
app.use(bodyParser.json());


app.get('/tasks', (req, res) => {
  res.json(TasksModel.getTasks());
});

app.post('/tasks', (req, res) => {
  TasksModel.createTask(req.body.title);
  res.status(201);
  res.send();
});

app.put('/tasks/:taskId', (req, res) => {
  const updatedTask = TasksModel.updateTask(parseInt(req.params.taskId, 10));
  res.status(200);
  res.send(updatedTask);
});

app.delete('/tasks/:taskId', (req, res) => {
  TasksModel.deleteTask(parseInt(req.params.taskId, 10));
  res.status(204);
  res.send();
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
