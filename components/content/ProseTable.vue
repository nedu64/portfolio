<script setup></script>

<template>
  <div class="w-full overflow-x-auto">
    <table class="min-w-full text-sm">
      <slot />
    </table>
  </div>
</template>

<style scoped>

    .prose td,
    .prose th {
        @apply !p-2 !whitespace-nowrap !font-bold !font-['Oswald']
    }

</style>