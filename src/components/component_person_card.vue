<template>
  <mdui-card :href="link" target="_blank" variant="elevated" clickable style="width: 200px;height: 300px" class="container">
    <img :src="image" draggable="false" class="card-image"/>
    <div class="card-info">
      <div class="title">
        <strong> {{ title }} </strong>
      </div>
      <div class="text">
        <span> @{{ username }} </span>
      </div>
    </div>
  </mdui-card>
</template>

<script setup>
const props = defineProps({
	image: String,
	title: String,
	username: String,
	link: String,
});
</script>

<style scoped>

.container {
  background-color: rgb(var(--mdui-color-surface)); /* default bg color is overridden cause it doesn't match the page's background very well */
  padding: 1rem;
}

.card-image {
  border-radius: 1000rem;
  object-fit: cover;
  width: 100%; /* Ends up having ~64% height */
}

.card-info {
  display: flex;
  flex-direction: column;
  gap: .5em;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 36%;
}

</style>