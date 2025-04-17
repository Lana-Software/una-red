<script setup>
import { onMounted } from "vue";
import { setColorScheme } from "mdui/functions/setColorScheme.js";
import float from "@src/components/component_left.vue";
import tabs from "@src/components/component_tabs.vue";
import navbar from "@src/components/component_navbar.vue";

// Use the onMounted lifecycle hook to set the color scheme for the mdui components
onMounted(() => {
	setColorScheme("#86878f");
});
</script>

<template>
  <float />
  <tabs />
  <div class="main-content">
    <router-view></router-view>
  </div>
  <navbar />
</template>

<style>
.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
}
</style>