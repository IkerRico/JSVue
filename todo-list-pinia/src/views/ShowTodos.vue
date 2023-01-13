<script>
import { mapState, mapActions } from 'pinia';
import { store } from '../stores/counter.js';
import showTodo from '../components/ShowTodo.vue';


export default {
    components:{
        showTodo
    },
    computed: {
        ...mapState(store, {
            todos: 'todos',
        })
    },
    methods: {
        ...mapActions(store, ['delTodo'])
    },
}
</script>

<template>
    <div>
        <ul>
            <showTodo v-for="elem in todos" :item="elem"></showTodo>
        </ul>
        <p v-if="todos.length > 0">Total tareas: {{ todos.length }}</p>
        <p v-else>No hay tareas que mostrar</p>
    </div>
</template>

<style scoped>
ul > * {
    list-style-type: none;
}
</style>
