<template>
    <section id="hero" class="min-h-screen flex flex-col justify-center items-center text-center p-8">
        <h1 class="text-7xl font-serif font-bold mb-6 text-primary">Hi, I'm Iva</h1>
        <p class="text-2xl mb-6 font-sans">Welcome to my portfolio!</p>
        <button @click="scrollTo('about')"
            class="relative inline-block px-8 py-3 font-semibold text-white bg-gradient-to-r from-purple-700 to-purple-900 
            rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/50 focus:outline-none 
            focus:ring-2 focus:ring-purple-500 cursor-pointer">
            <span class="z-10 relative">Let’s Start →</span>
            <span class="absolute inset-0 rounded-full animate-pulse bg-purple-700 opacity-20 blur-md"></span>
        </button>
    </section>
</template>

<script setup lang="ts">
const scrollTo = (id: any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
</script>