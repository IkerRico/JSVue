import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

const SERVER = import.meta.env.VITE_SERVERURL;

export const biblioStore = defineStore('biblioStore', {
  state() {
    return {
      themes: [],
      authors: [],
    }
  },
  actions: {
    async loadData() {
      try{
      const responseThemes = await axios.get(SERVER + '/temas');
      const responseAuthors = await axios.get(SERVER + '/autores');
      this.themes = responseThemes.data;
      this.authors = responseAuthors.data;
      }catch(err){
        alert('Error al cargar los datos')
      }
    },
    async saveBook(element) {
      if (!element.id) {
        try {
          const response = await axios.post(SERVER + '/libros', element);
        } catch (err) {
          alert('Error al añadir el libro');
        }
      } else {
        try {
          await axios.patch(SERVER + '/libros/' + element.id, element);
        } catch (error) {
          alert('Error al editar el libro')
        }
      }
    },
    async deleteBook(element) {
      try {
        await axios.delete(SERVER + '/libros/' + element.id);
      } catch (err) {
        alert(err);
      }
    },
    async getBookById(id) {
      try {
        const response = await axios.get(SERVER + '/libros/' + id);
        return response.data
      } catch (err) {
        alert(err);
      }
    },
    async getBooks() {
      try {
        const response = await axios.get(SERVER + '/libros');
        return response.data
      } catch (err) {
        alert(err);
      }
    },
  },
  getters: {
    totalAuthors: (state) => state.authors.length,
    getAuthorById: (state) => (id) => state.authors.find((author) => author.id == id) || {},
    getTopicById: (state) => (id) => state.themes.find((topic) => topic.id == id) || {},
  },
})
