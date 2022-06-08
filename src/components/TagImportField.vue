<script setup>
import { inject, ref } from "vue";
import { useDebouncedRef } from "../debouncedRef.js";
import TagWithDelete from "./TagWithDelete.vue";
const props= defineProps(['tagsOnSong']);
const emit=defineEmits(['addTagToSong','removeTagFromSong']);
const tagSearch = useDebouncedRef("");
const { tags } = inject("tags");
const inputField = ref(null);
const resultVisible = ref(false);
const turnOffSuggest = () => {
  resultVisible.value = false;
};
const addCustomTagToSong=()=>{
  if(tagSearch.value!=""){
    emit('addTagToSong', tagSearch.value);
    tagSearch.value = "";
    resultVisible.value = false;
  }
}
const addTagToSong=(tagName)=>{
  emit('addTagToSong',tagName);
  tagSearch.value = "";
  resultVisible.value = false;
}
const removeTagFromSong=(tagName)=>{
  emit('removeTagFromSong',tagName);
}
</script>
<template>
  <div class="flex items-center p-0.5 flex-wrap">
    <div v-for="tagOnSong in tagsOnSong" :key="'tagOnSong'+tagOnSong">
      <TagWithDelete @removeTagFromSong="removeTagFromSong(tagOnSong)" class="m-0.5">{{tagOnSong}}</TagWithDelete>
    </div>
    <div class="relative" ref="inputField" v-clickOutside="turnOffSuggest">
      <input
        :placeholder="$t('add_tag')"
        v-model="tagSearch"
        class="focus:outline-none"
        type="text"
        @click="resultVisible = true"
      />
      <!-- dropdown -->
      <div
        v-if="resultVisible"
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
            class="px-4 py-2 hover:bg-skin-secondary hover:text-skin-reverse cursor-pointer select-none"
          >
            <span
              class="flex flex-col"
              @click="addCustomTagToSong"
            >
              <span> {{ tagSearch == "" ? "&nbsp;" : tagSearch }} </span>
            </span>
          </div>

          <div
            v-for="[id, tag] in tags"
            :key="id"
            href="#"
            class="px-4 py-2 hover:bg-skin-secondary hover:text-skin-reverse cursor-pointer select-none"
            @click="addTagToSong(tag.name)"
          >
            <span class="flex flex-col">
              <span> {{ tag.name }} </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
