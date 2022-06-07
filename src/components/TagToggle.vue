<script setup>
import { ref } from "vue";
const props = defineProps(["tag"]);
</script>
<template>
  <div
    :class="{ active: tag.isActive, notActive: !tag.isActive }"
    class="cursor-pointer m-1 px-4 py-2 inline-block text-skin-base rounded-full select-none border border-skin-secondary"
    @click="$emit('toggle',tag.id)"
  >
    {{tag.name}}
  </div>
</template>
<style>
.notActive {
  @apply bg-white;
}
.active {
  @apply bg-skin-secondary text-skin-reverse;
}
</style>
