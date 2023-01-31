<template>
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12">
      <h1>Listado de empresas</h1>
      <table class="table table-striped table-hover">
        <thead class="thead-dark bg-dark">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Domicilio</th>
            <th>Localidad</th>
            <th>Contacto</th>
            <th>email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="empresa in empresas" :key="empresa.id" :empresa="empresa">
            <td>{{ empresa.id }}</td>
            <td>{{ empresa.nombre }}</td>
            <td>{{ empresa.domicilio }}</td>
            <td>{{ empresa.localidad }}</td>
            <td>{{ empresa.contacto }}</td>
            <td>{{ empresa.email }}</td>
            <td>
              <button class="btn btn-secondary" @click="$router.push('/Empresas/' + empresa.id )" title="Ver empresas">
                <i class="bi bi-building"></i>
              </button>
              <button class="btn btn-secondary" @click="$router.push('/Ofertas/' + empresa.id)" title="Ver oferta">
                <i class="bi bi-journal"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { ofertaStore } from '../stores/counter.js';

export default {
  computed: {
    ...mapState(ofertaStore, {
      empresas: 'empresas'
    }),
  },
};
</script>

<style scoped>
th{
  color: white;
  text-align: center;
}
td{
  text-align: center;
}
</style>