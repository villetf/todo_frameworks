<script lang="ts">
   import { todoList } from "../store.ts";

   let newTodo:string;

   const sendNewTodo = (event:SubmitEvent) => {
      event.preventDefault();

      fetch('http://localhost:3000/todo', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ 
            title: newTodo,
            done: false
         })
      })
         .then(res => res.json())     
         .then(data => {            
            todoList.update(allTodos => {
               return [...allTodos, data]
            })
         })
   }
</script>

<form on:submit={sendNewTodo}>
   <input type="text" bind:value={newTodo}/>
   <button type="submit">Skicka</button>
</form>