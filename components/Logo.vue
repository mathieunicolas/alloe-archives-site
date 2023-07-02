<script setup>
const colorMode = useColorMode()

const imgsrc = computed(() => {
  return colorMode.value === 'light' ? '/logo-light.svg' : '/logo-dark.svg'
})
</script>

<template>
  <img class="logo" :src="imgsrc">
</template>

<style lang="ts" scoped>
css({
  svg: {
    color: '{color.gray.900}',
    height: 'inherit',
    '@dark': {
      color: '{color.gray.100}'
    },
  },
  '.logo': {
    height: '4rem !important',
  },
})
</style>
