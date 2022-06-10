<script setup>
import { ref, watch } from "vue";
import TrashIcon from "./icons/TrashIcon.vue";
import TagImportField from "./TagImportField.vue";
const props = defineProps(["title", "tagsOnSong"]);
const emit = defineEmits([
  "addTagToSong",
  "removeTagFromSong",
]);
const addTagToSong = (name) => {
  emit("addTagToSong", name);
};
const removeTagFromSong = (name) => {
  emit("removeTagFromSong", name);
};
</script>
<template>
  <div class="border flex items-center bg-skin-neutralLight my-2 p-2">
    <div class="flex items-center select-none w-1/3">
    <div class="cursor-pointer">
      <TrashIcon class="w-4 h-4 fill-current inline  m-1" />
    </div>
      <div class="w-full truncate">
        {{ title }}
      </div>
    </div>
    <TagImportField
      @removeTagFromSong="removeTagFromSong"
      :tagsOnSong="tagsOnSong"
      @addTagToSong="addTagToSong"
      class="bg-inherit w-2/3"
    />
  </div>
</template>
