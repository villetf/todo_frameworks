<script lang="ts">
   import { onMount } from "svelte";
   import { todoList } from "../store.ts";
   import type { Todo } from "../types.ts";

   

   onMount(() => {
      fetch('http://localhost:3000/todo')
         .then(res => res.json())
         .then(data => {
            console.log(data);
            console.log('state före', $todoList);
            todoList.set(data);
            console.log('state efter', $todoList);
         })
   });

   const updateTodo = (todo:Todo) => {      
      fetch(`http://localhost:3000/todo/${todo.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ done: !todo.done })
      })
         .then(() => {
            todoList.update(allTodos => {
               return allTodos.map(currentTodo => {
                  return currentTodo.id === todo.id ? { ...currentTodo, done: !currentTodo.done } : currentTodo
               })
            });
         })
   }

</script>

<ul>
   {#each $todoList as todo}
      <li on:click={() => updateTodo(todo)}>{todo.done ? '✅' : '❌'}{todo.title}</li>
   {/each}
</ul>