<script>
import { store } from "../store.js"


export default {
    props: {
        item: Object,
    },
}
</script>
<template>
    <li>
        <input type="checkbox" v-model="item.done">
        <del v-if="item.done">{{ item.title }}</del>
        <span v-else>{{ item.title }}</span>
    </li>
</template>