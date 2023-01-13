<script>
import { mapState, mapActions } from 'pinia';
import { store } from '../stores/counter.js';

export default{
    methods: {
        ...mapActions(store, ['delTodos']),
    }
}
</script>

<template>
    <div id="header">
        <div id="nav">
            <div id="titulo">
                <h1>Todo List</h1>
            </div>
            <ul>
                <li class="btn btn-warning">
                    <router-link to="/">Todos</router-link>
                </li>
                <li class="btn btn-warning">
                    <router-link to="AddTodo">New Todo</router-link>
                </li>
                <li class="btn btn-danger" @click="delTodos">DelTodos</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
#nav{
    padding-left: 20px;
    padding-top: 10px;
    display: flex;
    align-content: center;
    background-color: grey;
}


li {
    display: inline-flex;
    margin-left: 40px;
    margin-top: 5px;
}

li > *{
    text-decoration: none;
    color: black;
}

</style>
