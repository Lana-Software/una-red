<template>
  <div class="search-bar">
    <mdui-button variant="text" href="#" class="burger-menu">
      <span class="material-symbols-outlined">menu</span>
    </mdui-button>
    <input type="text" class="search" placeholder="Calculo diferencial.">
    <mdui-button variant="text" class="search-icon">
      <div class="material-symbols-outlined">search</div>
    </mdui-button>
  </div>
</template>

<script setup>
</script>

<style scoped>
.search-bar {
  animation: fadeInDown 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: field;
  border-radius: 1000rem;
  overflow: hidden;
  width: 60%;
}

.search-bar>.burger-menu,
.search-bar>.search-icon {
  width: 3rem;
}

.burger-menu {
  border-radius: 1000rem 0 0 1000rem;
}

.search-bar>.search-icon {
  border-radius: 0px 1000rem 1000rem 0px;
}

.search-bar>input {
  flex: 1 1;
  min-width: 100px;
  outline: none;
  border: none;
  padding: 0 10px;
  font-size: 1em;
}

@media screen and (max-width: 500px) {
  .search-bar {
    width: 100%;
  }
}
</style>