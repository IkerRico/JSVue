import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

const SERVER = import.meta.env.VITE_SERVERURL;

export const ofertaStore = defineStore('store', {
    state() {
        return {
            empresas: [],
            alumnos: []
        }
    },
    actions: {
        async loadData() {
            try {
                const responseEmpresas = await axios.get(SERVER + '/empresas');
                const responseAlumnos = await axios.get(SERVER + '/alumnos');
                this.empresas = responseEmpresas.data;
                this.alumnos = responseAlumnos.data;
            } catch (err) {
                alert('Error al cargar los datos')
            }
        },
        async getOfertas() {
            try {
                return await axios.get(SERVER + '/ofertas').data;
            } catch (err) {
                alert('error al cargar las ofertas')
            }
        },
        async getOfertaById(id) {
            try {
                const response = await axios.get(SERVER + '/ofertas/' + id);
                return response.data;
            } catch (err) {
                alert('error al cargar las ofertas')
            }
        },
        async getOfertasByEmpresaId(id) {
            try {
                const response = await axios.get(SERVER + '/ofertas?empresa=' + id);
                return response.data;
            } catch (err) {
                alert('error al cargar las ofertas')
            }
        },
        async saveOferta(element) {
            if (!element.id) {
                try {
                    await axios.post(SERVER + '/ofertas', element);
                } catch (err) {
                    alert('Error al añadir la oferta');
                }
            } else {
                try {
                    await axios.patch(SERVER + '/ofertas/' + element.id, element);
                } catch (error) {
                    alert('Error al editar la oferta')
                }
            }
        },
        async deleteOferta(element) {
            try {
                await axios.delete(SERVER + '/ofertas/' + element.id);
            } catch (err) {
                alert(err);
            }
        },
    },
    getters: {
        getEmpresaById: (state) => (id) => state.empresas.find((empresa) => empresa.id == id) || {},
    }
})
