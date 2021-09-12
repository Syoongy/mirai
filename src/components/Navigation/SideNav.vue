<script setup>
import NavItem from "./NavItem.vue";
import { CollectionIcon, SearchIcon } from "@heroicons/vue/solid";
</script>
<template>
  <div class="min-h-screen flex flex-row bg-gray-100 shadow-md">
    <div class="flex flex-col w-full bg-white rounded-r-3xl overflow-hidden">
      <div class="flex items-center justify-center h-20 shadow-md">
        <h1 class="text-3xl uppercase text-indigo-500">Logo</h1>
      </div>
      <ul class="flex flex-col py-4">
        <nav-item navName="Home" to="/">
          <collection-icon
            class="
              inline-flex
              items-center
              justify-center
              h-8
              w-8
              text-lg text-gray-400
            "
          />
        </nav-item>
        <nav-item navName="Search" to="/search">
          <search-icon
            class="
              inline-flex
              items-center
              justify-center
              h-8
              w-8
              text-lg text-gray-400
            "
          />
        </nav-item>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
