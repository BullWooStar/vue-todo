<template>
  <button v-on:click="clearAll">모두 지우기</button>
</template>

<script>
export default {
  methods: {
    async clearAll() {
      await Promise.all(
        this.$store.state.todos.map((todo) =>
          this.$store.dispatch("deleteTodo", todo.id)
        )
      );
      this.$store.dispatch("readTodos");
    },
  },
};
</script>

<style>
button {
  margin-top: 30px;
  width: 200px;
  height: 50px;
  background: linear-gradient(to right, #6478fb, #8763fb);
  border: 1px solid #6478fb;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}
</style>
