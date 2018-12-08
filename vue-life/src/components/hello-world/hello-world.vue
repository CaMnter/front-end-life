<style scoped>
    @import './hello-world.css';
</style>

<template>
    <div id='root'>
        {{ message }}
        <text>2333</text>
    </div>
</template>


<script>
    export default {
        name: 'HelloWorld',
        props: {
            message: String
        }
    }
</script>
