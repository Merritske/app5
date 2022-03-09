import { useState } from "react"
import './App.css';
import AddTask from "./components/AddTask";
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([{id:1,
    text: "Dokter",
    day: "feb 5th 2:30pm",
    reminder: true
},{
    id:2,
    text: "school",
    day: "feb 6th 2:30pm",
    reminder: true
},
{
    id:3,
    text: "winkel",
    day: "feb 5th 2:30pm",
    reminder: true
}])
//Add task
const addTask = (task)=>{
const id = Math.floor(Math.random()*10000) +1
const newTask = {id, ...task}
setTasks([...tasks, newTask])
}
//delete task
function deleteTask(id){
setTasks(tasks.filter((task)=> task.id !== id))
}
//Toggle reminder
function toggleReminder(id){
 setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder: !task.reminder } : task))
}
  return (
    <div className="container">
<Header onAdd={()=> setShowAddTask(!showAddTask) } showAdd={showAddTask} /> 
{showAddTask && <AddTask onAdd={addTask}/>}
{tasks.length > 0 ?
<Tasks 
tasks={tasks} 
onDelete={deleteTask}
onToggle = {toggleReminder}
/>
 : "No Tasks to show"}

    </div>
  );
}

export default App;
