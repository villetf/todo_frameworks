<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'
import AddNewTodo from './components/AddNewTodo.vue';

const todoList = ref<Todo[]>([]);

const addTodo = (newTodo: Todo) => {
   todoList.value.push(newTodo);
   console.log('todoList', todoList.value);
};
</script>

<template>
   <div>
      <h1>Att göra</h1>
      <TodoList :todoList="todoList" @update-todo="todoList = $event" />
      <AddNewTodo :todoList="todoList" @update-todo="addTodo" />
      
   </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
