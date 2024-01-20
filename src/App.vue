<template>
	<navbar />
	<router-view></router-view>
</template>
<script>
	import navbar from '@src/components/component_navbar.vue';

	export default {
		name: 'App',
		components: {
			navbar,
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
