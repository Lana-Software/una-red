<template>
  <float />
  <navbar />
  <div class="content-main">
    <router-view></router-view>
  </div>
</template>
<script setup>
import navbar from '@src/components/component_navbar.vue';
import float from '@src/components/component_left.vue';
</script>
<style>
.content-main {
  text-align: center;
}
</style>
