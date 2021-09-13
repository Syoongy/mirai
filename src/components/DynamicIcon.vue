<template>
  <component v-if="isLoaded" :is="heroIcons[name]" />
</template>

<script setup>
import * as heroIcons from "@heroicons/vue/solid";
import { onMounted, ref } from "@vue/runtime-core";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
const isLoaded = ref(false);
onMounted(() => {
  isLoaded.value = true;
});
</script>
