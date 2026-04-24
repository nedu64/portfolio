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

        theme: {
            type: String,
            default: 'light',
            validator: (propValue) => ['light', 'dark'].includes(propValue),
        },

        class: {
            type: String,
            default: '',
        }
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

        const color = {
            'light': 'text-white',
            'dark': 'text-black'
        };

		return `${level[props.headingLevel]} ${color[props.theme]} ${props.class}`;
	});

</script>

<template>
    <component
		:is="`h${headingLevel}`"
		:id="id"
		class="uppercase font-extrabold font-['Oswald']"
        :class="headingClass"
	>
        <!-- @slot The main content slot -->
        <slot />
	</component>
</template>

<style lang="postcss" scoped>
    .h1 {
        @apply text-3xl lg:text-4xl;
    }
    .h2 {
        @apply text-2xl lg:text-3xl;
    }
    .h3 {
        @apply text-xl lg:text-2xl;
    }
    .h4 {
        @apply text-lg lg:text-xl;
    }
    .h5 {
        @apply text-base lg:text-lg;
    }
    .h6 {
        @apply text-[17px];
    }

</style>