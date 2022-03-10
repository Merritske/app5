import { useState } from "react"

export default function AddTask({ onAdd }) {
const [text, setText] = useState("")
const [day, setDay] = useState("")
const [reminder, setReminder] = useState(false)

const onSubmit = (e) =>{
  e.preventDefault()
  if(!text){
    alert ("please add task")
    return
  }
  onAdd({text, day, reminder})
  
  setText("")
  setDay("")
  setReminder(false)
}

  return (
   <form className='add-form' onSubmit={onSubmit} > 
   <div className='form-control'>
       <label >Task</label>
         <input 
         type="text" 
         placeholder='Add Task' 
         value = {text}
         onChange = {(e)=>setText(e.target.value)}
         />
       </div>
       <div className='form-control'>
       <label >Day & Time</label>
         <input 
         type="text" 
         placeholder='Add Time and Day'
         value = {day}
         onChange = {(e)=> setDay(e.target.value)}
         />
       </div>
       <div className='form-control form-control-check'>
       <label >Set Reminder</label>
         <input type="checkbox"
         checked={reminder }
          value = {reminder}
          onChange = {(e)=> setReminder(e.currentTarget.checked)} />
                </div>
 <button className='btn btn-block' type="submit" value="save task">Save Task</button>
   
   </form>
  )
}
