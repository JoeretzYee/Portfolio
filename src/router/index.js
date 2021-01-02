import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App.vue";
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";
import PersonalProjects from "../components/PersonalProjects.vue";
import Achievements from "../components/Achievements.vue";
import Contact from "../components/Contact.vue";
import Home from "../components/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/skills",
        name: "Skills",
        component: Skills,
    },
    {
        path: "/achievements",
        name: "Achievements",
        component: Achievements,
    },
    {
        path: "/personal-projects",
        name: "PersonalProjects",
        component: PersonalProjects,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
