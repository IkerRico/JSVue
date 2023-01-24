<script>
import { mapState, mapActions } from 'pinia';

export default {
    props: {
        author: Object,
    },
}


</script>

<template>
    <tr>
        <td>{{ author.id }}</td>
        <td>{{ author.nombre }}</td>
        <td>{{ author.apellidos }}</td>
        <td>{{ author.nacionalidad }}</td>
        <td><img :src="'src/assets/img/' + author.img" /></td>
        <td id="botones">
            <button class="btn btn-success" @click="$router.push('/Author/' + author.id)"><i
                    class="bi bi-eye"></i></button>
            <button class="btn btn-info"><i class="bi bi-book"></i></button>
        </td>
    </tr>
</template>

<style scoped>
img {
    height: 100px;
}
</style>
