<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            messajes: store.state.messajes
        }
    },
}
</script>

<template v-if="messajes.length > 0">
    <div v-for="elem in messajes" class="alert alert-danger alert-dismissible" role="alert">
        <span>{{ elem }}</span>
    </div>
</template>

<style scoped>

</style>