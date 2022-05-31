<template>
  <div class="todo my-3">
    <div class="card">
      <div class="card-body">
        <p>{{ todo }}</p>
        <button type="button" class="btn-close" aria-label="Close" @click="deleteTodo"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return {
    };
  },
  methods: {
      deleteTodo(){
          this.$emit("delete");
      }
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
      .btn-close {
        position: absolute;
        right: 10px;
      }
    }
  }
}
</style>