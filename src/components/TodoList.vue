<template>
  <TodoItem v-for="todo in orderedTodos" :key="todo.id" :todo="todo">
  </TodoItem>
</template>

<script>
import _ from "lodash";
import TodoItem from "./TodoItem.vue";

export default {
  computed: {
    orderedTodos: function () {
      return _.orderBy(this.$store.state.todos, "createdAt", "asc");
    },
  },
  created() {
    this.$store.dispatch("readTodos");
  },
  components: {
    TodoItem,
  },
};
</script>
<style scoped></style>
