import { createRouter, createWebHistory } from 'vue-router';
import ProductsTable from './components/ProductsTable.vue';
import AddProduct from './components/AddProduct.vue';
import CategoryTable from './components/CategoryTable.vue';
import AddCategory from './components/AddCategory.vue';
import About from './components/About.vue';
import CompNotFound from './components/CompNotFound.vue';


const routes = [
    {
        path: '/',
        name: 'Table',
        component: ProductsTable
    },
    {
        path: '/AddProduct',
        name: 'AddProduct',
        component: AddProduct
    },
    {
        path: '/edit/:id',
        name: 'EditProduct',
        component: AddProduct,
        props: true
    },
    {
        path: '/CategoryTable',
        name: 'CategoryTable',
        component: CategoryTable
    },
    {
        path: '/AddCategory',
        name: 'AddCategory',
        component: AddCategory
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/not-found',
        name: '404',
        component: CompNotFound,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: {
            name: '404',
        },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router