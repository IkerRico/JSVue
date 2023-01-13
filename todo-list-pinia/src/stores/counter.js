import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { mapState, mapActions } from 'pinia';
import axios from 'axios';
const SERVER = 'http://localhost:3000';

export const store = defineStore('store', {
  state() {
    return {
      todos: [],
    }
  },
  actions: {
    async addTodo(newTitle) {
      try {
        const response = await axios.post(SERVER + '/todos', {
          title: newTitle,
          done: false
        });
        this.todos.push(response.data)
      } catch (err) {
        throw "Error al añadir el elemento"
      }
    },
    async delTodo(id) {
      try {
        await axios.delete(SERVER + '/todos/' + id)
        let index = this.todos.findIndex(element => element.id === id)
        this.todos.splice(index, 1)
      } catch (err) {
        alert('Error al eliminar el elemento con id ' + id);
      }
    },
    delTodos() {
      try {
        if (confirm('Quieres eliminar todos?')) {
          this.todos.forEach((todo) => this.delTodo(todo.id));
        }
      } catch (err) {
        alert(err);
      }
    },
    async loadTodos() {
      try {
        const response = await axios.get(SERVER + '/todos');
        this.todos = response.data;
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
    }
  }
})
