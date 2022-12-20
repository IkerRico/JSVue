<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            prod: {},
            categories: store.state.categories
        }
    },
    methods: {
        addProduct(){
            store.addProduct(this.prod)
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-4">
            <form @submit.prevent="addProduct">
                <fieldset>
                    <legend class="bg-dark text-white text-center titulo">Añadir producto</legend>
                    <div class="form-group">
                        <label>ID:</label>
                        <input type="text" class="form-control" disabled>
                    </div>
                    <div class="form-group">
                        <label>Nombre:</label>
                        <input type="text" id="newprod-name" class="form-control" minlength="5" maxlength="50" required
                            v-model="prod.nombre">
                    </div>
                    <div class="form-group">
                        <label>Categoría:</label>
                        <select class="form-control" required v-model="prod.category">
                            <option value="">--- Selecciona categoría ---</option>
                            <option v-for="elem in categories" :value="elem.id">{{elem.name}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Unidades.:</label>
                        <input type="number" class="form-control" min="0" step="0" max="100" v-model="prod.unidades">
                    </div>
                    <div class="form-group">
                        <label>Precio/u.:</label>
                        <input type="number" class="form-control" min="0" step="0.01" required v-model="prod.precio">
                    </div>
                    <br>
                    <button type="submit" class="btn btn-default btn-dark submit">Añadir</button>
                    <button type="reset" class="btn btn-danger">Reset</button>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>