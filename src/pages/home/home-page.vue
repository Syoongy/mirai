<script setup>
import { ref } from "vue";
import { useAuthorisationApi } from "../../api/anilistAPI";
import { shell } from "@tauri-apps/api";
import { invoke } from "@tauri-apps/api/tauri";

const authCode = ref("");
const retData = ref({});
const mediaListData = ref({});
const intervalTracker = ref({});
const { getAuthorisationToken, getMediaList } = useAuthorisationApi(authCode);

const login = async () => {
  const { err, val } = await getAuthorisationToken();
  if (!err) {
    localStorage.setItem("jwtKey", authCode.value);
    localStorage.setItem("viewer-id", val.data.Viewer.id);
    localStorage.setItem("viewer-name", val.data.Viewer.name);
    localStorage.setItem(
      "viewer-score-format",
      val.data.Viewer.mediaListOptions.scoreFormat
    );
    retData.value = localStorage.getItem("viewer-name");
  }
};

const getAccessCode = async () => {
  await shell.open(
    "https://anilist.co/api/v2/oauth/authorize?client_id=6611&response_type=token"
  );
};

const getAnimeList = async () => {
  const { err, val } = await getMediaList();
  if (!err) {
    mediaListData.value = val;
  }
};

const startEnumerateWindows = async () => {
  intervalTracker.value = setInterval(async () => {
    await invoke("enumerate_windows");
  }, 2000);
};

const endEnumerateWindows = () => {
  clearInterval(intervalTracker.value);
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
      <button
        class="py-3 px-6 text-white rounded-lg bg-purple-600 shadow-lg block m-4"
        @click="getAnimeList"
      >
        Get List
      </button>
      <p class="text-white">returned data: {{ mediaListData }}</p>

      <button
        class="py-3 px-6 text-white rounded-lg bg-purple-600 shadow-lg block m-4"
        @click="startEnumerateWindows"
      >
        start interval list windows
      </button>
      <button
        class="py-3 px-6 text-white rounded-lg bg-purple-600 shadow-lg block m-4"
        @click="endEnumerateWindows"
      >
        end interval list windows
      </button>
    </div>
  </div>
</template>
