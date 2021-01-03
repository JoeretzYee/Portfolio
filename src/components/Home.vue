<template>
    <div class="home">
        <div class="home__content">
            <!-- <img src="./joeretz.jpg" alt="" /> -->

            <p>The Impossible Journey Is The One You Never Begin With</p>
        </div>
        <About />
        <Skills />
        <Certificates />
        <PersonalProjects />
        <Contact />
    </div>
</template>

<script>
import About from "./About.vue";
import Skills from "./Skills.vue";
import Certificates from "./Certificates.vue";
import Contact from "./Contact.vue";
import PersonalProjects from "./PersonalProjects.vue";

export default {
    name: "Home",
    components: {
        About,
        Skills,
        Certificates,
        Contact,
        PersonalProjects,
    },
};
</script>

<style src="./Home.css" scoped></style>
