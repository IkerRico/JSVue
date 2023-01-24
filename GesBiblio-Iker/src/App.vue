<script>
import AppMenu from './components/AppMenu.vue';
import Footer from './components/Footer.vue';

import { mapState, mapActions } from 'pinia';
import { biblioStore } from './stores/counter.js';

export default {
  components: {
    AppMenu,
    Footer
  },
  methods: {
    ...mapActions(biblioStore, ['loadData'])
  },
  mounted() {
    this.loadData()
  }
}


</script>

<template>
  <AppMenu></AppMenu>
  <RouterView />
  <Footer></Footer>
</template>

<style scoped>
html {
  min-height: 100%;
  position: relative;
}
</style>
