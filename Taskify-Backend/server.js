import  express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import {getProjects, getProject,addProject,updateProject,removeProject} from "./Controllers/ProjectController.js";
import {getTask, addTask, removeTask, updateTask} from "./Controllers/TaskController.js";
const app = express()
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb+srv://mohamedalilechefabrikademy:azerty@clusterfbrk.tykmlyj.mongodb.net/?retryWrites=true&w=majority')
.then(() => { console.log('Connected to MongoDB') })
  .then(() => { app.listen(5000); console.log('Server started on port 5000') })
    .catch(err => console.log(err))


app.get('/projects', getProjects);
app.get('/projects/:id', getProject);
app.post('/projects', addProject);
app.put('/projects/:id', updateProject);
app.delete('/projects/:id',removeProject);   




app.get('/projects/:id/tasks', getTask);
app.post('/projects/:id/tasks', addTask);
app.delete('/tasks/:id', removeTask);
app.put('/tasks/:id', updateTask);