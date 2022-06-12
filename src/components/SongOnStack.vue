<script setup>
import { ref, watch } from "vue";
import TagImportField from "./TagImportField.vue";
const props = defineProps(["title", "checked", "tagsOnSong"]);
const emit = defineEmits([
  "addTagToSong",
  "removeTagFromSong",
  "toggleSongCheck",
]);
const addTagToSong = (name) => {
  emit("addTagToSong", name);
};
const removeTagFromSong = (name) => {
  emit("removeTagFromSong", name);
};
const toggleSongCheck = () => {
  emit("toggleSongCheck");
};
</script>
<template>
  <div class="border flex">
      <label
        class="select-none  flex items-center w-1/2 pl-2 pr-5 py-2 cursor-pointer border-r"
      >
        <input
          @click="toggleSongCheck"
          class="mr-1 scale-125 accent-skin-accent"
          type="checkbox"
          :checked="checked"
        />
        <div class="ml-1">{{ title }}</div>
      </label>
    <TagImportField
      @removeTagFromSong="removeTagFromSong"
      :tagsOnSong="tagsOnSong"
      @addTagToSong="addTagToSong"
      class="bg-inherit w-1/2 ml-4"
    />
  </div>
</template>
