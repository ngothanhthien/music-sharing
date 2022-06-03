<script setup>
import XIcon from "./icons/XIcon.vue";
</script>
<template>
  <div
    class="relative bg-[#ffc44a] text-white min-w-max px-4 py-2 rounded-full select-none"
  >
    <div class="mr-3"><slot></slot></div>
    <div
      class="flex absolute inset-y-0 right-2 items-center pl-3 cursor-pointer"
    >
      <XIcon class="fill-current w-4 h-4" />
    </div>
  </div>
</template>
