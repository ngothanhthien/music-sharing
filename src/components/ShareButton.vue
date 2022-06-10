<script setup>
import ShareIcon from "./icons/ShareIcon.vue"
</script>
<template>
  <a
    href="#"
    class="z-50 inline-flex fixed bottom-4 right-4 py-2 px-4 justify-center items-center bg-skin-accent hover:bg-skin-accentDark focus:ring-red-500 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none"
    ><ShareIcon class="w-5 h-5 text-white m-2" />
    {{ $t("share") }}
  </a>
</template>
