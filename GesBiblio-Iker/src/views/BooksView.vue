<script>
import BookItem from '../components/BookItem.vue'
import { mapState, mapActions } from 'pinia';
import { biblioStore } from '../stores/counter.js';
import { find, findIndex } from 'lodash';

export default {
    components: { BookItem },
    data() {
        return{
            books: [],
            book: {},
        }
    },
    methods: {
        ...mapActions(biblioStore, {
            getBooks: 'getBooks',
            deleteBook: 'deleteBook'
        }),
        deleteLibro(element){
            this.deleteBook(element);
            const index = this.books.findIndex((item) => item.id === element.id);
            this.books.splice(index,1);
        }
    },
    async mounted() {
        this.books = await this.getBooks()
    }

}
</script>

<template>
    <div class="row m-1">
        <BookItem v-for="book in books" :book="book" @deleteBook="deleteLibro($event)"></BookItem>
    </div>
</template>

<style scoped>

</style>
