<script setup>
import { ref, computed } from "vue";
import { useDebouncedRef } from "../debouncedRef.js";
import SearchIcon from "../components/icons/SearchIcon.vue";
import TagToggle from "../components/TagToggle.vue";
import ShareIcon from "../components/icons/ShareIcon.vue";
import SongInsert from "../components/SongInsert.vue";
const tags = new Map([
  [10, { name: "Sơn Tùng MTP", isActive: false, id: 10 }],
  [5, { name: "Hoàng Thùy Linh", isActive: false, id: 5 }],
  [4, { name: "Rap", isActive: false, id: 4 }],
  [6, { name: "Ballad", isActive: false, id: 6 }],
  [7, { name: "Âu Mỹ", isActive: false, id: 7 }],
  [9, { name: "Kpop", isActive: false, id: 9 }],
]);
const tagsResult = ref(tags);
const tagSearchValue = useDebouncedRef("");
const tagToggleF = (id) => {
  tagsResult.value.get(id)["isActive"] = !tagsResult.value.get(id)["isActive"];
  tagSearchValue.value = "";
};
const tagsSearchResult = computed(() => {
  if (tagSearchValue.value == "") {
    return tagsResult.value;
  }
  const regex = new RegExp(tagSearchValue.value, "gi");
  const temp = new Map();
  tagsResult.value.forEach((value, key) => {
    if (value.name.match(regex)) {
      temp.set(key, value);
    }
  });
  return temp;
});
</script>
<template>
  <div class="grid grid-cols-12 h-screen">
    <!-- side bar -->
    <div
      class="col-span-3 bg-gradient-to-b from-[#ee9ca7] to-[#ffdde1] py-10 px-2"
    >
      <!-- avatar -->
      <a href="#" class="block relative">
        <img
          alt="Ảnh đại diện"
          src="../assets/img/avatar.jpg"
          class="mx-auto object-cover rounded-full border-4 h-24 w-24"
        />
      </a>
      <div class="text-center mt-2 text-white">Chào Ngô Thanh Thiên!</div>
      <!-- search bar -->
      <div class="relative mx-2">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <SearchIcon class="w-5 h-5 text-gray-500" />
        </div>
        <input
          v-model="tagSearchValue"
          type="search"
          id="default-search"
          class="block p-2 pl-10 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus-visible:outline-none"
          placeholder="Tìm tag..."
        />
      </div>
      <!-- tags -->
      <div>
        <TagToggle
          @toggle="tagToggleF"
          v-for="[key, tag] in tagsSearchResult"
          :tag="tag"
          :key="key"
        />
      </div>
    </div>
    <div class="col-span-9 relative ml-5">
      <!-- share button -->
      <a
        href="#"
        class="z-50 inline-flex fixed top-4 right-4 py-2 px-4 justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none"
        ><ShareIcon class="w-5 h-5 text-white m-2" />
        Chia sẻ
      </a>
      <!-- song input field -->
      <div>
        <SongInsert />
      </div>
    </div>
  </div>
</template>
