<template class="content">
  <nav class="nav">
    <md-tabs id="navbar-1">
      <md-primary-tab v-for="link in getLinks()" :key="link.val" @click="$router.push('/')">
        <span> {{ link.val }} </span>
      </md-primary-tab>
    </md-tabs>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

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
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav>md-tabs {
  flex: 1 1;
  max-width: 35%;
}

@media (max-width: 1250px) {
  .nav>md-tabs {
    flex: 1 1;
    max-width: 80%;
  }
}
</style>