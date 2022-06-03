<script setup></script>
<template>
    <select
      class="block text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
      v-model="$i18n.locale"
    >
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ $t("lang_" + locale) }}
      </option>
    </select>
</template>
