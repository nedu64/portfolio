<script setup>
    
</script>

<template>
    <article class="lg:max-w-[900px] xl:max-w-[1300px] xl:px-10 mx-auto flex flex-col-reverse gap-6 lg:flex-row lg:gap-12 py-10 lg:px-0 lg:py-24">
        <div class="w-full lg:w-1/2 flex flex-col gap-10  lg:py-20">
            <div class="flex flex-col gap-4 ">
                <h1 class="font-bold text-2xl lg:text-4xl">Hi There &#128075;</h1>
                <p class="text-xl lg:text-[22px]">
                I'm <span class="font-bold font-sans">Ben</span>, a <span class="text-primary-light font-sans font-bold">Data Scientist</span> with a strong skill in Python, R, fluent in Russian, English and a dash of French. My interests lies in turning data into actionable insights. Using statistics, machine learning, and NLP, I can create solutions that make a real-world impact. Whether solo or in a team, I focus on delivering practical and meaningful results. Off-duty, I'm an outdoor enthusiast—think snowboarding &#127938; and trekking🚶🏽. But water sports &#127946; ? Not my thing.
                </p>
            </div>
            <div>
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