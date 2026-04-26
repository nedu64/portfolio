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
        const color = {
            'light': 'text-white',
            'dark': 'text-black'
        };

		return `${color[props.theme]} ${props.class}`;
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