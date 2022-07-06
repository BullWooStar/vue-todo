<template>
  <div class="todoContainer">
    <span
      class="material-symbols-outlined done"
      :class="{ checkBtnCompleted: todo.done }"
      v-on:click="toogleTodo(todo.id, todo.title, todo.done, todo.order)"
    >
      check
    </span>
    <span :class="{ checkBtnCompleted: todo.done }" v-if="!editMode">
      {{ todo.title }}
    </span>
    <input v-else v-model="todo.title" />
    <span class="editContainer" :class="{ checkBtnCompleted2: todo.done }">
      <span
        v-if="!editMode"
        v-on:click="editTodo()"
        class="material-symbols-outlined"
      >
        edit
      </span>
      <span
        v-else
        v-on:click="offEditTodo(todo.id, todo.title, todo.done, todo.order)"
        class="material-symbols-outlined"
      >
        check
      </span>
    </span>

    <span class="deleteContainer" v-if="!editMode">
      <span class="material-symbols-outlined" v-on:click="deleteTodo(todo.id)">
        delete
      </span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editMode: false,
    };
  },
  methods: {
    async deleteTodo(id) {
      await this.$store.dispatch("deleteTodo", id);
      this.$store.dispatch("readTodos");
    },
    editTodo() {
      this.editMode = true;
    },
    async offEditTodo(id, title, done, order) {
      this.editMode = false;
      await this.$store.dispatch("editTodo", { id, title, done, order });
      this.$store.dispatch("readTodos");
    },
    async toogleTodo(id, title, done, order) {
      done = !done;
      await this.$store.dispatch("toogleTodo", { id, title, done, order });
      this.$store.dispatch("readTodos");
    },
  },
  props: {
    todo: Object,
  },
};
</script>

<style scoped>
.checkBtnCompleted {
  color: red;
  text-decoration: line-through;
}

.checkBtnCompleted2 {
  display: none;
}

.done {
  position: absolute;
  left: 15px;
  top: 12px;
  cursor: pointer;
}

.todoContainer {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  border: 0.5px solid #6478fb;
  box-shadow: 5px 5px 5px #6478fb;
  position: relative;
  margin-top: 20px;
}

input {
  width: 50%;
  height: 20px;
}

.checkBtn {
  float: left;
  margin-top: 14px;
  cursor: pointer;
}

.checkBtnCompleted {
  color: red;
}

.editContainer {
  position: absolute;
  right: 45px;
  top: 6px;
}

.deleteContainer {
  float: right;
  background: white;
  width: 3rem;
  height: 50px;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
}

.material-symbols-outlined {
  font-size: 22px;
  cursor: pointer;
}
</style>
