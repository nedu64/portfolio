<script setup>
    const { data: projects } = await useAsyncData(() => queryCollection('projects').limit(4).all())
</script>

<template>
    <section class="bg-white text-black px-8 lg:px-0">
        <article class="md:max-w-[900px] xl:max-w-[1300px] xl:px-10 mx-auto py-10 lg:px-0 lg:py-24 flex flex-col gap-10">
            <BaseHeading heading-level="2" id="projects" theme="dark">Projects</BaseHeading>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div v-for="project in projects" :key="project.id" class="h-full group relative transition duration-800 ease-in-out border border-gray-200 hover:border-dashed hover:border-primary-light/50 hover:shadow-lg py-6 md:py-10 rounded-lg flex flex-col justify-between gap-4 md:gap-6">
                    <div class="flex flex-col gap-4 md:gap-6">
                        <BaseHeading heading-level="4" id="projects" theme="dark" class="px-3 md:px-8">{{ project.title }}</BaseHeading>
                        <article class="flex flex-col gap-4 md:gap-6">
                            <div class="flex flex-col gap-4 md:gap-6">
                                <img :src="project.meta.image ?? '/img/profile_img.jpg'" class="h-32 md:h-72 w-full object-cover" />
                                <p class="px-3 md:px-8">{{ project.description }}</p>
                            </div>
                        </article>
                    </div>
                    <div v-if="project.meta.tags.length" class="px-3 md:px-8 flex flex-wrap gap-2">
                        <span v-for="(tag, index) in project.meta.tags" :key="index" class="border border-black group-hover:border-dashed px-3 py-1 rounded-full text-xs font-['Oswald'] font-black uppercase">{{ tag }}</span>
                    </div>
                    <a href="#" class="opacity-0 absolute inset-0">Hello</a>
                </div>
            </div>
        </article>
    </section>
</template>