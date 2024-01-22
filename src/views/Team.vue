<template>
  <div class="team">
    <div class="container">
      <img src="@src/assets/110570465.jpeg" alt="" class="image-profile">
      <info v-bind:title="Juan" v-bind:text="si" v-bind:type="si"/>
    </div>
    <div class="container">
      <img src="@src/assets/1.jpg" alt="" class="image-profile">
      <info :title="dsa" :text="dsad" :type="dsadsa"/>
    </div>
    <div class="container">
      <img src="@src/assets/104475729.png" alt="" class="image-profile">
      <info :title="dsadsa" :text="dsadsa" :type="dsadasd"/>
    </div>
  </div>
</template>

<script setup>
import info from '@src/components/component_info.vue';
</script>

<style scoped>
.team {
  margin-top: 35px;
  display: flex;
  gap: 35px;
  align-items: center;
  justify-content: center;
}
.container {
  width: 20%;
  height: auto;
  overflow: hidden;
}
.image-profile {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 50%;
}
</style>