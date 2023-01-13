<script>
export default {
    props: {
        category: Object,
    },
}
</script>

<template>
    <tr>
        <td>{{ category.id }}</td>
        <td>{{ category.name }}</td>
        <td>{{ category.description }}</td>
    </tr>
</template>

<style scoped>
tr {
    text-align: center;
}

#botones {
    display: flex;
    justify-content: center;
    gap: 3px;
}
</style>