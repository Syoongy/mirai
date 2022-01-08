<script setup>
import NavItem from "./NavItem.vue";
import DynamicIcon from "../DynamicIcon.vue";
const navArray = [
  {
    name: "Home",
    to: "/",
    icon: "CollectionIcon",
  },
  {
    name: "Search",
    to: "/search",
    icon: "SearchIcon",
  },
];
const logout = () => {
  localStorage.removeItem("jwtKey");
  localStorage.removeItem("viewer-id");
  localStorage.removeItem("viewer-name");
  localStorage.removeItem("viewer-score-format");
};
</script>
<template>
  <div class="min-h-screen flex flex-row">
    <div class="flex flex-col w-full bg-nav-background overflow-hidden">
      <div class="flex items-center justify-center h-20">
        <h1 class="text-3xl uppercase text-primary">Mirai</h1>
      </div>
      <ul class="flex flex-col py-4 px-6">
        <nav-item
          v-for="item in navArray"
          :key="item.name"
          :navName="item.name"
          :to="item.to"
        >
          <dynamic-icon
            :name="item.icon"
            class="inline-flex items-center justify-center h-8 w-8 text-lg text-gray-400"
          />
        </nav-item>
        <nav-item :navName="'Logout'" @click="logout">
          <dynamic-icon
            :name="'LogoutIcon'"
            class="inline-flex items-center justify-center h-8 w-8 text-lg text-gray-400"
          />
        </nav-item>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
