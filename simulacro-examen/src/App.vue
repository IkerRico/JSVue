<script>
import AppMenu from './components/AppMenu.vue';
import Footer from './components/Footer.vue';

import { mapState, mapActions } from 'pinia';
import { ofertaStore } from './stores/counter.js';

export default {
  components: {
    AppMenu,
    Footer
  },
  methods: {
    ...mapActions(ofertaStore, ['loadData']),
  },
  mounted(){
    this.loadData();
  }
}
</script>

<template>
  <AppMenu></AppMenu>
  <RouterView />
  <Footer></Footer>
</template>

<style scoped>

</style>
