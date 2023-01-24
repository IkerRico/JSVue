<script>
</script>

<template>
    <div id="header" class="container-fluid">
        <div class="row" id="nav">
            <div class="col-2" id="titulo">
                <h1>GesBiblio</h1>
            </div>
            <div class="col-8 ">
                <ul>
                    <li class="btn btn-warning">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="btn btn-warning">
                        <router-link to="/Authors">Authors</router-link>
                    </li>
                    <li class="btn btn-warning">
                        <router-link to="/Books">Books</router-link>
                    </li>
                    <li class="btn btn-warning">
                        <router-link to="/AddBook">Add books</router-link>
                    </li>
                    <li class="btn btn-warning">
                        <router-link to="#">About us</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
#titulo {
    padding-left: 20px;
    padding-top: 10px;
    color: white;
}

#header {
    background-color: lightslategray;
}
li{
    margin-top: 10px;
    margin-left: 10px;
}

li > *{
    color: black;
    text-decoration: none;
}
</style>