<template>
  <div class="todo my-3">
    <div class="card">
      <div class="card-body">
        <input type="text" v-model="newTodo" />
        <button type="button" class="btn btn-outline-info" @click="addTodo">
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      this.$emit("add", this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>

<style lang="scss">
.todo {
  width: 30%;
  .card {
    min-height: 90px;
    .card-body {
      display: flex;
      align-items: center;
      position: relative;
      p {
        margin: 0;
        font-size: 20px;
      }
      .btn {
        position: absolute;
        right: 10px;
      }
    }
  }
}
</style>