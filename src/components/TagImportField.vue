<script setup>
import { useDebouncedRef } from "../debouncedRef.js";
import TagWithDelete from "./TagWithDelete.vue";
const tagSearch = useDebouncedRef("");
</script>
<template>
  <div class="flex items-center border p-0.5 w-full">
    <TagWithDelete class="m-0.5">Tag1</TagWithDelete>
    <TagWithDelete class="m-0.5">Tag2</TagWithDelete>
    <div class="relative">
      <input
        placeholder="Thêm tag..."
        v-model="tagSearch"
        class="peer focus:outline-none"
        type="text"
      />
      <!-- dropdown -->
      <div
        class="hidden z-50 peer-focus:block overflow-y-scroll origin-top-right absolute mt-2 max-h-40 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
      >
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
        <a
            href="#"
            class="block block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span class="flex flex-col">
              <span> {{tagSearch==''?'&nbsp;':tagSearch}} </span>
            </span>
          </a>
          <a
            href="#"
            class="block block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span class="flex flex-col">
              <span> Stripe </span>
            </span>
          </a>
          <a
            href="#"
            class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span class="flex flex-col">
              <span> Stripe </span>
            </span>
          </a>
          <a
            href="#"
            class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span class="flex flex-col">
              <span> Stripe </span>
            </span>
          </a>
          <a
            href="#"
            class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span class="flex flex-col">
              <span> Stripe </span>
            </span>
          </a>
          <a
            href="#"
            class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span class="flex flex-col">
              <span> Mastercard </span>
            </span>
          </a>
          <a
            href="#"
            class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span class="flex flex-col">
              <span> Paypal </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
