<template>
<button v-on:click="clearAll">모두 지우기</button>
</template>

<script>
import axios from 'axios'

    export default {       
        methods: {
            async clearAll(){
            for (let i = 0; i < this.$store.state.todos.length; i++) {
                    await axios({
                url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${this.$store.state.todos[i].id}`,
               method: 'DELETE',
               headers: {
                   "Content-Type": "application/json",
                   apikey: "FcKdtJs202204",
                   username: "KDT2_ChoiHyoKeun"
               }
               })
            }
                this.$store.dispatch('readTodos') 
           }    
        }
    }
</script>

<style>
    button {
        margin-top: 30px;
        width: 200px;
        height: 50px;
        background: linear-gradient(to right, #6478FB, #8763FB);
        border: 1px solid #6478FB;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
    }
</style>