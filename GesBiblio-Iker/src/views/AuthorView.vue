<script>
import { mapState, mapActions } from 'pinia';
import { biblioStore } from '../stores/counter.js';

export default {
    data() {
        return {
            author: {}
        }
    },
    computed: {
        ...mapState(biblioStore, {
            getAuthorById: 'getAuthorById',
        }),
    },
    mounted() {
        this.author = this.getAuthorById(this.$route.params.id);
    }
}
</script>

<template>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="'/src/assets/img/' + author.img" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{author.nombre}}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
