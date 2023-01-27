<template>
    <div id="header" class="container-fluid">
        <div class="row" id="nav">
            <div class="col-2" id="titulo">
                <h1>Simulacro</h1>
            </div>
            <div class="col-8 ">
                <ul>
                    <li class="btn btn-info">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="btn btn-info">
                        <router-link to="/Empresas">Empresas</router-link>
                    </li>
                    <li class="btn btn-info">
                        <router-link to="/NuevaOferta">Nueva Oferta</router-link>
                    </li>
                    <li class="btn btn-info">
                        <router-link to="/AcercaDe">Acerca de</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
#titulo {
    padding-left: 20px;
    padding-top: 10px;
    color: white;
}

#header {
    background-color: rgb(27, 27, 27);
    ;
}

li {
    margin-top: 10px;
    margin-left: 10px;
}

li>* {
    color: black;
    text-decoration: none;
}
</style>