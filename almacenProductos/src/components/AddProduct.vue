<script>
import { store } from '../store.js';

export default {
    props: {
        id: String
    },
    data() {
        return {
            prod: {},
            categories: store.state.categories,
            titulo: "Añadir"
        }
    },
    methods: {
        async saveProduct() {
            try {
                await store.saveProduct(this.prod)
                this.prod = {}
                this.$router.push('/')
            } catch (error) {
            }
        },
        async resetForm() {
            this.prod = this.id ? await store.getProduct(this.id) : {}
        }
    },
    async mounted() {
        if (this.id) {
            this.prod = await store.getProduct(this.id) || {}
            this.titulo = "Editar"
        }
    },
    watch: {
        $route(to, from) {
            this.prod = {}
            this.titulo = "Añadir"
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6 mt-5">
            <form @submit.prevent="saveProduct" @reset.prevent="resetForm">
                <fieldset>
                    <legend class="bg-dark text-white text-center titulo">{{ titulo }} producto</legend>
                    <div class="form-group">
                        <label>ID:</label>
                        <input type="text" class="form-control" v-model="prod.id" disabled>
                    </div>
                    <div class="form-group">
                        <label>Nombre:</label>
                        <input type="text" id="newprod-name" class="form-control" minlength="5" maxlength="50" required
                            v-model="prod.name">
                    </div>
                    <div class="form-group">
                        <label>Categoría:</label>
                        <select class="form-control" required v-model="prod.category">
                            <option v-for="elem in categories" :value="elem.id">{{ elem.name }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Unidades:</label>
                        <input type="number" class="form-control" min="0" step="0" max="100" v-model="prod.units">
                    </div>
                    <div class="form-group">
                        <label>Precio/u.:</label>
                        <input type="number" class="form-control" min="0" step="0.01" required v-model="prod.price">
                    </div>
                    <br>
                    <button type="submit" class="btn btn-default btn-dark submit">Añadir</button>
                    <button type="reset" class="btn btn-danger ">Reset</button>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>