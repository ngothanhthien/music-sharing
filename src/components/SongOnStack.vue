<script setup>
import TagImportField from './TagImportField.vue';
const props=defineProps(['title'])
</script>
<template>
    <div class="border flex items-center">
        <label class="select-none w-1/2 pl-2 truncate">
            <input class="mr-1 scale-125 accent-skin-accent" type="checkbox" checked>{{title}}
        </label>
        <TagImportField class="bg-inherit" />
    </div>
</template>