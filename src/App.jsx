import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import { useState } from "react";
import AddTask from "./components/AddTask.jsx";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
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

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={()=>{setShowAddTask(!showAddTask)}} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:"No Tasks to show"}
    </div>
  )
}

export default App
