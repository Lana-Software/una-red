<template>
	<navbar />
	<h1 class="title"> UNa red. </h1>
	<search />
</template>

<script>
	import '../public/styles.css';
	import navbar from './components/component_navbar.vue';
	import search from './components/component_search.vue';

	export default {
		name: 'App',
		components: {
			navbar,
			search
		}
	}

</script>

<style>
	#app {
		text-align: center;
		margin-top: 24px;
	}

	.title {
		font-size: 48px;
		margin-top: 100px;
	}
</style>
