<template>
    <h1>Ofertas de la empresa {{ id }}</h1>
    <table class="table table-striped table-center">
        <thead class="thead-dark bg-dark">
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Empresa</th>
                <th>Contrato</th>
                <th>Contacto</th>
                <th>Email</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <oferta-item v-for="oferta in ofertas" :oferta='oferta' @deleteOferta="deleteElem($event)"></oferta-item>
        </tbody>
    </table>
    <button class="btn btn-info" @click="$router.push('/NuevaOferta')">Nueva Oferta</button>

</template>
<script>
import { mapState, mapActions } from 'pinia';
import { ofertaStore } from '../stores/counter.js';
import OfertaItem from '../components/OfertaItem.vue';

export default {
    props: {
        id: String
    },
    data() {
        return {
            ofertas: []
        }
    },
    components: {
        OfertaItem
    },
    methods: {
        ...mapActions(ofertaStore, {
            getOfertasByEmpresaId: 'getOfertasByEmpresaId',
            deleteOferta: 'deleteOferta'
        }),
        deleteElem(element) {
            this.deleteOferta(element);
            const index = this.ofertas.findIndex((item) => item.id === element.id);
            this.ofertas.splice(index, 1);
        }
    },
    async mounted() {
        this.ofertas = await this.getOfertasByEmpresaId(this.id)
    }
}
</script>
<style scoped>
th {
    color: white;
    text-align: center;
}
</style>