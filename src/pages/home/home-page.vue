<script setup>
import { ref } from "vue";
import { useAuthorisationApi } from "../../api/anilistAPI";
import { shell } from "@tauri-apps/api";
import { Store } from "tauri-plugin-store-api";

const authCode = ref("");
const retData = ref({});
const { getAuthorisationToken } = useAuthorisationApi(authCode);
const login = async () => {
  const resData = await getAuthorisationToken();
  console.log(resData);
  retData.value = resData;
};
const getAccessCode = async () => {
  await shell.open(
    "https://anilist.co/api/v2/oauth/authorize?client_id=6611&response_type=token"
  );
};
</script>

<template>
  <div>
    <router-link
      class="py-3 px-6 text-white rounded-lg bg-purple-600 shadow-lg block md:inline-block"
      to="/about-us"
    >
      Go To About Us
    </router-link>
    <div class="p-4 bg-nav-background w-1/2 mx-auto">
      <button
        @click="getAccessCode"
        class="py-3 px-6 text-white rounded-lg bg-purple-600 shadow-lg block m-4"
      >
        Login with AniList
      </button>
      <input type="text" v-model="authCode" />
      <button
        class="py-3 px-6 text-white rounded-lg bg-purple-600 shadow-lg block m-4"
        @click="login"
      >
        Submit
      </button>
      <p class="text-white">returned data: {{ retData }}</p>
    </div>
  </div>
</template>
