<script>
import DelAll from './components/DelAll.vue'
import NewTodo from './components/NewTodo.vue';
import ShowHeader from './components/ShowHeader.vue';
import ShowLi from './components/ShowLi.vue';
import ShowList from './components/ShowList.vue';


export default {
  components: {
    DelAll,
    NewTodo,
    ShowHeader,
    ShowLi,
    ShowList
  }
}

</script>

<template>
  <show-header title="Cosas que hay por hacer:"></show-header>
  <show-list></show-list>
  <new-todo></new-todo>
  <del-all></del-all>
</template>