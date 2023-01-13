<script>

</script>

<template>
    <div id="header" class="row">
        <div id="titulo" class="col-3">
            <h1>Almacen ACME</h1>
        </div>
        <div id="nav" class="col-5">
            <ul>
                <li class="btn btn-warning">
                    <router-link to="/">Products</router-link>
                </li>
                <li class="btn btn-warning">
                    <router-link to="/AddProduct">Add Product</router-link>
                </li>
                <li class="btn btn-warning">
                    <router-link to="/CategoryTable">Categories</router-link>
                </li>
                <li class="btn btn-warning">
                    <router-link to="/AddCategory">Add Category</router-link>
                </li>
                <li class="btn btn-warning">
                    <router-link to="/About">About us</router-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
li {
    list-style: none;
    margin-top: 10px;
}

a, a:hover{
    text-decoration: none;
    color: black;
}

#header {
    display: flex;
    align-items: center;
    background-color: #333;
}

#titulo {
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