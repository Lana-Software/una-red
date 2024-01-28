<template class="content">
  <div v-if="show" class="nav">
    <router-link v-for="link in getLinks()" :key="link.val" :to="link.route">
      <span class="item" @click="goTo(link.route)">
        {{ link.val }}
      </span>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const show = ref(true);

const getLinks = () => {
  const links_show = [
    { val: 'Inicio', route: '/' },
    { val: 'Asignaturas', route: '/' },
    { val: 'Docentes', route: '/' },
    { val: 'UNAL emprende', route: '/' },
    { val: 'Lana Team', route: '/lanateam' },
  ]
  const links_hide = [
    { val: 'Inicio', route: '/' },
    { val: 'Grupos de WhatsApp', route: '/' },
    { val: 'Colaboradores', route: '/' },
    { val: 'Trabaja con nosotros', route: '/' },
  ]
  if (router.currentRoute.value.path === '/lanateam' || router.currentRoute.value.path === '/') {
    return links_show
  } else {
    return links_hide
  }
}
const goTo = (route) => {
  router.push(route);
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  margin: 30px 0 0 0;
}

.item {
  cursor: pointer;
  padding: 14px 15px;
}

.item:hover {
  background-color: #dddddd;
  border-bottom: 2px solid var(--md-sys-color-primary);
}
</style>
