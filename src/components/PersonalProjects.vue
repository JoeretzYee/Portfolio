<template>
    <div class="personalProjects">
        <h1>My Perosonal Projects</h1>
        <div class="personalProjects__content">
            <Project
                image="https://a0.muscache.com/im/pictures/5abcc13e-d206-414c-9c8b-e84d1b649aeb.jpg"
                title="Airbnb Clone "
                description="This is airbnb clone"
            />
            <Project
                image="https://variety.com/wp-content/uploads/2018/05/discord-logo.jpg"
                title="Discord Clone "
                description="This is discord clone"
            />
            <Project
                image="https://techcrunch.com/wp-content/uploads/2016/11/hulu-shows-movies.jpg?w=725"
                title="Hulu Clone "
                description="This is Hulu clone"
            />
            <Project
                image="https://assets.nflxext.com/ffe/siteui/allow-robots/contentSampling/seo-watch-free-link-preview.jpg"
                title="Netflix Clone "
                description="This is Netflix clone"
            />
            <Project
                image="https://respect-mag.com/wp-content/uploads/2019/12/spotify-logo-1920x1080_fouoik.jpg"
                title="Spotify Clone "
                description="This is Spotify clone"
            />
            <Project
                image="https://media.sproutsocial.com/uploads/2019/08/twitter-stats.svg"
                title="Twitter Clone "
                description="This is Twitter clone"
            />
            <Project
                image="https://www.webwise.ie/wp-content/uploads/2015/01/WhatsApp-header-1024x500.jpg"
                title="WhatsApp Clone "
                description="This is WhatsApp clone"
            />
            <Project
                image="https://cdn.vox-cdn.com/thumbor/9C0z7GTVmjtoOd9pJIg35qyGkqw=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/66243228/wjoel_1777_180403_youtube_003.0.jpg"
                title="Youtube Clone "
                description="This is Youtube clone"
            />
            <Project
                image="https://i.insider.com/5f457a7b42f43f001ddff00f"
                title="Instagram Clone "
                description="This is Instagram clone"
            />
        </div>
    </div>
</template>

<script>
import Project from "./Project.vue";

export default {
    name: "PersonalProjects",
    components: {
        Project,
    },
};
</script>

<style src="./PersonalProjects.css" scoped></style>
