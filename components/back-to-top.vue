<template>
    <button @click="scrollToTop"
        class="fixed bottom-6 right-6 z-50 cursor-pointer bg-purple-700 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition-transform duration-300 hover:scale-110"
        aria-label="Back to Top">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
        </svg>
    </button>
</template>

<script setup lang="ts">
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
