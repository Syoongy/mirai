<template>
  <li>
    <router-link
      :to="to"
      class="
        flex flex-row
        items-center
        h-12
        my-2
        transform
        hover:-translate-y-2
        transition-transform
        ease-in
        duration-200
        text-gray-500
        hover:text-gray-800
        px-6
      "
    >
      <slot></slot>
      <span class="text-sm font-medium ml-6">{{ navName }}</span>
      <span
        class="
          ml-auto
          mr-6
          text-sm
          bg-red-100
          rounded-full
          px-3
          py-px
          text-red-500
        "
        v-if="noOfNotifications"
      >
        {{ noOfNotifications }}
      </span>
    </router-link>
  </li>
</template>

<script setup>
const props = defineProps({
  navName: {
    type: String,
    required: true,
    default: "Location Name",
  },
  to: {
    type: String,
    default: "/",
  },
  noOfNotifications: {
    type: Number,
  },
});
</script>
