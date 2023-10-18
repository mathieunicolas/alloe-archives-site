<script setup>
const covers = [
  { cover: 'alloe18/3arR5cP.jpg', title: 'édition 2018', src: '/alloe18' },
  { cover: 'alloe19/JzU6Iyo.jpg', title: 'édition 2019', src: '/alloe19' },
  { cover: 'alloe20/Zx13oLOe.png', title: 'édition 2020', src: '/alloe20' },
  { cover: 'alloe21/468zwUH1.png', title: 'édition 2021', src: '/alloe21' },
  { cover: 'alloe22/oX3Ru33f.jpg', title: 'édition 2022', src: '/alloe22' },
]

const inc = ref(0)
setInterval(() => {
  inc.value += 1
  if(inc.value >= 5) inc.value = 0
}, 5000);
</script>

<template>
  <Transition name="fade" mode="out-in">
  <figure>
  <NuxtLink :to="covers[inc].src">
    <img :key="inc" :src="'https://raw.githubusercontent.com/mathieunicolas/alloe/main/'+covers[inc].cover">
  </NuxtLink>
    <figcaption style="text-align: center;">{{ covers[inc].title }}</figcaption>
  </figure>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>