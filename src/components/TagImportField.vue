<script setup>
import { useDebouncedRef } from "../debouncedRef.js";
import TagWithDelete from './TagWithDelete.vue';
const tagSearch=useDebouncedRef('');
</script>
<template>
    <div class="flex items-center border p-2 w-full">
        <TagWithDelete>Tag1</TagWithDelete>
        <TagWithDelete>Tag2</TagWithDelete>
        <div><input v-model="tagSearch" class="focus:outline-none" type="text"></div>
    </div>
</template>