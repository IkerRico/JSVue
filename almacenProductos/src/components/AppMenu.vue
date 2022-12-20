<script>

</script>

<template>
    <div id="header" class="row">
        <div id="titulo" class="col-3">
            <h1>Almacen ACME</h1>
        </div>
        <div id="nav" class="col-4">
            <ul>
                <li class="btn btn-warning">Ver Productos</li>
                <li class="btn btn-warning">Nuevo Producto</li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
li {
    list-style: none;
    margin-top: 10px;
}

#header {
    display: flex;
    align-items: center;
    background-color: #333;
}

#titulo{
    display: flex;
    justify-content: center;
}

#header h1 {
    color: white;
}

#nav ul {
    display: flex;
    gap: 10px;
}
</style>