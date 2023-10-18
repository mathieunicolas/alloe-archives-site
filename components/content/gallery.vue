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
  <img v-for="img of covers" :key="img.src" v-show="false" :src="'https://raw.githubusercontent.com/mathieunicolas/alloe-archives/main/'+img.cover" />
  <figure>
  <NuxtLink :to="covers[inc].src">
  <Transition name="fade" mode="out-in">
    <img :key="inc" :src="'https://raw.githubusercontent.com/mathieunicolas/alloe-archives/main/'+covers[inc].cover">
  </Transition>
  </NuxtLink>
    <figcaption style="text-align: center;">{{ covers[inc].title }}</figcaption>
  </figure>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.4;
}

</style>
