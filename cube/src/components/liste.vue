<template>

<div>
  <div style="text-align: right">
  <router-link to="/signup">Signup</router-link>
  <router-link to="/signin">Signin</router-link>
  </div>
	<ul v-for="user in users" :key="user._id" style="text-align: left">
		<li>{{ user.email }}</li>
	</ul>
</div>

</template>

<script>

import axios from 'axios';

export default {
  name: "liste",
  data() {
    return {
      users: []
    };
  },

  created: function() {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      var token = localStorage.getItem('token');
      axios.get("http://localhost:7070/user/liste", {headers: {token}}).then(res => {
		this.users = res.data;
		console.log(this.users);
    
      });
    }
  }
};
</script>