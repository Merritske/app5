import { useState, useEffect } from "react"
import './App.css';
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from './components/Header';
import Tasks from './components/Tasks';
import Ventje from "./components/Ventje";
import About from "./components/About"
import { BrowserRouter as Router,Routes, Route} from "react-router-dom"

//https://github.com/captbaritone/webamp

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(async(task)=>{

  const tasksFromServer = await fetchTasks(task)
   setTasks(tasksFromServer)

  },[])

  //fetch tasks
    const fetchTasks = async () =>{
      const res = await fetch("http://localhost:5000/tasks")
      const data = await res.json()
console.log(data)
   return data
    }

    //fetch task
    const fetchTask = async (id) =>{
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      console.log(data)
   return data
    }

//Add task
const addTask = async(task)=>{
  const res = await fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json" ,
    },
    body: JSON.stringify(task)
  })
  const data = await res.json()

  setTasks([...tasks, data])
// const id = Math.floor(Math.random()*10000) +1
// const newTask = {id, ...task}
// setTasks([...tasks, newTask])

}

//delete task
const deleteTask = async (id) =>{
await fetch(`http://localhost:5000/tasks/${id}`, {method: "DELETE"})

setTasks(tasks.filter((task)=> task.id !== id))
}

//Toggle reminder

const toggleReminder = async(id) => {
const taskToToggle = await fetchTask(id)
const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
console.log(taskToToggle.reminder)

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method : "PUT",
    headers:{
      "Content-type" : "application/json"
    },
    body: JSON.stringify(updTask)
  })
 
  const data = await res.json()

 setTasks(tasks.map((task)=> 
 task.id === id ? { ...task, reminder: data.reminder } : task))

}
  return (
   
  <div>
     <Router>
    <div className="container">
<Header 
onAdd={()=> setShowAddTask(!showAddTask) } showAdd={showAddTask} /> 

 <Routes>
   <Route path="/" element={(
     <>
     {showAddTask && <AddTask onAdd={addTask}/>}
{tasks.length > 0 ?
<Tasks 
tasks={tasks} 
onDelete={deleteTask}
onToggle = {toggleReminder}
/>
 : "No Tasks to show"}
     </>
   )}/>
<Route path="/about" element={<About/>} />


 </Routes>
<Footer />

    </div>
  
    </Router>
    {/* <Ventje/> */}
    </div>
  );
}

export default App;
