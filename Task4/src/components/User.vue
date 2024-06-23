<script setup>
defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="user">
    <div class="user-right">
      <div>
        <p class="user-text gray">
          Псевдоним:
          <span class="user-text black">{{ user.username }}</span>
        </p>

        <a class="user-text gray" :href="`mailto:${user.email}`">
          E-mail:
          <span class="user-text black mail">{{ user.email }}</span>
        </a>
      </div>

      <div>
        <a class="user-text gray" :href="`tel:+${user.phone}`">
          Телефон:
          <span class="user-text black tel">{{ user.phone }}</span></a
        >
        <p class="user-text gray">
          Адрес:
          <span class="user-text black"
            >{{ user?.address?.street }} {{ user?.address?.suite }}
            {{ user?.address?.city }}</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  padding-top: 0.6em;
  padding-bottom: 1.2em;
  border-bottom: 1px solid var(--gray);
}

.user-right {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.user-right > div {
  display: grid;
  gap: 10px;
}

.user-right > div:first-child {
  width: 265px;
}
.user-text {
  display: flex;
  gap: 5px;
}

.user-text.black {
  color: var(--text-black);
}

.user-text.gray {
  color: var(--gray);
}

.user-text.black {
  color: var(--text-black);
}

.user-text.black.name {
  cursor: pointer;
  transition: color 0.2slinear;
}

.user-text.black.name:hover {
  color: var(--orange-hover);
}

.user-text > .mail,
.user-text > .tel {
  transition: color 0.2s linear;
}

.user-text > .mail:hover,
.user-text > .tel:hover {
  color: var(--orange-hover);
}

@media (max-width: 768px) {
  .user {
    flex-direction: column;
    gap: 20px;
  }

  .user-right {
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>
