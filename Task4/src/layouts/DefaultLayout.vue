<script setup>
import { RouterLink } from "vue-router";
defineProps({
  title: {
    type: String,
    default: "Все пользователи",
  },
});
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="content-header">
        <RouterLink
          class="content-header__link"
          v-show="$route.path === '/user/'"
          to="/"
          >Назад</RouterLink
        >
        <h2 class="content-header__title">{{ title }}</h2>
      </div>
      <div class="content-body">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  max-width: 1200px;
  box-shadow: var(--shadow);
  border-radius: 24px;
  padding: 2.33em 1.33em;
}

.content-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 1.33em;
  border-bottom: 1px solid var(--gray);
  margin-bottom: 1em;
}

.content-header__link {
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  color: var(--gray-text);

  transition: color 0.2s linear;
}

.content-header__link:hover {
  color: var(--orange-hover);
}

.content-header__title {
  font-size: 1.25rem;
  font-weight: 600;
}

.content-body {
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding-right: 0.2em;
}

@media (max-width: 768px) {
  .content {
    box-shadow: none;
    padding: 0;
  }
}

@media (max-width: 580px) {
  .content-header {
    justify-content: center;
  }
}
</style>
