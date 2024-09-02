<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" class="flex-1 bg-gradient-to-br from-purple-600 to-pink-500 min-h-[390px] relative overflow-hidden">
        <div class="absolute inset-0 bg-purple-900 opacity-20"></div>
        <div class="absolute top-10 left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20 filter blur-xl"></div>
        <div class="absolute bottom-10 right-10 w-60 h-60 bg-pink-300 rounded-full opacity-20 filter blur-xl"></div>
        <div id="cta-inner-container" class="relative max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white">
                        Revolutionize Your Construction Process
                    </h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-100 md:text-lg">
                        Streamline planning, boost efficiency, and bring your projects to life with our innovative building app.
                    </p>
                </div>

                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-900 bg-white hover:bg-purple-100 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">
                        Start Building Smarter
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
