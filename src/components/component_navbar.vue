<<<<<<< HEAD
<template class="content navbar">
  <div v-if="show==true" class="nav">
=======
<template class="content">
  <div class="nav">
>>>>>>> 8729e7a8705c03b68739c9c6b25e6a6e440edf8d
    <router-link to="/"><span class="item"> Inicio </span></router-link>
    <router-link to="/"><span class="item"> Asignaturas </span></router-link>
    <router-link to="/"><span class="item"> Docentes </span></router-link>
    <router-link to="/"><span class="item"> UNAL emprende </span></router-link>
    <router-link to="/lanateam"><span class="item"> Lana Team </span></router-link>
  </div>
  <div v-else class="nav">
    <router-link to="/"><span class="item"> Inicio </span></router-link>
    <router-link to="/"><span class="item"> Grupos de WhatsApp </span></router-link>
    <router-link to="/"><span class="item"> Colaboradores </span></router-link>
    <router-link to="/"><span class="item"> Trabaja con nosotros  </span></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  watch: {
    '$route'(to, from) {
      const path = to.path;
      if(path == '/'){ // Add other paths.
        this.show = true;
        console.log("Entre a true")
      } else {
        this.show = false;
        console.log("Entre a false")
      }
    }
  }
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
