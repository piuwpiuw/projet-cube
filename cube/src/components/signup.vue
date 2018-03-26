<template>
<div class="container pt-5 col-lg-10 rounded-circle " id="bonjour">
    <h1>Sign Up</h1>
     <input type="email" name="Username" placeholder="Email" v-model="User.email" class="form-control text-center" id="inputEmail">

     
     <input type="password" name="Password" placeholder="Password" v-model="User.password" class="form-control text-center" id="inputPassword"></br>

             
         <button type="submit" name="Signup" class="btn btn-block" @click="addToDb" id="signup">Submit</button></br> 
         <ul>
       <li>
        <router-link to="/signin">Signin</router-link>
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
  name: "signup",
  data() {
    return {
      msg: "Welcome to our app Vuejs",
      User: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    addToDb() {
      let newUser = {
        email: this.User.email,
        password: this.User.password
      };

      console.log(newUser);
      axios.post("http://localhost:7070/user/signup", newUser).then(res => {
        console.log(res.data.message);
      });
    }
  }
};
</script>