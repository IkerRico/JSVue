<script>
import ProductItem from './ProductItem.vue';
import { store } from '../store.js';

export default {
    components: {
        ProductItem
    },
    data() {
        return {
            products: store.state.products,
            categories: store.state.categories
        }
    },
    computed: {
        getTotalPrice() {
            let price = 0;
            this.products.forEach(element => {
                price += (element.price * element.units)
            });
            return price.toFixed(2)
        },
        getTotalProducts(){
            return this.products.length
        }
    }
}

</script>

<template>
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Uds</th>
                <th>Precio/u</th>
                <th>Importe</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <product-item v-for="elem in products" :product="elem"></product-item>
        </tbody>
        <tr>
            <th>Total Productos</th>
            <td>{{getTotalProducts}}</td>
            <td colspan="2"></td>
            <th>Importe total</th>
            <td>{{ getTotalPrice }} €</td>
        </tr>
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