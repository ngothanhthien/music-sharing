<script setup>
import { ref, onMounted, reactive, defineEmits } from "vue";
import SongOnStore from "../components/SongOnStore.vue";
import TagWithDelete from "../components/TagWithDelete.vue"
const songsJson = [
  {
    id: "9mxTxTRHNMU",
    title: "Da Lo Yeu Em Nhieu",
    tags: ["Sơn Tùng MTP", "Ballad"],
  },
  {
    id: "2YM4j-oP_qQ",
    title: "Vu Cat Tuong - Mơ (Dreaming) | Official MV",
    tags: ["Ballad", "Kpop"],
  },
  {
    id: "30KI5SuECuc",
    title: "Âm Thầm Bên Em | OFFICIAL MUSIC VIDEO | Sơn Tùng M-TP",
    tags: ["Sơn Tùng MTP", "Âu Mỹ"],
  },
  {
    id: "QdXdx9IaakA",
    title: "NHỮNG KẺ MỘNG MƠ | Noo Phước Thịnh | OFFICIAL MV",
    tags: ["Hoàng Thùy Linh", "Kpop"],
  },
  {
    id: "re4VI-EsST8",
    title:
      "VẠN DẶM XA NHAU, VẠN LẦN THƯƠNG ĐAU - PHƯỢNG VŨ | OFFICIAL MUSIC VIDEO",
    tags: ["Rap", "Hoàng Thùy Linh"],
  },
];
const props = defineProps(["tagsOnFilter"]);
const songsOnStore = ref(new Map());
const tagsFilter = reactive({
  modeAnd: true,
  arrayFilter: [],
});
const saveSongs = () => {
  console.log("Save Songs");
};
const removeTagFromSong = (song_id, name) => {
  console.log("Remove tag " + name + " from song-" + song_id);
  song_id.tags.splice(song_id.tags.indexOf(name), 1);
};
const addTagToSong = (song_id, name) => {
  console.log("Add tag " + name + " to song-" + song_id);
  song_id.tags.push(name)
};
const emit = defineEmits([
  "removeTagFromFilter"
]);
onMounted(() => {
  songsJson.forEach((song) => {
    songsOnStore.value.set(song.id, {
      title: song.title,
      tags: song.tags,
    });
  });
});
</script>

<template>
  <div class="flex items-center mb-2">
    <div class="text-skin-base mb-2">{{ $t("view_by_tag") }}:</div>
    <div class="mx-1" v-for="tag in tagsOnFilter" :key="'songEdit' + tag">
      <TagWithDelete @removeTagFromSong="$emit('removeTagFromFilter',tag)">{{ tag }}</TagWithDelete>
    </div>
  </div>
  <div class="bg-skin-primaryDark px-3 py-2 w-2/3 rounded-md">
    <div v-for="[song_id, song] in songsOnStore" :key="song_id">
      <SongOnStore
        @removeTagFromSong="removeTagFromSong(song, $event)"
        @addTagToSong="addTagToSong(song, $event)"
        :title="song.title"
        :tagsOnSong="song.tags"
      />
    </div>
    <div class="flex justify-end">
      <div
        href="#"
        class="cursor-pointer rounded inline-block py-2 px-4 bg-skin-accent hover:bg-skin-accentDark text-white transition duration-200 text-center text-base font-semibold shadow-md focus:outline-none"
        @click="saveSongs"
      >
        {{ $t("save") }}
      </div>
    </div>
  </div>
</template>
