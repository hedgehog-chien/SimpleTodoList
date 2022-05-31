<template>
  <div class="homeTodos">
    <div class="container">
      <h3>家庭相關待辦事項</h3>
      <h4>家庭相關待辦事項 尚有{{ todoCount }}項未完成</h4>
      <!-- todo-list start -->
      <div class="todo-list">
        <template v-for="(todo, index) in todos" :key="index">
          <todo-card :todo="todo" @delete="deleteTodo(index)" />
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
  name: "HomeTodos",
  mounted() {
    this.getHomeTodos();
  },
  components: {
    TodoCard,
    NewTodoCard,
  },
  data() {
    return {
      todos: [],
    };
  },
  computed: {
      todoCount(){
          return this.todos.length
      }
  },
  methods: {
    getHomeTodos() {
      axios
        .get(`https://mocki.io/v1/a6c002bd-daa7-484a-92a0-b7031ec16b83`)
        .then((res) => {
          this.todos = res.data;
        });
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);

    },
    addTodo(todo) {
      this.todos.push(todo);

    },
  },
};
</script>

<style lang="scss">
.todo-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>