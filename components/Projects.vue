<script setup>
    const projects = [
        {
            id: 1,
            title: 'Customer Behavior Modelling',
            content: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
            `,

        },
        {
            id: 2,
            title: 'NLP',
            content: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
            `,
        },
        {
            id: 3,
            title: 'LLM',
            content: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
            `,
        },
        {
            id: 4,
            title: 'Classification',
            content: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
            `,
        },
        {
            id: 5,
            title: 'OOP',
            content: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
            `,
        },
        {
            id: 6,
            title: 'Forecasting',
            content: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, placerat vel placerat at,
                    maximus eu mi. Integer euismod feugiat accumsan. Proin auctor dolor sit amet tempus aliquet. 
                    Proin viverra magna id erat fermentum varius. Vestibulum facilisis tellus non nisl hendrerit lobortis at id lacus.
                    Maecenas consectetur pharetra ligula ac sollicitudin
                </p>
            `,
        },
    ]
    
</script>

<template>
    <section class="lg:bg-[url('assets/img/pattern-randomized.svg')] lg:bg-contain lg:bg-center">
        <article class="md:max-w-[900px] xl:max-w-[1300px] xl:px-10 mx-auto py-10 lg:px-0 lg:py-24 flex flex-col gap-10">
            <BaseHeading heading-level="2" id="projects">Projects</BaseHeading>
            <BaseTab :tabs="projects" />
        </article>
    </section>
</template>