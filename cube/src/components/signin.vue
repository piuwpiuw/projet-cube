<!--  -->

<template>


<div class="container pt-5 col-lg-10 rounded-circle " id="bonjour">
  <h1>Sign In</h1>
         
   
     <input type="email" name="Username" placeholder="Email" v-model="email" class="form-control text-center" id="inputEmail">

     
     <input type="password" name="Password" placeholder="Password" v-model="password" class="form-control text-center" id="inputPassword"></br>

             
         <button v-on:click="rechearchToDb" id="signin">Submit</button></br>
         <ul>
      <li>
        <router-link to="/signup">Signup</router-link>
      </li>
      <li>
        <router-link to="/liste">User list</router-link>
      </li>
         </ul>
         
   </div>
</template>

<script>
import axios from "axios";

export default {
  name: "signin",
  data() {
    return {
      msg: "Welcome to our app Vuejs",
      email: "",
      password: ""
    };
  },
  methods: {
    rechearchToDb: function() {
      axios
        .post("http://localhost:7070/user/signin", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res.data.token);
          let token = res.data.token;
          localStorage.setItem('token', token);
        });
    }
  }
};
</script>