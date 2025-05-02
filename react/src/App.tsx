import { useState } from 'react';
import './App.css'
import TodoList from './TodoList'

function App() {
   const [todoItems, setTodoItems] = useState([]);

   const updateList = () => {
      fetch('http://localhost:3000/todo')
         .then(res => res.json())
         .then(data => {
            setTodoItems(data)
         })
   }

   const sendNew = () => {
      fetch('http://localhost:3000/todo', {
         method: 'POST',
         body: JSON.stringify({
            title: (document.getElementById('inputField')! as HTMLInputElement).value,
            done: false
         })
      })
         .then(() => updateList())
   }

   return (
      <>
         <h1>Att göra</h1>
         <TodoList updateList={updateList} todoItems={todoItems}></TodoList>
         <input type="text" id='inputField'/>
         <input type="submit" onClick={sendNew}/>
      </>
   )
}

export default App
