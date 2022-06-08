<script setup>
import {inject,ref} from 'vue';
import { useDebouncedRef } from "../debouncedRef.js";
import TagWithDelete from "./TagWithDelete.vue";
const tagSearch = useDebouncedRef("");
const {tags}=inject('tags');
const inputField=ref(null);
const resultVisible=ref(false);
const addTagToSong=() => {
  console.log(1);
}
const turnOffSuggest=() => {
  resultVisible.value=false;
}
</script>
<template>
  <div class="flex items-center p-0.5 w-full">
    <TagWithDelete class="m-0.5">Tag1</TagWithDelete>
    <TagWithDelete class="m-0.5">Tag2</TagWithDelete>
    <div class="relative" ref="inputField" v-clickOutside="turnOffSuggest">
      <input
        :placeholder="$t('add_tag')"
        v-model="tagSearch"
        class="focus:outline-none"
        type="text"
        @click="resultVisible=true"
      />
      <!-- dropdown -->
      <div v-if="resultVisible"
        class="z-50 overflow-y-scroll origin-top-right absolute mt-2 max-h-40 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
      >
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
        <div
            href="#"
            class="px-4 py-2 hover:bg-skin-secondary hover:text-skin-reverse cursor-pointer"
          >
            <span class="flex flex-col">
              <span> {{tagSearch==''?'&nbsp;':tagSearch}} </span>
            </span>
          </div>

          <div v-for="[id,tag] in tags" :key="id"
            href="#"
            class="px-4 py-2 hover:bg-skin-secondary hover:text-skin-reverse cursor-pointer"
          >
            <span class="flex flex-col" @click="addTagToSong">
              <span> {{tag.name}} </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
