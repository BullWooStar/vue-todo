import { createStore } from 'vuex'
import axios from 'axios'




export default createStore({
    state() {
        return{
            todos: ''
        }
    }
    ,
    mutations: {
        setTodos(state, payload){
            state.todos = payload
        }
    },
    actions: {
        async readTodos({commit}){
            const res = await axios({
                url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    apikey: "FcKdtJs202204",
                    username: "KDT2_ChoiHyoKeun"
                }
            })
            commit('setTodos', res.data)
        },
        async createTodo(context, title){
            await axios({
                url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
               method: 'POST',
               headers: {
                   "Content-Type": "application/json",
                   apikey: "FcKdtJs202204",
                   username: "KDT2_ChoiHyoKeun"
               },
               data: {
                   title: title
               }
               })
        },
        async deleteTodo(context, id) {
            await axios({
                  url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
                  method: 'DELETE',
                  headers: {
                     "Content-Type": "application/json",
                     apikey: "FcKdtJs202204",
                     username: "KDT2_ChoiHyoKeun"
                 }
                 })
        }
    }
})

