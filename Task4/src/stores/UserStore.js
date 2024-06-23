import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("userStore", () => {
  const users = ref([]);
  const user = ref([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      users.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async (id) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      user.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  return { users, getUsers, user, getUser };
});
