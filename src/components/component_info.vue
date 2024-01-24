<template>
	<div class="content">
		<div class="title">
			<h4> {{ title }} </h4>
		</div>
		<div class="text">
			<p> {{ text }} </p>
		</div>
		<div class="type">
			<p> {{ type }} </p>
		</div>
	</div>
</template>
  
<script>
export default {
	props: {
		title: String,
		text: String,
		type: String
	}
};
</script>
  
<style scoped></style>