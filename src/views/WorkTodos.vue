<template>
  <div class="workTodos">
    <div class="container">
      <h3>工作相關待辦事項</h3>
      <h4>工作相關待辦事項 尚有{{ todoCount }}項未完成</h4>
      <!-- todo-list start -->
      <div class="todo-list">
        <template v-for="(todo, index) in todos" :key="index">
          <TodoCard :todo="todo" @delete="deleteTodo(index)" />
        </template>
        <NewTodoCard @add="addTodo" />
      </div>
      <!-- todo-list end -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TodoCard from "@/components/TodoCard.vue";
import NewTodoCard from "@/components/NewTodoCard.vue";

export default {
  name: "WorkTodos",
  mounted() {
    this.getWorkTodos();
  },
  data() {
    return {
      todos: [],
    };
  },
  computed: {
    todoCount() {
      return this.todos.length;
    },
  },
  methods: {
    getWorkTodos() {
      axios
        .get(`https://mocki.io/v1/92e192ab-8532-4253-9207-2f2e7f76c913`)
        .then((res) => {
          this.todos = res.data;
          this.countTodos();
        });
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.countTodos();
    },
    addTodo(todo) {
      this.todos.push(todo);
      this.countTodos();
    },
    countTodos() {
      let index = this.todos.length;
      this.todoCount = index;
    },
  },
  components: { TodoCard, NewTodoCard },
};
</script>

<style>
</style>