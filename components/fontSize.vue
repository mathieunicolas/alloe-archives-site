<script setup>
const fontSize = useFontSize()
const { layout } = useContent()
</script>

<template>
  <div v-if="layout === 'default'">
    <Icon class="icons" name="material-symbols:text-increase" @click="fontSize = fontSize + 0.5" />
    <Icon class="icons" name="material-symbols:text-decrease" @click="fontSize = fontSize - 0.5" />
  </div>
</template>

<style scoped>
.icons {
  cursor: pointer;
  margin-left: 0.5rem;
}

.wrapper {
  position: sticky;
  top: 50px;
}
</style>