import ShowLi from "./ShowLi.js";

let id = 0;

export default {
    components: {
        ShowLi
    },
    template: `<ul><show-li v-for="elem in todos" :key="elem.id" v-bind:item="elem" @delTodo="borraItem"></show-li></ul>
        <p v-if="todos.length > 0 ">Total tareas: {{todos.length}}</p>
        <p v-else>No hay tareas que mostrar</p>`,
    data() {
        return {
            todos: [
                {
                    id: id++,
                    title: 'Primera prueba',
                    done: false,
                },
                {
                    id: id++,
                    title: 'Segunda prueba',
                    done: false,
                },
                {
                    id: id++,
                    title: 'Tercera prueba',
                    done: false,
                },
            ]
        }
    },
    methods: {
        borraItem(id) {
            this.todos = this.todos.filter((item) => item.id !== id)
        }
    }
}