<template>

<div>
<div class="menu" id="ex2">
    <ul id="nav">
      <li><<router-link to="/liste">Home</router-link></li>
      <li><router-link to="/turlututu">turlututu</router-link></li>
      <li><router-link to="/users">Users</router-link></li>
      <li><router-link to="/messages">Messages</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
    </ul>
</div>
	<ul v-for="user in users" :key="user._id" style="text-align: left">
		<li>{{ user.email }}</li>
	</ul>
</div>

</template>