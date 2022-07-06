<template>
  <div class="inputBox">
    <input
      type="text"
      placeholder="할일을 적으세요~"
      v-model="newTodo"
      v-on:keydown.enter="addTodo"
    />
    <button class="addContainer" v-on:click="addTodo">
      <button class="addBtn">+</button>
    </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodo: "",
    };
  },
  methods: {
    async addTodo() {
      if (this.newTodo !== "") {
        await this.$store.dispatch("createTodo", this.newTodo);
        this.newTodo = "";
      }
    },
  },
};
</script>

<style scoped>
input {
  width: 70%;
  height: 20px;
}

input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  border: 1px solid #6478fb;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

input {
  text-align: center;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
  font-size: 40px;
}
</style>
