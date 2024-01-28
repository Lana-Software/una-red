<template>
  <div class="button" id="button" @click="showMenu">
    <p>+</p>
  </div>
  <div class="menu" :class="{ 'menu-hidden': menuHidden, 'menu-hide': menuHide }" id="menu">
    <div class="items">
      <router-link to="/info">
        <p class="menu-item whatsapp-link"> Grupos de WhatsApp </p>
      </router-link>
      <router-link to="/">
        <p class="menu-item"> Colaboradores </p>
      </router-link>
      <router-link to="/">
        <p class="menu-item"> Trabaja con nosotros </p>
      </router-link>
      <button class="button-close" id="button-close" @click="hideMenu"> Cerrar menú </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menuHidden = ref(true);
const menuHide = ref(false);

const showMenu = () => {
  menuHidden.value = false;
  menuHide.value = false;
};

const hideMenu = () => {
  menuHide.value = true;
  setTimeout(() => {
    menuHidden.value = true;
  }, 680);
};

</script>

<style scoped>
.button {
  width: 36px;
  height: 36px;
  position: absolute;
  float: left;
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-surface);
  margin: -7px 0 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
}

.menu {
  width: 30%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: var(--md-sys-color-primary);
  text-align: center;

  animation: fadeInLeftBig;
  animation-duration: .7s;
}

.items {
  margin-top: 28px;
}

.menu-item {
  color: var(--md-sys-color-surface);
}

.menu-hide {
  animation: fadeOutLeft;
  animation-duration: .7s;
}

.menu-hidden {
  display: none;
}

.button-close {
  background-color: var(--md-sys-color-surface);
  border: none;
  padding: 5px 12px;
  border-radius: 24px;
  cursor: pointer;
}
</style>