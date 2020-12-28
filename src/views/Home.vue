<template>
  <div class="my-5 container">
    <div v-if="enviarUsuario">
      <h1 class="text-center">Bienvenido</h1>
      <div class="card">
        <div class="card-body">
          <p class="card-text">Usuario: {{enviarUsuario.email}}</p>
        </div>
      </div>
    </div>
    <div class="alert alert-danger" role="alert" v-else>No hay usuario en sesión.</div>
    <div>
      <button type="button" class="btn btn-success mt-5" @click="$router.push('/login')">Volver a login</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['enviarUsuario']),
  },

  

}
</script>
