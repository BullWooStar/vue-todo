<template>
<div class="inner">
  <Header/>
  <TodoInput/>
  <TodoList/>
  <TodoFooter/>
</div>

</template>

<script>
import Header from './components/Header.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
  components: {
    Header,
    TodoInput,
    TodoList,
    TodoFooter
}
}
</script>

<style>

body {
  margin-top: 3rem;
}

.inner {
  width: 80%;
  text-align: center;
  left: 0;
  right: 0;
  margin: 0 auto;
}

</style>
