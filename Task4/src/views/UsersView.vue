<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/UserStore";
import { storeToRefs } from "pinia";
import Users from "@/components/Users.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
const userStore = useUserStore();

const { users } = storeToRefs(userStore);
onMounted(() => {
  userStore.getUsers();
});
</script>

<template>
  <DefaultLayout>
    <template #body>
      <template v-if="users">
        <Users :users="users" />
      </template>
      <div v-else-if="!users">Что-то пошло не так(</div>
    </template>
  </DefaultLayout>
</template>
