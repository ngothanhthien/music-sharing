<script setup>
import XIcon from "./icons/XIcon.vue";
</script>
<template>
  <div
    class="flex items-center bg-skin-secondary text-skin-reverse min-w-max px-3 py-1 rounded-full select-none"
  >
    <div><slot></slot></div>
    <div
      class="cursor-pointer"
      @click="$emit('removeTagFromSong')"
    >
      <XIcon class="fill-current w-3 h-3 pl-1"/>
    </div>
  </div>
</template>
