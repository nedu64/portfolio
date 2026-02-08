<script setup>
    /** Props definition */

	const props = defineProps({
		/** Which heading is rendered? h1, h2, h3, etc... */
        headingLevel: {
            type: [Number, String],
            default: 2,
            validator: (propValue) => [1, 2, 3, 4, 5, 6].includes(parseInt(propValue)),
        },
        /** Used to set the id attr */
        id: {
            type: String,
            default: '',
            required: false,
        },
	});

    const headingClass = computed(() => {
		const level = {
			1: 'h1',
			2: 'h2',
			3: 'h3',
			4: 'h4',
			5: 'h5',
			6: 'h6',
		};

		return level[props.headingLevel];
	});

    const hashedClass = computed(() => {
        return props.headingLevel === '2' ? '[&_span]:before:content-[\'\'] [&_span]:before:text-primary-light' : ''
    })

</script>

<template>
    <component
		:is="`h${headingLevel}`"
		:id="id"
		class="uppercase tracking-widest font-bold"
        :class="headingClass"
	>
        <span>
            <!-- @slot The main content slot -->
            <slot />
        </span>
	</component>
</template>

<style lang="postcss" scoped>
    .h1 {
        @apply text-4xl;
    }
    .h2 {
        @apply text-3xl [&_span]:before:content-['#'] [&_span]:before:text-primary-light;
    }
    .h3 {
        @apply text-2xl;
    }
    .h4 {
        @apply text-xl;
    }
    .h5 {
        @apply text-lg;
    }
    .h6 {
        @apply text-[17px];
    }

</style>