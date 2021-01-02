<template>
    <div class="navbar">
        <div class="navbar__logo">
            <h3>
                <router-link to="/" class="navbar__link"
                    >My Portfolio
                </router-link>
            </h3>
        </div>
        <nav>
            <ul class="navbar__links">
                <li>
                    <router-link to="/" class="navbar__link">Home</router-link>
                </li>
                <li>
                    <router-link to="/about" class="navbar__link"
                        >About</router-link
                    >
                </li>
                <li>
                    <router-link to="/skills" class="navbar__link"
                        >Skills</router-link
                    >
                </li>
                <li>
                    <router-link to="/achievements" class="navbar__link"
                        >Achievements</router-link
                    >
                </li>
                <li>
                    <router-link to="/personal-projects" class="navbar__link"
                        >Personal Projects</router-link
                    >
                </li>
                <li>
                    <router-link to="/contact" class="navbar__link"
                        >Contact</router-link
                    >
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style src="./Navbar.css"></style>
