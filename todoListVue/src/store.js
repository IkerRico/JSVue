import { reactive } from 'vue';

let id = 0;

export const store = {
    state: reactive({
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
        ],
    }),
    addTodo(newTitle) {
        this.state.todos.push( {
            id: id++,
            title: newTitle,
            done: false
        });
    },
    delTodo(id){
        this.state.todos.splice(id,1)
    },
    delTodos() {
        if (confirm('Quieres eliminar todos?')) {
            this.state.todos.splice(0,this.state.todos.length);
        }
    }
}