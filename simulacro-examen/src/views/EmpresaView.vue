<template>
    <div class="card" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">{{ empresa.nombre }}</h5>
            <p class="card-text">Domicilio: {{ empresa.domicilio }}</p>
            <p class="card-text">Localidad: {{ empresa.localidad }}</p>
            <p class="card-text">Contacto: {{ empresa.contacto }}</p>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import { ofertaStore } from '../stores/counter.js';

export default {
    props: {
        id: String,
    },
    computed: {
        ...mapState(ofertaStore, {
            getEmpresaById: 'getEmpresaById',
        }),
        empresa(){
            return this.getEmpresaById(this.id)
        }
    },
}

</script>
<style scoped>

</style>