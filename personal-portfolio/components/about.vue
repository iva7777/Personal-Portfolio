<template>
    <section id="about"
        class="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center p-8 gap-12">
        <img src="public/me.JPG" alt="My photo"
            class="w-96 h-96 rounded-full object-cover shadow-lg transition duration-500 hover:scale-105"
        />

        <div class="max-w-xl flex flex-col gap-6">
            <p class="text-xl font-sans leading-relaxed">
                Hi there! 👋 I'm Iva, a university student with a passion for design and front-end development. I'm
                always eager to learn and improve my skills, embracing the motto <em>Übung macht den Meister</em>
                ("practice makes perfect"). I also love collaborating with others to bring creative ideas to life. With
                a background in programming, I enjoy solving problems and building user-friendly, visually appealing
                websites and visuals.
                <br /><br />
                Beyond coding, I have a deep love for languages — especially German! 🗣️ I believe that communication is
                key, whether it's in code or across cultures, and I'm always excited to connect with like-minded people
                from all walks of life.
                Let’s connect and share ideas! 🌟
            </p>

            
            <div class="flex flex-wrap gap-3">
                <span class="bg-purple-900 px-3 py-1 rounded-full text-sm font-semibold tracking-wide">Adobe Creative Cloud</span>
                <span class="bg-purple-900 px-3 py-1 rounded-full text-sm font-semibold tracking-wide">HTML</span>
                <span class="bg-purple-900 px-3 py-1 rounded-full text-sm font-semibold tracking-wide">CSS</span>
                <span class="bg-purple-900 px-3 py-1 rounded-full text-sm font-semibold tracking-wide">JavaScript</span>
                <span class="bg-purple-900 px-3 py-1 rounded-full text-sm font-semibold tracking-wide">Vue.js /
                    Nuxt</span>
            </div>

            <div class="flex gap-4">
                <a href="/files/CV.pdf" download
                    class="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-purple-500 transition-transform duration-300">Download
                    CV</a>
                <a href="#footer"
                    class="inline-block px-6 py-2 rounded-full border border-purple-900 text-white font-semibold hover:bg-purple-700 hover:text-white transition-colors duration-300">Contact
                    Me</a>
            </div>

            <p class="italic text-2xl text-white mt-6 max-w-md">
                "Creativity is intelligence having fun." – Albert Einstein
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
const scrollTo = (id: any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
</script>
