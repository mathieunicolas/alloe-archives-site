<script setup>
const fontSize = useFontSize()
const { layout } = useContent()
const step = 0.25
</script>

<template>
  <div v-if="layout === 'default'">
    <Icon class="icons" name="material-symbols:text-increase" @click="fontSize = fontSize + step" />
    <Icon class="icons" name="material-symbols:text-decrease" @click="fontSize = fontSize - step" />
  </div>
</template>

<style scoped>
.icons {
  cursor: pointer;
  margin-left: 0.5rem;
}

.wrapper {
  position: sticky;
  top: 250px;
}
</style>