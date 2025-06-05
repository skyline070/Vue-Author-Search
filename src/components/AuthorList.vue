<script setup>
import AuthorCard from './AuthorCard.vue';
defineProps(['authors']);
</script>

<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
    <AuthorCard v-for="author in authors" :key="author.key" :author="author" />
  </div>
</template>