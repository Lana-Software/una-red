<template>
  <div class="team">
    <person_card v-for="dev in devs_info" :key="dev.id" :image="dev.image" :title="dev.name" :username="dev.username" :link="dev.link" />
  </div>
</template>

<script setup>
import person_card from "@src/components/component_person_card.vue";

const devs_info = [
  {
    id: 0,
    image: "https://avatars.githubusercontent.com/u/110570465?v=4",
    name: "Juan Pablo Morales Cruz",
    username: "Kolozuz",
    link: "https://github.com/Kolozuz"
  },
  {
    id: 1,
    image: "https://avatars.githubusercontent.com/u/108627976?v=4",
    name: "Duvan Espinal Arboleda",
    username: "DuvanArwenLazar",
    link: "https://github.com/DuvanArwenLazar",
  },
  {
    id: 2,
    image: "https://avatars.githubusercontent.com/u/104475729?v=4",
    name: "John Steban Lopez",
    username: "JohnGolgota",
    link: "https://github.com/JohnGolgota"
  }
]
;
</script>

<style scoped>
.team {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  animation: fadeInDown 1s;
}

</style>