import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        name: 'code',
        day: 'today',
        reminder: true,
    },
    {
        id: 2,
        name: 'build portfolio',
        day: 'tomorrow',
        reminder: false,
    }
]);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:"No Tasks to show"}
    </div>
  )
}

export default App
