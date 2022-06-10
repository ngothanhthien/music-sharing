<script setup>
import MusicIcon from "../components/icons/MusicIcon.vue";
import EditIcon from "../components/icons/EditIcon.vue";
</script>
<template>
    <div class="border-b border-gray-200">
            <div
              class="flex flex-wrap -mb-px text-sm text-center text-gray-400"
            >
              <div class="mr-2">
                <a
                  href="#"
                  class="inline-flex items-center p-2 rounded-t-lg group active"
                >
                  <MusicIcon
                    class="mr-2 w-4 h-4 fill-current"
                  />{{ $t("add_song_title") }}
                </a>
              </div>
              <div class="mr-2">
                <a
                  href="#"
                  class="inline-flex items-center p-2  rounded-t-lg group"
                >
                  <EditIcon
                    class="mr-2 w-4 h-4 fill-current"
                  />{{ $t("edit_song_title") }}
                </a>
              </div>
            </div>
          </div>
</template>
<style scoped>
.active{
  @apply text-skin-accent border-skin-accent border-b-2 font-medium;
}
</style>