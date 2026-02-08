<script setup>
    const desktopSelected = ref(null);
    const mobileSelected = ref(null);
    /** Props definition */
	const props = defineProps({
        /** Tabs data */
		tabs: {
            type: Array,
            required: true,
            default: () => {},
        },
	});

    onMounted(() => {
        if (props.tabs.length > 0) {
            desktopSelected.value = props.tabs[0];
        }
    })

    const selectDesktopTab = (option) => {
        desktopSelected.value = option;
    }

</script>

<template>
    <section class="">
        <div class="hidden lg:block bg-black p-20 rounded-lg pb-[290px]">
            <article class="flex relative top-[100px]">
                <ul class="space-y-2 min-w-[310px]">
                    <li
                        v-for="(option, index) in tabs"
                        :key="index"
                        class="text-case-secondary cursor-pointer capitalize p-6 text-xl rounded-l-lg"
                        :class="
                            desktopSelected && desktopSelected.title === option.title
                                ? 'bg-gradient-to-r from-primary to-transparent'
                                : ''
                        "
                        @click="selectDesktopTab(option)"
                        >{{ option.title }}</li
                    >
                </ul>
                <div
                        class="p-24 bg-gradient-to-r min-h-[500px] from-primary to-transparent -mt-[100px] -mb-[100px] rounded-l-lg"
                    >
                    <div v-if="desktopSelected" v-html="desktopSelected.content" class="space-y-8"></div>
                </div>
            </article>
        </div>
        <div class="flex flex-col gap-6 lg:hidden">
            <template v-for="(option, index) in tabs" :key="index">
                <BaseAccordion :tab="option" :id="index.toString()" />
            </template>
        </div>
    </section>
</template>