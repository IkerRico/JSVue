<script>
import ShowLi from "./ShowLi.vue";
import { store } from "../store.js"

export default {
    components: {
        ShowLi
    },
    data() {
        return {
            todos : store.state.todos
        }
    },
    methods: {
        delTodo(index) {
            store.delTodo(index);
        }
    }
}
</script>

<template>
    <ul><show-li v-for="elem, index in todos" :key="index" :item="elem" @dblclick="delTodo(index)" ></show-li></ul>
    <p v-if="todos.length > 0">Total tareas: {{ todos.length }}</p>
    <p v-else>No hay tareas que mostrar</p>
</template>