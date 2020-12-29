<template>
  <div class="container">
    <h1 class="text-center mt-5">Login</h1>
    <form class="m-5" @submit.prevent="agregarUsuario">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="usuario">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="contrasena">
  </div>
  <button type="submit" class="btn btn-primary" @click="verificandoEmail">Submit</button>
</form>
<div>
  <h1>Email: user@user.com</h1>
  <h2>Password: 123456</h2>
</div>
    
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters } from "vuex";

  export default {
    name: 'Login',
    data(){
      return {
        usuario: '',
        contrasena: '',
      }
    },
    methods: {
        agregarUsuario(){
          if (this.usuario && this.contrasena){
            firebase.auth().signInWithEmailAndPassword(this.usuario, this.contrasena)
            .then((result) => {
              console.log(result.user.uid);
              console.log(result.user.email);
              console.log(result.user);
              console.log("login");
              this.$router.push({name: 'Home'});
            })
            .catch((error) => {
              console.error(error.code);
              console.error(error.message);
              alert('Usuario o contraseña incorrecto')
            });
          } else {
            console.log("no se puede");
          }
        },
        verificandoEmail(){
          if (!this.enviarUsuario.emailVerified) {
          this.enviarUsuario.sendEmailVerification().then(() => {
            console.log("Correo enviado");
          }).catch((error) => {
            console.error(error)
          }); 
          } else {
            console.log("El Correo ya esta verificado");
          }
        }
    },
    computed: {
    ...mapGetters(['enviarUsuario']),
  }, 
  }
</script>

<style lang='scss'>

</style>