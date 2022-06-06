<script setup>
import {watch,ref} from 'vue';
import {setLang} from '../logic/lang.js';
import {setCookie,getCookie} from '../logic/cookie.js';
let langNow=getCookie('lang');
langNow=langNow==''?'vi':langNow;
setLang(langNow);
const lang=ref(langNow);
watch(lang,(newLang)=>{
  setCookie('lang',lang.value,365);
  setLang(newLang);
})
</script>
<template>
    <select
      class="block text-sm text-gray-700 py-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
      v-model='lang'
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
