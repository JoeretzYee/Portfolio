<template>
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper">
                <div class="container">
                    <router-link to="/" class="brand-logo"
                        >My Portfolio</router-link
                    >

                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/skills">Skills</router-link></li>
                        <li>
                            <router-link to="/certificates"
                                >Certificates</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/personal-projects"
                                >Personal Projects</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/contact">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {};
    },
};
</script>

<style src="./Navbar.css" scoped></style>
