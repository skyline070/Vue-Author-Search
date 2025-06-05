<script setup>
import { ref, watch } from 'vue';
import debounce from 'lodash.debounce';

const emit = defineEmits(['search']);
const props = defineProps(['isLoading']);

const searchInput = ref('');

// Debounce search emit
const debouncedSearch = debounce(() => {
  emit('search', searchInput.value);
}, 300); // 300ms delay

watch(searchInput, debouncedSearch);
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-3 items-center w-full">
    <input
      v-model="searchInput"
      type="text"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-200 text-gray-800"
      placeholder="Search for an author..."
    />
    <button
      @click="emit('search', searchInput)"
      class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300 disabled:opacity-50"
      :disabled="isLoading"
    >
      {{ isLoading ? 'Searching...' : 'Search' }}
    </button>
  </div>
</template>