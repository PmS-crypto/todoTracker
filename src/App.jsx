import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        name: 'code',
        day: 'today'
    },
    {
        id: 2,
        name: 'build portfolio',
        day: 'tomorrow'
    }
]);

  const deleteTask = (id) => {
    console.log('delete ',id)
  }

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  )
}

export default App
