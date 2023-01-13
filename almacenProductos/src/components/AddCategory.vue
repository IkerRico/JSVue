<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            cat: {},
        }
    },
    methods: {
        saveCat() {
            store.saveCat(this.cat)
            this.cat = {}
            this.$router.push('/CategoryTable')
        },
    }
}
</script>

<template>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6 mt-5">
            <form @submit.prevent="saveCat">
                <fieldset>
                    <legend class="bg-dark text-white text-center">Añadir categoría</legend>
                    <div class="form-group">
                        <label for="newcat-name">Nombre:</label>
                        <input type="text" v-model="cat.name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="newcat-desc">Descripcion:</label>
                        <input type="text" v-model="cat.description" class="form-control">
                    </div>
                    <br>
                    <button type="submit" class="btn btn-default btn-dark">Añadir</button>
                    <button type="reset" class="btn btn-danger">Reset</button>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>