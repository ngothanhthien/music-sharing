<script setup>
import { ref } from "vue";
import {setCookie} from "../logic/cookie.js";
defineProps(['themeNow'])
const themes = ["default", "green theme"];
</script>
<template>
  <select
    class="block text-sm text-gray-700 py-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
    @change="$emit('changeTheme',$event.target.value)"
    :value="themeNow"
  >
    <option v-for="theme in themes" :key="`theme-${theme}`" :value="theme">
      {{ theme }}
    </option>
  </select>
</template>
