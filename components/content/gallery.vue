<script setup>
const covers = [
  'alloe18/3arR5cP.jpg',
  'alloe19/JzU6Iyo.jpg',
  'alloe20/Zx13oLOe.png',
  'alloe21/468zwUH1.png',
  'alloe22/oX3Ru33f.jpg',
]

const inc = ref(0)
setInterval(() => {
  inc.value += 1
  if(inc.value >= 5) inc.value = 0
}, 5000);
</script>

<template>
  <Transition name="fade" mode="out-in">
    <img :key="inc" :src="'https://raw.githubusercontent.com/mathieunicolas/alloe/main/'+covers[inc]">
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