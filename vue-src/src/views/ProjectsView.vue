<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import BackToTopButton from '../components/BackToTopButton.vue';

const projects = [
    { title: "Project example", description: "Lorem ipsum.", imageUrl: "https://dummyimage.com/600x337.5/fff/000.png?text=example", projectUrl: "https://example.com/" },
    { title: "Project example", description: "Lorem ipsum.", imageUrl: "https://dummyimage.com/600x337.5/fff/000.png?text=example", projectUrl: "https://example.com/" },
    { title: "Project example", description: "Lorem ipsum.", imageUrl: "https://dummyimage.com/600x337.5/fff/000.png?text=example", projectUrl: "https://example.com/" },
    { title: "Project example", description: "Lorem ipsum.", imageUrl: "https://dummyimage.com/600x337.5/fff/000.png?text=example", projectUrl: "https://example.com/" },
    { title: "Project example", description: "Lorem ipsum.", imageUrl: "https://dummyimage.com/600x337.5/fff/000.png?text=example", projectUrl: "https://example.com/" },
    { title: "Project example", description: "Lorem ipsum.", imageUrl: "https://dummyimage.com/600x337.5/fff/000.png?text=example", projectUrl: "https://example.com/" },
    { title: "Project example", description: "Lorem ipsum.", imageUrl: "https://dummyimage.com/600x337.5/fff/000.png?text=example", projectUrl: "https://example.com/" },
];
</script>

<template>
    <div>
        <div class="projects-container">
            <ProjectCard v-for="project in projects" :key="project.title" :title="project.title"
                :description="project.description" :image-url="project.imageUrl" :project-url="project.projectUrl" />
        </div>
        <BackToTopButton />
    </div>
</template>

<style scoped>
.projects-container {
    width: 70vw;
    margin: 0 15vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.projects-container .project-card {
    margin: 4vh 0;
}
</style>