<template>
    <div class="custom-cursor" :class="{ 'clicked': isClicked }" :style="cursorStyle"></div>
</template>
  
<script>
export default {
    data() {
        return {
            cursorX: 0,
            cursorY: 0,
            isClicked: false,
        };
    },
    computed: {
        cursorStyle() {
            return {
                left: `${this.cursorX}px`,
                top: `${this.cursorY}px`,
                transform: 'translate(-50%, -50%)'
            };
        },
    },
    mounted() {
        document.addEventListener('mousemove', this.updateCursorPosition);
        document.addEventListener('mousedown', this.onClickDown);
        document.addEventListener('mouseup', this.onClickUp);
    },
    beforeDestroy() {
        document.removeEventListener('mousemove', this.updateCursorPosition);
        document.removeEventListener('mousedown', this.onClickDown);
        document.removeEventListener('mouseup', this.onClickUp);
    },
    methods: {
        updateCursorPosition(e) {
            this.cursorX = e.clientX;
            this.cursorY = e.clientY;
        },
        onClickDown() {
            this.isClicked = true;
        },
        onClickUp() {
            this.isClicked = false;
        },
    },
};
</script>
  
<style scoped>
.custom-cursor {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    background-color: rgba(255, 255, 255, 1);
    mix-blend-mode: difference;
    z-index: 9999;
    transition: background-color 0.2s, transform 0.2s;
}

.custom-cursor.clicked {
    background-color: rgba(255, 255, 255, 0.6);
}
</style>