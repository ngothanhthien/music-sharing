<script setup>
import TagImportField from './TagImportField.vue';
const props=defineProps(['title'])
</script>
<template>
    <div class="border p-2 w-2/3 flex items-center">
        <label class="select-none w-1/2 pl-2 truncate">
            <input class="mr-1 scale-125 accent-[#ee9ca7]" type="checkbox" checked>{{title}}
        </label>
        <TagImportField />
    </div>
</template>