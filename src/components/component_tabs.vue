<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const getLinks = () => {
	const links_show = [
		{ val: "Inicio", route: "/" },
		{ val: "Asignaturas", route: "/" },
		{ val: "Docentes", route: "/" },
		{ val: "UNAL emprende", route: "/" }
	];
	return links_show;
};
</script>

<template>

  <div class="nav">
    <mdui-tabs value="tab-0" variant="primary" full-width>
      <mdui-tab :value="'tab-'+index" v-for="(link, index) in getLinks()" :key="link.val" @click="$router.push('/')">
        {{ link.val }}
      </mdui-tab>
    </mdui-tabs>
  </div>

</template>


<style scoped>
.nav {
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
}

.nav> mdui-tabs {
  width: 60%;
}

@media screen and (max-width: 900px) {
  .nav {
    display: none;
  }
}
</style>