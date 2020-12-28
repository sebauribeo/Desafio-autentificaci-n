<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link me-4" to="/">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link me-4" to="/home">Home</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    <router-view></router-view>

  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'App',
    mounted() {
    // este metodo permite supervisar la conexion de los usuarios (si entran o salen de sesión)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('user',user); // si entra se envia la inforamcion del usuario a la store
      } else {
        console.log("cierre de sesion");
        this.$store.dispatch('user',null); //si sale, se borra la informacion de la store
      }
    });
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  border: 0;
}

</style>
