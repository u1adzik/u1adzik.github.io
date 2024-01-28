<script setup>
import { ref } from 'vue';


const logoStyle = ref({});

function handleMouseMove(event) {
    const { clientX, clientY } = event;
    const moveX = (clientX - window.innerWidth / 2) / 50;
    const moveY = (clientY - window.innerHeight / 2) / 50;
    logoStyle.value = {
        transform: `translate(${moveX}px, ${moveY}px)`
    };
}
</script>

<template>
    <section class="about-section" @mousemove="handleMouseMove">
        <div class="about-text">
            <p class="name">I'm<br>Uładzisłaŭ Hińko</p>
            <p class="additional-about-text">Developer from Miensk, Biełaruś.</p>
            <a class="button" href="/CV.pdf">Open résumé</a>

            <div class="contacts">
                <div class="contacts-container">
                    <a href="https://github.com/u1adzik">
                        <font-awesome-icon :icon="['fab', 'github']" />
                    </a>
                    <a href="https://t.me/uvula1000000">
                        <font-awesome-icon :icon="['fab', 'telegram']" />
                    </a>
                </div>
                <p>Get in touch: <a href="mailto:uladzislau.hinko@gmail.com" class="click-here">click here</a>
                </p>
            </div>
        </div>
        <div class="about-img">
            <img src="/logo.svg" alt="" class="logo" :style="logoStyle">
        </div>
    </section>
</template>

<style scoped>
.about-section {
    display: flex;
    margin: 0 15vw;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: calc(100vh - 100px);
}

.about-text .name {
    font-weight: 900;
    font-size: 64px;
    margin-bottom: 50px;
}

.about-text .additional-about-text {
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 30px;
}

.about-img img {
    width: 30vw;
}

.contacts {
    font-size: 24px !important;
    font-weight: 900;
    color: grey;
    margin-top: 100px;
}

.contacts-container svg {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    margin-bottom: 10px;
    transition: 0.3s;
    display: inline-block;
}

.contacts-container svg:hover {
    opacity: 0.6;
    transform: translateY(-2px);
}

.click-here {
    color: white;
    text-decoration: underline;
    display: inline-block;
    transition: 0.3s;
}

.click-here:hover {
    transform: translateY(-2px);
}
</style>
