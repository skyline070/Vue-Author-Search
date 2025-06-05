<script setup>

</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <header class="bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-5 shadow">
      <h1 class="text-3xl font-bold">📚 Open Library Author Explorer</h1>
    </header>

    <main class="p-4">
      <router-view />
    </main>

    <footer class="text-center text-sm text-gray-500 py-4">
      © 2025 Open Library Author Explorer
    </footer>
  </div>
</template>

