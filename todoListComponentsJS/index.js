import DelAll from './components/DelAll.js'
import NewTodo from './components/NewTodo.js';
import  ShowHeader  from './components/ShowHeader.js';
import ShowLi from './components/ShowLi.js';
import ShowList from './components/ShowList.js';


let app = Vue.createApp({
    components: {
        DelAll,
        NewTodo,
        ShowHeader,
        ShowLi,
        ShowList
    }
})


app.mount('#app')