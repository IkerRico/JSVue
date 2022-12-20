import { reactive } from 'vue';
import axios from 'axios';

const SERVER = 'http://localhost:3000';

export const store = {
    state: reactive({
        products: [],
        categories: [],
        messajes: []
    }),
    async getProducts() {
        try {
            const response = await axios.get(SERVER + '/products');
            response.data.forEach((product) => this.state.products.push(product));
            this.state.products.sort((a, b) => {
                return a.id - b.id;
            })
        } catch (error) {
            this.addMessaje("Error en la carga de los productos: " + error)
        }
    },
    async getCategories() {
        try {
            const response = await axios.get(SERVER + '/categories')
            response.data.forEach((category) => this.state.categories.push(category));
        } catch (error) {
            this.addMessaje("Error en la carga de los categories: " + error)
        }
    },
    async addProduct(element) {
        try {
            const response = await axios.post(SERVER + '/products', {
                name: element.nombre,
                category: element.category,
                price: element.precio,
                units: element.unidades || 0
            })
            this.state.products.push(response.data)
        } catch (error) {
            this.addMessaje("Error al añadir el producto: " + error)
        }
    },
    async deleteProduct(element) {
        try {
            await axios.delete(SERVER + '/products/' + element.id)
            const index = this.state.products.findIndex((item) => item.id == element.id);
            this.state.products.splice(index, 1)
        } catch (error) {
            this.addMessaje("Error al eliminar el producto: " + error)
        }
    },
    async addUnits(element) {
        try {
            const response = await axios.patch(SERVER + '/products/' + element.id, {
                units: element.units + 1
            })
            element.units = response.data.units;
        } catch (error) {
            this.addMessaje("Error al añadir unidades: " + error)
        }
    },
    async delUnits(element) {
        try {
            let response = await axios.patch(SERVER + '/products/' + element.id, {
                units: element.units - 1
            })
            element.units = response.data.units;
        } catch (error) {
            this.addMessaje("Error al quitar unidades: " + error)
        }
    },
    addMessaje(messaje) {
        this.state.messajes.push(messaje);
        setTimeout(() => {
            this.state.messajes.shift(messaje)
        },3000)
    }
}