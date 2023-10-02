import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    { name: "Clean Bathroom", isPriority: false },
    { name: "Buy Shopping", isPriority: true },
    { name: "Car's MOT", isPriority: false },
  ])

  const [newTask, setNewTask] = useState("")
  const [priority, setPriority] = useState(false)

  const taskList = tasks.map((task, index) => {
    return(
      <li key={index} className={task.isPriority ? "high" : "low"}>
        <span>{task.name}</span>
        {task.isPriority ? <span className='high'>High</span> : 
        <span className='low'>Low</span>}
      </li>
    )
  })

  const handleTaskInput = (evt) => {
    setNewTask(evt.target.value)
  }

  const handlePriorityChange = (evt) => {
    setPriority(evt.target.value)
  };

  const saveNewTask = (evt) => {
    evt.preventDefault()
    const copyTasks = [... tasks]
    const isPriority = priority === 'high' ? true : false
    copyTasks.push({'name': newTask, isPriority})
    setTasks(copyTasks)
    setNewTask("")
  }

  return (
    <div className="App">

      <h1>To-Do's</h1>
      <hr></hr>

      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'>Add a new task:</label>
        <input id='new-task' type='text' value={newTask} onChange={handleTaskInput}/>
        <input type='submit' value='Save New Task' />
        <input type='radio' name='priority' value='high' checked={priority === 'high'} 
        onChange={handlePriorityChange}/> High
        <input type='radio' name='priority' value='low' checked={priority === 'low'} 
        onChange={handlePriorityChange}/> Low
      </form>

      <ul>
        {taskList}
      </ul>

    </div>
  );
}

export default App;
