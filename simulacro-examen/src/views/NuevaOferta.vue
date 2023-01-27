<template>
    <div>
        <h1>{{ titulo }}</h1>
    </div>
    <div class="d-flex justify-content-center">
        <Form :initial-values="this.oferta" :validation-schema="validatorForm" @submit="save" class="my-3">
            <div v-if='this.id' class="form-group">
                <label for="id">Id</label>
                <Field type="{{oculto}}" class="form-control" name="id" disabled />
            </div>
            <div class="form-group">
                <label for="Empresa">Empresa</label>
                <Field as="select" class="form-control" name="empresa">
                    <option value="">--Seleccione una opcion--</option>
                    <option v-for="empresa in empresas" :value="empresa.id">{{ empresa.nombre }}</option>
                </Field>
                <ErrorMessage class="ErrorMessage" name="empresa" />
            </div>
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <Field class="form-control" name="nombre" type="text" />
                <ErrorMessage class="ErrorMessage" name="nombre" />
            </div>
            <div class="form-group">
                <label for="contrato">Contrato</label>
                <Field class="form-control" type="text" name="contrato" />
                <ErrorMessage class="ErrorMessage" name="contrato" />
            </div>
            <div class="form-group">
                <label for="contacto">Contacto</label>
                <Field class="form-control" type="text" name="contacto" />
                <ErrorMessage class="ErrorMessage" name="contacto" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <Field class="form-control" type="text" name="email" />
                <ErrorMessage class="ErrorMessage" name="email" />
            </div>
            <button type="submit" class="btn btn-default btn-dark submit">Añadir</button>
            <button type="reset" class="btn btn-warning ">Reset</button>
            <button class="btn btn-danger" @click="$router.push('/Empresas')">Cancelar</button>
        </Form>
    </div>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import { ofertaStore } from '../stores/counter.js';
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from 'yup';

export default {
    components: {
        Form,
        Field,
        ErrorMessage
    },
    props: {
        id: String,
    },
    data() {
        const validatorForm = yup.object({
            empresa: yup.string()
                .required('Empresa is required'),
            nombre: yup.string()
                .required('Nombre is required')
                .min(10, 'Nombre must have at least 10 characters')
                .max(50, 'Title must have no more than 50 characters'),
            contrato: yup.string()
                .required('contrato is required'),
            contacto: yup.string()
                .required('contacto is required'),
            email: yup.string()
            .required('Email is required')
            .email('Tiene que ser un email'),
        })
        return {
            oferta: {},
            titulo: "",
            oculto: '',
            validatorForm
        }
    },
    computed: {
        ...mapState(ofertaStore, {
            empresas: 'empresas'
        }),
    },
    methods: {
        ...mapActions(ofertaStore, {
            getOfertaById: 'getOfertaById',
            saveOferta: 'saveOferta',
        }),
        async save(values) {
            this.saveOferta(values);
            this.$router.push('/Ofertas/' + values.empresa)
            this.oferta = {};
        },
    },
    async mounted() {
        if (this.id) {
            this.oferta = await this.getOfertaById(this.id)
        }
        this.titulo = this.id ? "Editando Oferta " + this.id : "Añadiendo Oferta";
        this.oculto = this.id ? "text" : "hidden"
    },
    watch: {
        $route(to, from) {
            this.oferta = {}
        }
    }
}

</script>
<style scoped>
.form-group {
    padding-top: 10px;
    margin-bottom: 10px;
    width: 600px;
}

.ErrorMessage {
    color: red;
}
</style>