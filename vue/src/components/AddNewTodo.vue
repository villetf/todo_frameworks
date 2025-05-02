<script lang="ts">
   import { ref } from 'vue';
   import { Todo } from '../types';


   export default {
      props: {
         todoList: {
            type: Array as () => Todo[],
            required: true
         }
      },

      emits: ['update-todo'],
      setup(props, { emit }) {
         const newTodo = ref<Todo>();

         const sendNewTodo = () => {
            fetch('http://localhost:3000/todo', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                  title: newTodo.value ,
                  done: false
               })
            })
            .then(res => res.json())
            .then((data) => {
               emit('update-todo', data);
            })
         }

         return {
            newTodo,
            sendNewTodo
         }
      }
   }
</script>

<template>
   <input id="newTodoInput" type="text" v-model="newTodo" />
   <button @click="sendNewTodo()">Skicka</button>
</template>

<style>

</style>