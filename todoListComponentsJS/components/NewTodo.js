import { store } from '../store/'

export default {
    template: `<input type="text" v-model="newTitle"> <button @click="addTodo">Añadir</button><br><br>`,
    methods: {
        addTodo() {
            store.addTodo();
        },
    }
}