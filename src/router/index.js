import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase';


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/',
    name: 'Login',
    alias: ['/login'],
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '*',
    redirect: ['/']
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  let usuario = firebase.auth().currentUser; 
  let login = to.matched.some(result => result.meta.requiresAuth); 

  if (!usuario && login) {
    next({name: 'Login'}); 
  } else if(usuario && !login) {
    next();
  } else {
    next();
  }
});

export default router
