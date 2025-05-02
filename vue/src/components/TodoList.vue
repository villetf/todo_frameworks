<script lang="ts">
   import { ref, watch, defineProps, defineEmits } from 'vue';
   import { Todo } from '../types/todo';


   export default {
      props: {
         todoList: {
            type: Array as () => Todo[],
            required: true
         }
      },
      emits: ['update-todo'],
      setup(props, { emit }) {

         const localTodoList = ref<Todo[]>([...props.todoList]);

         watch(() => props.todoList, 
         (newTodoList) => {
            localTodoList.value = [...newTodoList];
         }, { deep: true });

         const getTodos = () => {
            fetch('http://localhost:3000/todo')
               .then(res => res.json())
               .then(data => {
                  localTodoList.value = data;
                  emit('update-todo', data);
               });
         }

         const updateList = (todo: Todo) => {
            fetch(`http://localhost:3000/todo/${todo.id}`, {
               method: 'PATCH',
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                  done: todo.done
               })
            })
            .then(() => {
               const newArray = localTodoList.value.map(item => {
                  return item.id === todo.id ? { ...item, done: item.done } : item
               })
               emit('update-todo', newArray);
            })
         }

         getTodos();

         return {
            todoList: localTodoList,
            updateList
         }
      }
   }
</script>

<template>
   <ul>
      <li 
         v-for="todo in todoList" :key="todo.id"
         @click="todo.done = !todo.done; updateList(todo)"
      >
         {{ todo.done ? "✅" : "❌" }}{{ todo.title }}
      </li>
   </ul>
</template>



<style>

</style>