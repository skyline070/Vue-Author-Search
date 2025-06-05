<script setup>
defineProps(['author']);
</script>

<template>
  <div
    class="p-5 border border-indigo-100 rounded-2xl shadow-sm bg-white hover:shadow-lg transition duration-300 hover:scale-[1.01] animate-fade-in"
  >
    <h2 class="text-2xl font-semibold text-indigo-700 mb-1">{{ author.name }}</h2>
    <p class="text-gray-600 mb-2">
      <span class="font-medium text-indigo-500">Works:</span> {{ author.work_count }}
    </p>
    <div class="flex flex-wrap gap-2 mt-2">
      <span
        v-for="subject in author.top_subjects?.slice(0, 6) || []"
        :key="subject"
        class="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-800 font-medium"
      >
        {{ subject }}
      </span>
    </div>
  </div>
</template>


<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.4s ease-in-out;
}
</style>