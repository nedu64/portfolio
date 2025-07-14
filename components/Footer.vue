<script setup>
    const socialNavigation = [
        {
            icon: 'uil:github',
            link: '#'
        },
        {
            icon: 'uil:linkedin',
            link: '#'
        },
        {
            icon: 'uil:twitter',
            link: '#'
        },
    ]
</script>

<template>
    <footer class="text-white max-w-[1700px] mx-auto">
        <nav class="fixed bottom-0 pl-0 pb-8 md:pl-8 w-full z-1">
            <ul class="flex gap-x-10 justify-center md:flex-col gap-y-8 bottom-0 left-0 min-w-10">
                <li v-for="(item, index) in socialNavigation" :key="index">
                    <Icon :name="item.icon" class="text-primary-light" size="2em" />
                </li>
            </ul>
        </nav>
    </footer>
</template>