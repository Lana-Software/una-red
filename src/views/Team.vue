<template>
  <div class="team">
    <person_card image="https://avatars.githubusercontent.com/u/110570465?v=4" title="Juan Pablo Morales Cruz" username="Kolozuz" link="https://github.com/Kolozuz" />
    <person_card image="https://avatars.githubusercontent.com/u/108627976?v=4" title="Duvan Espinal Arboleda" username="DuvanArwenLazar" link="https://github.com/DuvanArwenLazar" />
    <person_card image="https://avatars.githubusercontent.com/u/104475729?v=4" title="John Steban Lopez" username="JohnGolgota" link="https://github.com/JohnGolgota" />
  </div>
</template>

<script setup>
import person_card from "@src/components/component_person_card.vue";
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