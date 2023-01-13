<script>
import AppMenu from './components/Header.vue'
import ShowTodos from './views/ShowTodos.vue';
import AddTodo from './views/AddTodo.vue'
import { mapState, mapActions } from 'pinia';
import { store } from './stores/counter.js';

export default {
    components: {
        AppMenu,
        ShowTodos,
        AddTodo,
    },
    methods: {
        ...mapActions(store, ['loadTodos'])
    },
    mounted() {
        this.loadTodos()
    }
}

</script>

<template>
    <AppMenu></AppMenu>
    <RouterView />
</template>

<style scoped>

</style>
