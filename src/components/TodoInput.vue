<template>

  <div class="inputBox shadow">
      <input 
        type="text"
        placeholder="할일을 적으세요~"
        :value="newTodo"
        @input="newTodo = $event.target.value"
        v-on:keyup.enter="addTodo">
      <span class="addContainer"
      v-on:click="addTodo">
          <span class="addBtn" >
            +
          </span>
      </span>
  </div>
</template>
    
<script>
  
    export default {
        data: function() {
            return {
                newTodo: ""
            }
        },
        methods: {
          addTodo() {
                if (this.newTodo !== ''){
                this.$store.dispatch('readTodos') 
                this.$store.dispatch('createTodo', this.newTodo)
                this.newTodo = ''
                this.$store.dispatch('readTodos')
                }
            }
         }

    }


</script>

<style scoped>
input:focus {
  outline:none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  border: 1px solid #6478FB;
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
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.addBtn {
  color: white;
  vertical-align: middle;
  font-size: 40px;
}
</style>