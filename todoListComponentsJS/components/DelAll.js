export default{
    template: `<button @click="delTodos"> Eliminar todos </button>`,
    methods: {
        delTodos() {
            if (confirm('Quieres eliminar todos?')) {
                this.todos = []
            }
        }
    }
}