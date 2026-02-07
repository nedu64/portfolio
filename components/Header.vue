<script setup>
    const navOpen = ref(false)
    const navigation = [
        'About', 'Project', 'Timeline', 'Experience', 'Contact'
    ];
    const toggleActive = () => {
        navOpen.value = !navOpen.value
    }
</script>
<template>
    <header class="border-b-2 border-primary-light page-layout__header"> 
        <section class="min-h-[40px] flex items-center justify-between px-8 py-8 text-white">
            <h2 class="text-primary-light">LOGO</h2>
            <div class="relative">
                <div class="relative p-4 md:hidden flex justify-end" :class="navOpen ? 'absolute z-10' : 'static'">
                    <button class="inline-flex flex-col gap-y-[6px] relative min-h-[19px]" @click="toggleActive">
                        <span class="w-6 bg-white h-[2px] inline-block transition transform" :class="navOpen ? 'rotate-45 translate-y-[4px]' : 'static'"></span>
                        <span class="w-6 bg-white h-[2px] inline-block transition" :class="navOpen ? 'hidden' : 'block'"></span>
                        <span class="w-6 bg-white h-[2px] inline-block transition transform" :class="navOpen ? '-rotate-45 -translate-y-[4px]' : ''"></span>
                    </button>
                </div> 
            </div> 
            <nav 
                class="fixed z-[9] right-0 top-0 transition bottom-0 min-w-[48%] md:min-w-auto bg-white/10 backdrop-blur-md border border-primary/20 md:bg-transparent md:backdrop-opacity-0 md:border-none shadow-lg md:shadow-none md:static md:translate-x-0"
                :class="navOpen ? 'translate-x-0' : 'translate-x-[100%]'"
            >
                <ul class="flex flex-col gap-y-4 md:flex-row md:justify-end items-center gap-x-16 px-6 pt-28 pb-10 md:p-0 md:gap-y-0">
                    <li v-for="(item, index) in navigation" :key="index" class="uppercase cursor-pointer tracking-widest py-4 w-full md:w-auto md:p-0 md:transition-all md:duration-75 md:hover:text-primary-light">
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </nav>
        </section>
    </header>
</template>