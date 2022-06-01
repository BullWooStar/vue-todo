<template>
    
        <ul v-for="todo in orderedTodos"
        :key= 'todo.id'
       >
       <span> {{ todo.title }}</span>
        <span class="deleteContainer">
        <span class="material-symbols-outlined"
        v-on:click="deleteTodo(todo.id)">
          delete
        </span>
      </span>
       </ul>

</template>

<script>
import _ from "lodash"

    export default {
      computed:{
        orderedTodos: function(){
          return _.orderBy( this.$store.state.todos,'createdAt','asc');
        }
      },
      created(){
        this.$store.dispatch('readTodos')
      },
      methods: {
        deleteTodo(id){
          this.$store.dispatch('deleteTodo', id)
          this.$store.dispatch('readTodos')
        }
      }
    }

    

</script>
<style scoped>

ul {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  border: .5px solid #6478FB;
  box-shadow: 5px 5px 5px #6478FB;
}

.deleteContainer {
  float: right;
  background: white;
  display: block;
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