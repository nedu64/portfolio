<script setup>
    const isOpen = ref(false);

    defineProps({
        /** Used to set the id of the accordion */
        id: {
            type: String,
            default: '',
            required: true,
        },
        /** Tab data */
		tab: {
            type: Object,
            required: true,
            default: () => {},
        },
    });

</script>

<template>
    <details class="bg-primary text-white p-8 rounded-lg">
        <summary
            class="flex justify-between items-center w-full pb-2 lg:pb-4 overflow-x-hidden"
            :aria-expanded="isOpen ? 'true' : 'false'"
            :aria-controls="'accordion'+ id"
            @click="isOpen = !isOpen"
        >
             <BaseHeading heading-level="4">{{ tab.title }}</BaseHeading>
            <span class="sr-only" x-text="isOpen ? 'Open' : 'Close'"></span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current cursor-pointer transition-all"
                :class="!isOpen ? '' : 'rotate-45'"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
            >
                <path d="M9 17V9M9 9V1M9 9H17M9 9H1" stroke="white" stroke-width="2" stroke-linecap="round"></path>
            </svg>
        </summary>
        <div v-html="tab.content" :id="'accordion'+ id" class="py-2 lg:py-4 text-white flex flex-col gap-4"></div>
    </details>
</template>