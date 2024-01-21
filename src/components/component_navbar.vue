<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template class="content">
  <div class="nav">
    <md-tabs>
      <md-primary-tab>
        <router-link to="/">
          <span> Inicio </span>
        </router-link>
      </md-primary-tab>
      <md-primary-tab>
        <router-link to="/">
          <span> Asignaturas </span>
        </router-link>
      </md-primary-tab>
      <md-primary-tab>
        <router-link to="/">
          <span> Profesores Recomendados </span>
        </router-link>
      </md-primary-tab>
      <md-primary-tab>
        <router-link to="/">
          <span> UNAL Emprende </span>
        </router-link>
      </md-primary-tab>
      <md-primary-tab>
        <router-link to="/lanateam">
          <span> Lana Team </span>
        </router-link>
      </md-primary-tab>
    </md-tabs>
  </div>
</template>

<script setup>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

md-primary-tab {
  font-weight: 500;
}
</style>
