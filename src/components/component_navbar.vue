<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const getLinks = () => {
	const links_show = [
		{ val: "Inicio", route: "/", icon: "home" },
		{ val: "Asignaturas", route: "/", icon: "school" },
		{ val: "Docentes", route: "/", icon: "person_search" },
		{ val: "UNAL Emprende", route: "/", icon: "store" },
	]
	return links_show;
};
</script>

<template>

  <mdui-navigation-bar value="item-0">
    <mdui-navigation-bar-item :icon="link.icon" v-for="(link, index) in getLinks()" :key="link.val" :value="'item-'+index" @click="$router.push('/')">
      {{ link.val }}
    </mdui-navigation-bar-item>
  </mdui-navigation-bar>

</template>

<style>

@media screen and (min-width: 900px) {
  mdui-navigation-bar {
    display: none;
  }
}
</style>