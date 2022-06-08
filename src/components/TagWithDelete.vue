<script setup>
import XIcon from "./icons/XIcon.vue";
</script>
<template>
  <div
    class="relative bg-skin-secondary text-skin-reverse min-w-max px-4 py-2 rounded-full select-none"
  >
    <div class="mr-2"><slot></slot></div>
    <div
      class="flex absolute inset-y-0 right-2 items-center pl-2 cursor-pointer"
      @click="$emit('removeTagFromSong')"
    >
      <XIcon class="fill-current w-3 h-3"/>
    </div>
  </div>
</template>
