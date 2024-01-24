<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template class="content">
  <div class="nav">
    <router-link to="/"><span class="item"> Inicio </span></router-link>
    <router-link to="/"><span class="item"> Asignaturas </span></router-link>
    <router-link to="/"><span class="item"> Profesores recomendados </span></router-link>
    <router-link to="/"><span class="item"> UNAL Emprende </span></router-link>
    <router-link to="/lanateam"><span class="item"> Lana Team </span></router-link>
  </div>
</template>

<script>
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
