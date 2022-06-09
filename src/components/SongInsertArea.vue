<script setup>
import { ref, watch } from "vue";
import {removeElementFromArray,addElementUniqueToArray} from "../logic/array.js";
import Switch from './Switch.vue';
import SongOnStack from './SongOnStack.vue';
const insertValue = ref("");
const result = ref("");
const warning = ref("");
//data from api
const songsJson=[
  {"id":"9mxTxTRHNMU","title":"Da Lo Yeu Em Nhieu"},
  {"id":"2YM4j-oP_qQ","title":"Vu Cat Tuong - Mơ (Dreaming) | Official MV"},
  {"id":"30KI5SuECuc","title":"Âm Thầm Bên Em | OFFICIAL MUSIC VIDEO | Sơn Tùng M-TP"},
  {"id":"QdXdx9IaakA","title":"NHỮNG KẺ MỘNG MƠ | Noo Phước Thịnh | OFFICIAL MV"},
  {"id":"re4VI-EsST8","title":"VẠN DẶM XA NHAU, VẠN LẦN THƯƠNG ĐAU - PHƯỢNG VŨ | OFFICIAL MUSIC VIDEO"}
];
const songsOnStack=ref(new Map());
watch(insertValue,(link) => {
  console.log(youtube_parser(link));
  for(let i=0;i<songsJson.length;i++){
    songsOnStack.value.set(songsJson[i]["id"],{
      title:songsJson[i]["title"],
      tags:[],
      isChecked:true
    });
  }
});
const youtube_parser = (url) => {
  const regExpSong =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const regExpList = /^.*(youtu.be\/|list=)([^#\&\?]*).*/;
  var matchSong = url.match(regExpSong);
  var matchList = url.match(regExpList);
  if (matchList && matchList[2]) {
    return { id: matchList[2], type: "list" };
  }
  if (matchSong && matchSong[2].length == 11) {
    return { id: matchSong[2], type: "song" };
  }
  return false;
};
const addTagToSong=(song_id,tagName)=>{
  addElementUniqueToArray(songsOnStack.value.get(song_id).tags,tagName);
}
const removeTagFromSong=(song_id,tagName)=>{
  removeElementFromArray(songsOnStack.value.get(song_id).tags,tagName);
}
const toggleSongCheck=(song_id)=>{
  // songsOnStack.value.get(song_id).isChecked=!songsOnStack.value.get(song_id).isChecked;
  // console.log(songsOnStack.value);
  console.log(song_id);
}
</script>

<template>
  <div class="m-2">
    <div class="text-skin-base my-2">
      {{ $t("add_song_title") }}
    </div>
    <input
      autocomplete="off"
      v-model="insertValue"
      class="ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/2 py-2 px-4 bg-white shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-skin-accent focus:border-transparent"
      :placeholder="$t('add_song_description')"
    />
  </div>
  <div>{{ result }}</div>
  <div>{{ warning }}</div>
  <div class="bg-skin-primaryDark px-3 py-1 w-2/3">
    <Switch />
    <div v-for="[youtube_id, song] in songsOnStack">
      <SongOnStack
        @addTagToSong="addTagToSong(youtube_id,$event)"
        @removeTagFromSong="removeTagFromSong(youtube_id,$event)"
        @toggleSongCheck="toggleSongCheck(youtube_id)"
        :title="song.title"
        :checked="song.isChecked"
        :tagsOnSong="song.tags"
        class="p-2 my-2 w-full bg-skin-neutralLight"
      />
    </div>
  </div>
</template>
