<script>
import { mapState, mapActions } from 'pinia';
import { biblioStore } from '../stores/counter.js';

export default {
    data() {
        return {
            author: {},
            topic: {},
        }
    },
    props: {
        book: Object,
    },
    computed: {
        ...mapState(biblioStore, {
            getAuthorById: 'getAuthorById',
            getTopicById: 'getTopicById',
        }),
    },
    mounted() {
        this.author = this.getAuthorById(this.book.autor);
        this.topic = this.getTopicById(this.book.tema);
    },
    methods: {
        deleteBook(){
            if (confirm('Quieres eliminar el libro?')) {
                this.$emit('deleteBook', this.book);
            }
        }
    }
}
</script>
<template>
    <div class="col-4">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="'src/assets/img/' + book.img" class="card-img-top foto" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ book.nombre }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ author.nombre }}</h6>
                        <p class="card-text"><small class="text-muted">{{ topic.nombre }}</small></p>
                        <p class="card-text">{{ book.desc }}</p>
                        <button class="btn btn-secondary" @click="$router.push('/Edit/' + book.id )" title="Editar">
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn btn-secondary" @click="deleteBook()" title="Eliminar">
                            <i class="bi bi-trash"></i>
                        </button>
                        <button class="btn btn-secondary" @click="$router.push('/Author/' + author.id)" title="Ver autor" >
                            <i class="bi bi-person"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>