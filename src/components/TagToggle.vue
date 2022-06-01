<script setup>
import { ref } from "vue";
const props = defineProps(["tag"]);
</script>
<template>
  <div
    :class="{ active: tag.isActive, notActive: !tag.isActive }"
    class="cursor-pointer m-1 px-4 py-2 inline-block text-base rounded-full notActive select-none"
    @click="$emit('toggle',tag.id)"
  >
    {{tag.name}}
  </div>
</template>
<style>
.notActive {
  @apply border-[#ffc44a] bg-white border;
}
.active {
  @apply bg-[#ffc44a] text-white;
}
</style>
