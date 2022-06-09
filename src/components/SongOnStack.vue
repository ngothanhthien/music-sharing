<script setup>
import { ref, watch } from "vue";
import TagImportField from "./TagImportField.vue";
const props = defineProps(["title", "checked", "tagsOnSong"]);
const emit = defineEmits(["addTagToSong", "removeTagFromSong","toggleSongCheck"]);
const addTagToSong = (name) => {
  emit("addTagToSong", name);
};
const removeTagFromSong = (name) => {
  emit("removeTagFromSong", name);
};
const toggleSongCheck = ()=>{
  emit("toggleSongCheck")
}
</script>
<template>
  <div class="border flex items-center">
    <label
      
      class="select-none w-1/3 pl-2 cursor-pointer truncate"
    >
      <input
        @click="toggleSongCheck"
        class="mr-1 scale-125 accent-skin-accent"
        type="checkbox"
        :checked="checked"
      />{{ title }}
    </label>
    <TagImportField
      @removeTagFromSong="removeTagFromSong"
      :tagsOnSong="tagsOnSong"
      @addTagToSong="addTagToSong"
      class="bg-inherit w-2/3"
    />
  </div>
</template>
