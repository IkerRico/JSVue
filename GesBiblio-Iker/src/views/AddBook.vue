<script>
import { mapState, mapActions } from 'pinia';
import { biblioStore } from '../stores/counter.js';
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from 'yup';

export default {
    components: {
        Form,
        Field,
        ErrorMessage
    },
    props: {
        id: String,
    },
    data() {
        const validatorForm = yup.object({
            nombre: yup.string()
                .required('Title is required')
                .min(2, 'Title must have at least 2 characters')
                .max(50, 'Title must have no more than 50 characters'),
            ISBN: yup.string()
                .required('ISBN is required')
                .min(10, 'ISBN must have at least 10 characters'),
            autor: yup.string()
                .required('Author is required'),
            tema: yup.string()
                .required('Themes is required'),
            desc: yup.string()
                .nullable(),
            img: yup.string()
                .nullable()
        })
        return {
            book: {},
            validatorForm
        }
    },
    computed: {
        ...mapState(biblioStore, {
            saveBook: 'saveBook',
            authors: 'authors',
            themes: 'themes',
        }),
    },
    methods: {
        async save() {
                this.saveBook(this.book);
                this.$router.push('/Books')
                this.book = {};
        },
        resetForm() {
            this.book = this.id ? this.getBookById(this.id) : {}
        },
        ...mapActions(biblioStore, {
            getBookById: 'getBookById'
        })
    },
    async mounted() {
        if (this.id) {
            this.book = await this.getBookById(this.id) || {}
        }
    },
}
</script>
<template>
    <div class="d-flex justify-content-center">
        <Form :initial-values="this.book" :validation-schema="validatorForm" @submit.prevent="save()"
            @reset.prevent="resetForm()" class="my-3">
            <div class="form-group">
                <input type="hidden" class="form-control" v-model="book.id" disabled>
            </div>
            <div class="form-group">
                <label for="bookTitle">Title</label>
                <Field class="form-control" name="nombre" type="text" />
                <ErrorMessage class="ErrorMessage" name="nombre" />
            </div>
            <div class="form-group">
                <label for="bookIsbn">ISBN</label>
                <Field class="form-control" name="ISBN" type="text" />
                <ErrorMessage class="ErrorMessage" name="ISBN" />
            </div>
            <div class="form-group">
                <label for="bookAuthor">Author</label>
                <Field as="select" class="form-control" name="autor">
                    <option v-for="elem in authors" :value="elem.id">{{ elem.nombre }}</option>
                </Field>
                <ErrorMessage class="ErrorMessage" name="autor" />
            </div>
            <div class="form-group">
                <label for="bookThemes">Themes</label>
                <Field as="select" class="form-control" name="tema">
                    <option v-for="elem in themes" :value="elem.id">{{ elem.nombre }}</option>
                </Field>
                <ErrorMessage class="ErrorMessage" name="tema" />
            </div>
            <div class="form-group">
                <label for="bookDesc">Description</label>
                <Field class="form-control" type="textarea" name="desc" id="bookDesc" rows="3" />
                <ErrorMessage class="ErrorMessage" name="desc" />
            </div>
            <div class="form-group">
                <label for="bookImg">Image</label>
                <Field type="text" name="img" class="form-control" id="bookImg" />
                <ErrorMessage class="ErrorMessage" name="img" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="reset" class="btn btn-danger ">Reset</button>
        </Form>
    </div>
</template>
<style>
.form-group {
    padding-top: 10px;
    margin-bottom: 10px;
    width: 600px;
}

button {
    margin: 10px;
}

.ErrorMessage {
    color: red;
}
</style>