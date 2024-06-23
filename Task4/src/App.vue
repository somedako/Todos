<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: max-content;
  margin: 0 auto;
}
</style>
