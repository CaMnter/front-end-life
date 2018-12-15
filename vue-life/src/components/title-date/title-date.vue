<style scoped>
    @import './title-date.css';
</style>

<template>
    <div id='root'>
        <span id='text' v-bind:title="tip">
            {{content}}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'title-date',
        props: {
            tip: String,
            content: String,
        }
    }
</script>