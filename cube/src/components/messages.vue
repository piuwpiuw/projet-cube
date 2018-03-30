<template>
 <div class="menu" id="ex2">
    <ul id="nav">
      <li><router-link to="/liste">Home</router-link></li>
      <li><router-link to="/turlututu">turlututu</router-link></li>
      <li><router-link to="/users">Users</router-link></li>
      <li><router-link to="/messages">Messages</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
    </ul>
    <br/>
		<textarea rows="4" cols="50" placeholder="Entrer votre message">
		</textarea>

		<button> Envoyer </button>

<p class="msg"> {{ messages }}</p>

	</div> 
<!-- <div>
	<ul v-for="user in users" :key="user._id" style="text-align: left">
		<li>{{ user.email }}</li>
	</ul>
</div>

 -->

</template>

<script>

export default {
	name: "messages",
	data (){
		return {
			msg:"Hello messages"
		}
	}
}

</script>