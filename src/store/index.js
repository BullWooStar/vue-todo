import { createStore } from 'vuex'
import axios from 'axios'
const url = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'
const headers = {
    "Content-Type": "application/json",
    apikey: "FcKdtJs202204",
    username: "KDT2_ChoiHyoKeun"
}



export default createStore({
    state() {
        return{
            todos: []
        }
    }
    ,
    mutations: {
        setTodos(state, payload){
            state.todos = payload
        },
        addTodo(state, payload){
            state.todos.push(payload)
        }
    },
    actions: {
        async readTodos({commit}){
            try {
                const res = await axios({
                    url: url,
                    method: 'GET',
                    headers: headers
                })
                commit('setTodos', res.data)
            } catch {
                alert('ERROR')
            }
            
        },
        async createTodo({commit}, title){
            try {           
                const res = await axios({
                url: url,
                method: 'POST',
                headers: headers,
                data: {
                   "title": title
                }
            })
                commit ('addTodo', res.data)
            } catch {
                alert('ERROR')
            }

        },
        async deleteTodo(context, id) {
            try {
                await axios({
                    url: `${url}/${id}`,
                    method: 'DELETE',
                    headers: headers
              })
            } catch {
                alert('ERROR')
            }
        },
        async editTodo(context, payload) {
            try {
                const {id, title, done, order} = payload
                await axios({
                            url: `${url}/${id}`,
                            method: 'PUT',
                            headers: headers,
                            data: {
                               "title" : title,
                               "done" : done,
                               "order" : order
                            }
                        })
            } catch {
                alert('ERROR')
            }
            
        },
        async toogleTodo(context, payload) {
            try {
                const {id, title, done, order} = payload
                await axios({
                            url: `${url}/${id}`,
                            method: 'PUT',
                            headers: headers,
                            data: {
                               "title" : title,
                               "done" : done,
                               "order" : order
                            }
                        })
            } catch {
                alert('ERROR')
            }
        }

    }
})

