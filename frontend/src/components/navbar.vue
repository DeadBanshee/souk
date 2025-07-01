<template>

    <div class="fixed top-0 left-0 w-full z-50">
        <nav class="bg-gray-800 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <div class="text-white text-lg font-bold"><router-link to="/" class="text-white hover:text-gray-300">Souk</router-link></div>
                <ul class="flex space-x-4">
                    <li><router-link to="/" class="text-white hover:text-gray-300">Home</router-link></li>
                    <li><router-link to="/about" class="text-white hover:text-gray-300">About</router-link></li>
                </ul>
            </div>
        </nav>
    </div>

</template>

<script setup>

</script>