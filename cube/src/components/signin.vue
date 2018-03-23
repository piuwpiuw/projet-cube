<!--  -->

<template>


<div class="container pt-5 col-lg-10 rounded-circle " id="bonjour">
         
   
     <input type="text" name="Username" placeholder="Username" v-model="email" class="form-control text-center" id="inputEmail">

     
     <input type="text" name="Password" placeholder="Password" v-model="password" class="form-control text-center" id="inputPassword"></br>

             
         <button v-on:click="rechearchToDb" id="signin">Submit</button></br>
         
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
        });
    }
  }
};

export {token};
</script>