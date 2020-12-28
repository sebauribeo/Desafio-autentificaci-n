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
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    
  </div>
</template>

<script>
import firebase from 'firebase'

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
              console.log("login");
              this.$router.push({name: 'Home'});
            })
            .catch((error) => {
              console.error(error.code);
              console.error(error.message);
            });
          } else {
            console.log("no se puede");
          }
        }
      }
  }
</script>

<style lang='scss'>

</style>