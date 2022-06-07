<script setup>
import { ref, watch } from "vue";
import Switch from './Switch.vue';
import SongOnStack from './SongOnStack.vue';
const insertValue = ref("");
const result = ref("");
const warning = ref("");
const api_key = "AIzaSyDXjkesUyo5WWyG8Oo2oLUdcX2B_2nKw7k";
const youtube_api = "https://youtube.googleapis.com/youtube/v3/";
const db_api = "http://localhost:3000";
const songsOnStack=ref(new Map());
watch(insertValue, async (link) => {
  link = link.trim();
  link = youtube_parser(link);
  if (link) {
    result.value = link.id;
    const id = link.id;
    let url = null;
    if (link.type == "song") {
      url =
        youtube_api +
        "videos" +
        "?part=snippet" +
        "&id=" +
        id +
        "&key=" +
        api_key;
    } else if (link.type == "list") {
      url =
        youtube_api +
        "playlistItems?part=snippet&maxResults=50&playlistId=" +
        id +
        "&key=" +
        api_key;
      warning.value = "Bạn đang thêm 1 danh sách";
    }
    let api = await fetch(url);
    api = await api.json();
    let insertSongs = api["items"];
    if (
      link.type == "list" &&
      insertSongs[0]["snippet"]["channelTitle"] == "YouTube"
    ) {
      warning.value = "Danh sách bạn đưa không hợp lệ";
    } else {
      for (let i = 0; i < insertSongs.length; i++) {
        const insertSong = insertSongs[i]["snippet"];
        songsOnStack.value.set(id,{
            title: insertSong.title,
            youtube_id: id,
            tags: [],
          });
      }
    }
  } else {
    result.value =insertValue.value==''?'':"Link không hợp lệ";
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
</script>

<template>
  <div class="m-2">
    <div class="text-skin-base my-2">
      {{$t('add_song_title')}}
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
  <Switch />
  <div class="bg-skin-primaryDark px-3 py-1 w-2/3">
    <div v-for="[youtube_id,song] in songsOnStack">
      <SongOnStack :title="song.title" class="p-2 my-2 w-full bg-skin-neutralLight"/>
    </div>
  </div>
</template>
