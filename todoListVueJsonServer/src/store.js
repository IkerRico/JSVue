import { reactive } from 'vue';
import axios from 'axios';

const SERVER = 'http://localhost:3000';

export const store = {
    state: reactive({
        todos: [],
    }),
    async addTodo(newTitle) {
        const response = await axios.post(SERVER + '/todos', {
            title: newTitle,
            done: false
        });
        this.state.todos.push(response.data)
    },
    async delTodo(index) {
        let id = this.state.todos[index].id
        await axios.delete(SERVER + '/todos/' + id)
        this.state.todos.splice(index, 1)
    },
    delTodos() {
        if (confirm('Quieres eliminar todos?')) {
            this.state.todos.forEach((todo, index) => this.delTodo(index));
        }
    },
    async loadTodos() {
        try {
            const response = await axios.get(SERVER + '/todos');
            response.data.forEach((todo) => this.state.todos.push(todo));
        } catch (error) {
            alert(error)
        }
    },
    async toggleDone(todo) {
        try {
            await axios.put(SERVER + '/todos/' + todo.id, {
                title: todo.title,
                done: !todo.done
            })
        } catch (error) {
            alert(error)
        }
    },
}