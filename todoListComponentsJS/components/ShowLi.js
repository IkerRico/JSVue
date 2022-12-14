export default {
    template: `<li @dblclick="delTodo">
                    <input type="checkbox" v-model="item.done">
                    <del v-if="item.done">{{item.title}}</del>
                    <span v-else>{{item.title}}</span>
                </li>`,
    props: {
        item: Object,
    },
    methods: {
        delTodo() {
            //this.todos = this.todos.filter((item) => item.id !== id)
            this.$emit('delTodo', this.item.id)
        }
    }
}