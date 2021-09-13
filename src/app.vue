<script setup>
import SideNav from "./components/Navigation/SideNav.vue";
</script>

<template>
  <div class="flex min-h-full min-w-full bg-background">
    <side-nav class=" w-80"></side-nav>
    <router-view class=" w-full" />
  </div>
</template>
