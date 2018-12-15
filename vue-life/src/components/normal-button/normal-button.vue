<style scoped>
    @import './normal-button.css';
</style>

<template>
    <button id="button" @click="click">{{content}}</button>
</template>

<script>
    export default {
        name: 'normal-button',
        props: {
            content: String,
            click: Function
        }
    }
</script>