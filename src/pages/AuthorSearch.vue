<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SearchBar from '../components/SearchBar.vue';
import AuthorList from '../components/AuthorList.vue';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

const authors = ref([]);
const isLoading = ref(false);
const error = ref('');
const workCountFilter = ref(0);
const sortOrder = ref('desc');
const page = ref(1);
const query = ref(route.query.name || '');
const hasMore = ref(true);
const apiCache = new Map();

const fetchAuthors = async (reset = true) => {
  if (!query.value) return;

  const cacheKey = `${query.value}-${page.value}`;

  // ✅ Return cached result if exists
  if (apiCache.has(cacheKey)) {
    console.log(`🧠 Using cache for: ${cacheKey}`);
    const cached = apiCache.get(cacheKey);
    if (reset) {
      authors.value = cached;
    } else {
      authors.value.push(...cached);
    }
    hasMore.value = cached.length > 0;
    return;
  }

  console.log(`🌐 Fetching from API: ${cacheKey}`);
  isLoading.value = true;
  error.value = '';

  try {
    const res = await axios.get(
      `https://openlibrary.org/search/authors.json?q=${query.value}&page=${page.value}`
    );
    const results = res.data?.docs || [];
    hasMore.value = results.length > 0;

    // ✅ Store result in cache
    apiCache.set(cacheKey, results);

    if (reset) {
      authors.value = results;
    } else {
      authors.value.push(...results);
    }
  } catch (err) {
    error.value = 'Failed to fetch authors';
  } finally {
    isLoading.value = false;
  }
};

const handleSearch = (name) => {
  page.value = 1;
  query.value = name;
  router.replace({ path: '/authors', query: { name } });
  fetchAuthors(true);
};

const retry = () => {
  fetchAuthors(page.value === 1);
};

const loadMore = () => {
  page.value++;
  fetchAuthors(false);
};

const filteredAndSortedAuthors = computed(() => {
  return authors.value
    .filter(a => a.work_count > workCountFilter.value)
    .sort((a, b) => {
      return sortOrder.value === 'asc' ? a.work_count - b.work_count : b.work_count - a.work_count;
    });
});

watch(() => route.query.name, (val) => {
  if (val) {
    query.value = val;
    page.value = 1;
    fetchAuthors(true);
  }
}, { immediate: true });
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto">
    <SearchBar @search="handleSearch" :isLoading="isLoading" />

    <div v-if="error" class="text-red-500 mt-4">
      <p>{{ error }}</p>
      <button @click="retry" class="text-blue-500 underline">Retry</button>
    </div>

    <div v-if="authors.length">
      <div class="my-4 flex gap-4 items-center">
        <label>Work Count Filter:</label>
        <select v-model="workCountFilter" class="border p-2 rounded">
          <option :value="0">All</option>
          <option :value="50">More than 50</option>
        </select>

        <label class="ml-4">Sort By Work Count:</label>
        <select v-model="sortOrder" class="border p-2 rounded">
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>

      <AuthorList :authors="filteredAndSortedAuthors" />

      <div v-if="!isLoading && hasMore" class="mt-4">
        <button
        v-if="hasMore && !isLoading"
        @click="loadMore"
        class="mt-6 mx-auto block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        >
        Load More
        </button>
      </div>
    </div>

    <div v-if="isLoading && !authors.length" class="mt-6 text-center">
      <div class="animate-pulse text-gray-500">Loading authors...</div>
    </div>
  </div>
</template>

