<template>
	<div id="app">
		<nav>
			<router-link to="/">Home</router-link>
			<router-link to="/bibliadeestudo">Bíblia de Estudo</router-link>
			<router-link to="/about">Sobre</router-link>
			<router-link to="/contact">Contato</router-link>
			<router-link to="/jspdfjs">JSPdf</router-link>
			<router-view></router-view>
		</nav>
	</div>
</template>

<script>

export default {
	name: 'app',
	data() {
		return {
			msg: ''
		}
	}
}

</script>

<style>

</style>
