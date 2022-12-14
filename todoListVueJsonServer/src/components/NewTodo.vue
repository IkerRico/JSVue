<script>
import { store } from '../store.js'

export default {
    data(){
        return {
            newTitle: ""
        }
    },
    methods: {
        addTodo() {
            if(this.newTitle){
            store.addTodo(this.newTitle);
            this.newTitle = ""
            }
        },
    }
}
</script>

<template>
    <input type="text" v-model="newTitle"> <button @click="addTodo">Añadir</button><br><br>
</template>