<template>
    <tr>
        <td>{{ oferta.id }}</td>
        <td>{{ oferta.nombre }}</td>
        <td>{{ empresaName }}</td>
        <td>{{ oferta.contrato }}</td>
        <td>{{ oferta.contacto }}</td>
        <td>{{ oferta.email }}</td>
        <td>
            <button class="btn btn-secondary" @click="$router.push('/Edit/' + oferta.id)" title="Editar">
                <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-secondary" @click="deleteOferta()" title="Eliminar">
                <i class="bi bi-trash"></i>
            </button>
            <button class="btn btn-secondary" @click="$router.push('/Empresas/' + oferta.empresa)" title="Ver empresa">
                <i class="bi bi-building"></i>
            </button>
        </td>
    </tr>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import { ofertaStore } from '../stores/counter.js';

export default {
    props: {
        oferta: {}
    },
    methods: {
        ...mapActions(ofertaStore, {
            getEmpresaById: 'getEmpresaById',
        }),
        deleteOferta() {
            if (confirm('Quieres eliminar el libro?')) {
                this.$emit('deleteOferta', this.oferta);
            }
        }
    },
    computed: {
        empresaName() {
            return this.getEmpresaById(this.oferta.empresa).nombre
        }
    }
}
</script>
<style scoped>
tr>* {
    text-align: center;
}
</style>