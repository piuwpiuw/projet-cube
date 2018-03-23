<template>

<div>
	<ul v-for="user in users" :key="user._id">
		<li>{{ user.email }}</li>
	</ul>
</div>

</template>

<script>

import axios from 'axios';
import token from './signin.vue';

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
      axios.get("http://localhost:7070/user/liste", {headers: token }).then(res => {
		this.users = res.data;
		console.log(this.users);
      });
    }
  }
};
</script>