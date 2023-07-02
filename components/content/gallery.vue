<script setup>
const covers = [
  'alloe18/3arR5cP.jpg',
  'alloe19/JzU6Iyo.jpg',
  'alloe20/Zx13oLOe.png',
  'alloe21/468zwUH1.png',
  'alloe22/oX3Ru33f.jpg',
]
</script>

<template>
  <div>
    <img v-for="cover in [covers[0]]" :key="cover" :src="'https://raw.githubusercontent.com/mathieunicolas/alloe/main/'+cover">
  </div>
</template>