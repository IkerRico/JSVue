<script>

import { store } from '../store';

export default {
    methods: {
        delTodos() {
            store.delTodos();
        }
    }
}
</script>

<template>
    <button @click="delTodos"> Eliminar todos </button>
</template>