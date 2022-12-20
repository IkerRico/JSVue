<script>
import { store } from '../store.js';

export default {
    props: {
        product: Object,
    },
    data() {
        return {
            categories: store.state.categories
        }
    },
    methods: {
        deleteProduct() {
            if (confirm('Quiere borra el elemento ' + this.product.name)) {
                store.deleteProduct(this.product)
            }
        },
        addUnits(){
            store.addUnits(this.product)
        },
        delUnits(){
            store.delUnits(this.product)
        }
    },
    computed: {
        getCategory() {
            return this.categories.find((element) => element.id == this.product.category) || {};
        }
    }
}
</script>

<template>
    <tr>
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ getCategory.name }}</td>
        <td>{{ product.units }}</td>
        <td>{{ product.price }} €</td>
        <td>{{ (product.price * product.units).toFixed(2) }} €</td>
        <td id="botones">
            <button class="btn btn-success" @click="addUnits"><i class="bi bi-arrow-up"></i></button>
            <button class="btn btn-info" @click="delUnits"><i class="bi bi-arrow-down"></i></button>
            <button class="btn btn-warning"><i class="bi bi-pencil"></i></button>
            <button class="btn btn-danger" @click="deleteProduct"><i class="bi bi-trash"></i></button>
        </td>
    </tr>
</template>

<style scoped>
tr {
    text-align: center;
}

#botones {
    display: flex;
    justify-content: center;
    gap: 3px;
}
</style>