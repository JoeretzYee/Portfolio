<template>
    <div class="project">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator cert__image" :src="image" :alt="image" />
            </div>
            <div class="card-content">
                <span class="card-title activator "
                    >{{ title
                    }}<i class="material-icons right">more_vert</i></span
                >
            </div>
            <div class="card-reveal">
                <span class="card-title "
                    >{{ title }}<i class="material-icons right">close</i></span
                >
                <p>
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Project",
    props: {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>

<style src="./Project.css" scoped></style>
