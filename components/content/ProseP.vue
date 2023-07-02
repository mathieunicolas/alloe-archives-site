<script setup lang="ts">

const fontsize = useFontSize()

</script>

<template>
  <p :style="{ fontSize: fontsize+'rem'}">
    <slot />
  </p>
</template>


<style lang="ts" scoped>
css({
  p: {
    fontFamily: '{typography.font.body}',
    lineHeight: '{prose.p.lineHeight}',
    margin: '{prose.p.margin}',
    ':deep(br)': {
      display: "block",
      content: "''",
      margin: '{prose.p.br.margin}'
    }
  }
})
</style>
