import { createRouter, createWebHistory } from 'vue-router';
import HomeView  from '../views/HomeView.vue'; 
import BooksView from '../views/BooksView.vue';
import TableAuthors from '../views/TableAuthors.vue';
import AuthorView from '../views/AuthorView.vue';
import FormBook from '../views/AddBook.vue';
import AboutUs from '../views/AboutUs.vue';

import { Form } from 'vee-validate';


const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/Books',
        name: 'BooksView',
        component: BooksView
    },
    {
        path: '/Authors',
        name: 'TableAuthors',
        component: TableAuthors
    },
    {
        path: '/Author/:id',
        name: 'AuthorView',
        component: AuthorView,
        props: true
    },
    {
        path: '/AddBook',
        name: 'BookForm',
        component: FormBook
    },
    {
        path: '/Edit/:id',
        name: 'EditBook',
        component: FormBook,
        props: true
    },
    {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router