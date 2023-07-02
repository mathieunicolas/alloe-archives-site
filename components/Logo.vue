<template>
  <img class="logo" src="/logo-light.svg">
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
