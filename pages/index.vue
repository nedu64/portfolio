<script setup>
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
})
</script>

<template>
  <div class="text-white">
    <Profile 
      :heading="home.meta.heading"
      :copy="home.meta.copy"
      :image="home.meta.image"
      :resume-link="home.meta.resumeLink"
      :resume-link-text="home.meta.resumeLinkText"
    />
    <Projects />
  </div>
</template>