# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# 📚 Vue Author Search App

A modern, animated **Vue.js** frontend app that lets users search for authors using the **Open Library API**, with **filtering**, **sorting**, **pagination**, **dark mode**, and a **fixed search bar** — built using the **Composition API**, **Tailwind CSS**, and **Vue Router**.

---

## 🔧 Tech Stack

- ✅ [Vue.js 3](https://vuejs.org) (Composition API)
- 🎨 [Tailwind CSS](https://tailwindcss.com)
- 🔁 [Axios](https://axios-http.com)
- 🌙 Dark Mode Support
- 🌐 Vue Router
- 📦 Open Library Public API

---

## ✨ Features

### ✅ Author Search
- Type an author's name (e.g., `twain`)
- Fetches from Open Library API
  - `https://openlibrary.org/search/authors.json?q=twain`

### 🗂 Display Details
- Author Name
- Work Count
- Top Subjects (shown as tags)

### 🧠 Filter & Sort
- Filter authors by `work_count > 50`
- Sort by `work_count` (ascending/descending)

### 📄 Component Structure
- `SearchBar.vue` – Input + Search button
- `AuthorList.vue` – Grid layout of authors
- `AuthorCard.vue` – Shows individual author details


### 🔝 Fixed Search Bar
- Search input stays pinned at the top while scrolling

### ➕ Optional Enhancements Implemented
- ✅ Pagination with "Load More" button
- ✅ Loading spinner animation
- ✅ Error retry handling

---

## 📁 Project Structure

