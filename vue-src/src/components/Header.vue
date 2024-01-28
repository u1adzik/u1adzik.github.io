<template>
    <header>
        <nav class="header-navbar">
            <ul class="nav-wrapper">
                <li class="nav__item"><router-link class="nav__item-link" to="/">About</router-link></li>
                <li class="nav__item"><router-link class="nav__item-link" to="/projects">Projects</router-link></li>
            </ul>
        </nav>
    </header>
</template>


<style scoped>
.nav__item-link.router-link-active {
    color: white;
    transform: translateY(-3px);
}

header {
    height: 100px;
    line-height: 100px;
    width: 100%;
}

.nav-wrapper {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.nav__item {
    color: grey;
    display: inline-block;
    margin: 0 1vw;
}

.nav__item-link {
    display: inline-block;
    position: relative;
    padding: 5px 12px;
    transition: 0.5s;
}

.nav__item-link:hover {
    transform: translateY(-3px);
    color: white;
}
</style>