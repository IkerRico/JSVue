<script>
import { mapState, mapActions } from 'pinia';
import { store } from '../stores/counter.js';

export default {
    props: {
        item: Object,
    },
    methods: {
        ...mapActions(store, ['toggleDone','delTodo']),
        confirmDelete(){
            if(confirm('Quieres eliminar la tarea?')){
                this.delTodo(this.item.id)
            }
        }
    },
}
</script>

<template>
    <li>
        <input type="checkbox" v-model="item.done" @click="toggleDone(this.item)">
        <del v-if="item.done">{{ item.title }}</del>
        <span v-else>{{ item.title }}</span>
        <button class="btn btn-danger" @click="confirmDelete()">Delete</button>
    </li>
</template>
<style scoped>

</style>
