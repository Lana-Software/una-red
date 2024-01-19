<template>
	<navbar />
</template>

<script>
	import '../public/styles.css';
	import navbar from './components/navbar.vue';

	export default {
		name: 'App',
		components: {
			navbar
		}
	}

</script>

<style>
	#app {
		text-align: center;
  		margin-top: 24px;
	}
</style>
