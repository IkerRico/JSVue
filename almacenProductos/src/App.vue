<script>
import AppMenu from './components/AppMenu.vue'
import ProductsTable from './components/ProductsTable.vue';
import AddProduct from './components/AddProduct.vue';
import ErrorMessaje from './components/ErrorMessaje.vue';

import { store } from './store';


export default {
  components: {
    AppMenu,
    ProductsTable,
    AddProduct,
    ErrorMessaje
},
  mounted() {
    store.getProducts();
    store.getCategories();
  }
}
</script>

<template>
  <app-menu></app-menu>
  <ErrorMessaje></ErrorMessaje>
  <router-view></router-view>
</template>

<style>

</style>
