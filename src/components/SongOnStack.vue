<script setup>
import TagImportField from './TagImportField.vue';
</script>
<template>
    <div class="border p-2 w-2/3 flex items-center">
        <label class="select-none w-1/3 truncate">
            <input class="mr-1 accent-[#ee9ca7]" type="checkbox" checked>Tên bài hát
        </label>
        <TagImportField />
    </div>
</template>