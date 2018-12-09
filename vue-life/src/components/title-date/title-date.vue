<style scoped>
    @import './title-date.css';
</style>

<template>
    <div id='root'>
        <span id='text' v-bind:title="title">
            {{content}}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'title-date',
        props: {
            title: String,
            content: String,
        }
    }
</script>