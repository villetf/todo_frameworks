import { useEffect } from "react";

type TodoItem = {
   title: string;
   done: boolean
   id: string;
}

function TodoList({ todoItems, updateList }: { todoItems: any[], updateList: () => void }) {

   useEffect(() => {
      updateList()
   }, []);



   const markAsDone = (item: TodoItem) => {
      const reqBody = JSON.stringify({
         done: !item.done
      })

      fetch(`http://localhost:3000/todo/${item.id}`, {
         method: 'PATCH',
         body: reqBody
      })
      .then(() => updateList())
      
   }

   return (
      todoItems ? (
         <ul>
            {
               todoItems.map((item:TodoItem) => (
                  <li onClick={() => markAsDone(item)} key={item.id}>
                     {item.done ? "✅" : "❌"}{item.title}
                  </li>
               ))
            } 
         </ul>
      
      ) : ( 
         <h3>Laddar...</h3>
      )
   )
}

export default TodoList;            