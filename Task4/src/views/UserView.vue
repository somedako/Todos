<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/UserStore";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import User from "@/components/User.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
const userStore = useUserStore();

const route = useRoute();

const { user } = storeToRefs(userStore);
onMounted(() => {
  userStore.getUser(route.query.id);
});
</script>

<template>
  <DefaultLayout :title="`${route.query.name}`">
    <template #body>
      <template v-if="user">
        <User :user="user" :key="user.id" />
      </template>
      <div v-else-if="!user">Что-то пошло не так(</div>
    </template>
  </DefaultLayout>
</template>

<style scoped></style>
