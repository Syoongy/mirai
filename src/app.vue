<script setup>
import SideNav from "./components/Navigation/SideNav.vue";
</script>

<template>
  <div class="flex min-h-full min-w-full">
    <side-nav class=" w-1/6"></side-nav>
    <router-view class="w-5/6" />
  </div>
</template>
