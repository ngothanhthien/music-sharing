<script setup>
const props=defineProps(['switchValue']);
</script>
<template>
  <label class="inline-flex items-center cursor-pointer relative">
    <input
      :checked='switchValue'
      @input="$emit('update:switchValue',$event.target.checked)"
      type="checkbox"
      class="sr-only"
    />
    <div
      class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"
    ></div>
  </label>
</template>
<style scoped>
.toggle-bg:after {
  content: "";
  @apply absolute top-0.5 left-0.5 bg-white border border-gray-300 rounded-full h-5 w-5 transition shadow-sm;
}
input:checked + .toggle-bg:after {
  transform: translateX(100%);
  @apply border-white;
}
input:checked + .toggle-bg {
  @apply bg-skin-secondary border-skin-secondary;
}
</style>
