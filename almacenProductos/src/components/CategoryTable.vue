<script>
import CategoryItem from './CategoryItem.vue';
import { store } from '../store.js';

export default {
    components: {
        CategoryItem
    },
    data() {
        return {
            categories: store.state.categories
        }
    },
}

</script>

<template>
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Categoría</th>
            </tr>
        </thead>
        <tbody>
            <category-item v-for="elem in categories" :category="elem"></category-item>
        </tbody>
    </table>

</template>

<style scoped>
table{
    text-align: center;
}
tr {
    text-align: center;
}

tr:nth-child(2),
td {
    text-align: center;
}
</style>