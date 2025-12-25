<script setup>
    
</script>

<template>
    <article class="w-full flex flex-col-reverse gap-6 lg:flex-row lg:gap-12 lg:mt-10">
        <div class="w-full lg:w-1/2 flex flex-col gap-4 lg:py-20">
            <h1 class="font-bold text-2xl lg:text-4xl">Hey ya! I'm <span class="text-primary-light font-sans">Ben</span></h1>
            <p class="text-xl lg:text-[22px]">
               I’m a <span class="text-primary-light font-sans font-bold">Data Scientist</span> who turns data into decisions. I thrive in collaborative environments, learn fast, and enjoy tackling challenging data problems. If you’re building <span class="text-primary-light font-sans font-bold">impactful AI or data-driven</span> products, I’d love to be part of the journey.
            </p>
            <div class="mt-2">
                <a 
                    href="/"
                    class="inline-flex items-center gap-1 bg-black border-2 border-primary-light font-sans group hover:bg-primary-light hover:text-black py-2 px-4 uppercase rounded-sm"
                >
                    <span class="tracking-widest font-bold">View Resume</span>
                    <Icon name="material-symbols:article" class="text-white group-hover:text-black" size="1.5em" />
                </a>
            </div>
        </div>
        <figure class="w-full lg:w-1/2">
            <img
                src="~/assets/img/profile_img.jpg"
                class="w-full h-full object-cover object-center rounded-md"
                alt="Bakwenye Benjamin"
            />
        </figure>
    </article>
</template>