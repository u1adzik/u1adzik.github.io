<script>
export default {
    props: ['title', 'description', 'imageUrl', 'projectUrl'],
    data() {
        return {
            isImageExpanded: false
        };
    },
    methods: {
        toggleImageSize() {
            this.isImageExpanded = !this.isImageExpanded;
        }
    }
}
</script>

<template>
    <div class="project-card">
        <p class="project-title">{{ title }}</p>
        <p class="project-description">{{ description }}</p>
        <div class="project-card-image" @click="toggleImageSize" :class="{ 'expanded': isImageExpanded }">
            <img :src="imageUrl" alt="">
        </div>
        <div class="project-button button">
            <a :href="projectUrl">Open project</a>
        </div>
    </div>
</template>


<style scoped>
.project-card {
    display: block;
    padding: 20px;
    border: 2px solid white;
}

.project-title {
    font-size: 36px;
    font-weight: 900;
    margin-bottom: 5px;
}

.project-description {
    margin-bottom: 20px;
}

.project-card-image {
    cursor: pointer;
    transition: transform 0.3s;
}

.project-card-image.expanded {
    transform: scale(1.5);
}

.project-button {
    margin-top: 20px;
}
</style>

