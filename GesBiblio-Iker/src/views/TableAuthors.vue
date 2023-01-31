<script>
import { mapState, mapActions } from 'pinia';
import AuthorItem from '../components/AuthorItem.vue';
import { biblioStore } from '../stores/counter.js';

export default {
    computed: {
        ...mapState(biblioStore, {
            authors: 'authors',
            totalAuthors: 'totalAuthors'
        })
    },
    components: {
        AuthorItem,
    },

}
</script>

<template>
    <table class="table table-striped">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Nacionalidad</th>
                <th>Imagen/</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <AuthorItem v-for="author in authors" :author="author"></AuthorItem>
        </tbody>
        <tr>
            <th colspan="2">Autores citados: </th>
            <td>{{ totalAuthors }}</td>
        </tr>
    </table>
</template>

<style scoped>
table {
    text-align: center;
}
</style>
