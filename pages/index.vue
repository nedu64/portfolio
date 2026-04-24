<script setup>
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
})

console.log(home.value.description)
</script>

<template>
  <main class="text-white page-layout__content">
    <Profile 
      :heading="home.meta.heading"
      :copy="home.meta.copy"
      :image="home.meta.image"
      :resume-link="home.meta.resumeLink"
      :resume-link-text="home.meta.resumeLinkText"
    />
    <Projects />
  </main>
</template>