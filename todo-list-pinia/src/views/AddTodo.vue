<script>
import { mapState, mapActions } from 'pinia';
import { store } from '../stores/counter.js';

export default {
    data() {
        return {
            newTitle: ''
        }
    },
    methods: {
        ...mapActions(store, ['addTodo']),
        async sumbitForm() {
            if (this.newTitle) {
                try {
                    await this.addTodo(this.newTitle);
                    this.$router.push('/')
                } catch (err) {
                    alert(err)
                }
            } else {
                alert("Rellene el campo")
            }
        },
    }
}
</script>

<template>
    <div>
        <input type="text" v-model="newTitle"> <button @click="sumbitForm()">Añadir</button><br><br>
    </div>
</template>

<style>

</style>