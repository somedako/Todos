<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
  users: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="users" v-for="user in users" :key="user.id">
    <div class="users-left">
      <p class="users-text gray">
        Полное имя:
        <span
          @click="
            router.push({
              name: 'UserView',
              query: { name: user.name, id: user.id },
            })
          "
          class="users-text black name"
          >{{ user.name }}</span
        >
      </p>
    </div>

    <div class="users-right">
      <div>
        <p class="users-text gray">
          Псевдоним:
          <span class="users-text black">{{ user.username }}</span>
        </p>

        <a class="users-text gray" :href="`mailto:${user.email}`">
          E-mail:
          <span class="users-text black mail">{{ user.email }}</span>
        </a>
      </div>

      <div>
        <a class="users-text gray" :href="`tel:+${user.phone}`">
          Телефон:
          <span class="users-text black tel">{{ user.phone }}</span></a
        >
        <p class="users-text gray">
          Адрес:
          <span class="users-text black"
            >{{ user.address.street }} {{ user.address.suite }}
            {{ user.address.city }}</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.users {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  padding-top: 0.6em;
  padding-bottom: 1.2em;
  border-bottom: 1px solid var(--gray);
}

.users-left {
  width: 30%;
}

.users-right {
  display: flex;
  gap: 6px;
  width: 70%;
}

.users-right > div {
  display: grid;
  gap: 10px;
}

.users-right > div:first-child {
  width: 265px;
}
.users-text {
  display: flex;
  gap: 5px;
}

.users-text.black {
  color: var(--text-black);
}

.users-text.gray {
  color: var(--gray);
}

.users-text.black {
  color: var(--text-black);
}

.users-text.black.name {
  cursor: pointer;
  transition: color 0.2slinear;
}

.users-text.black.name:hover {
  color: var(--orange-hover);
}

.users-text > .mail,
.users-text > .tel {
  transition: color 0.2s linear;
}

.users-text > .mail:hover,
.users-text > .tel:hover {
  color: var(--orange-hover);
}

@media (max-width: 968px) {
  .users-right {
    flex-direction: column;
    width: 45%;
  }
}

@media (max-width: 768px) {
  .users {
    flex-direction: column;
    gap: 10px;
  }

  .users-left {
    width: 100%;
  }
  .users-right {
    width: 100%;
  }
}
</style>
