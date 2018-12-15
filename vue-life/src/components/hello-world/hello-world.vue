<style scoped>
    @import './hello-world.css';
</style>

<template>
    <div id='root'>
        {{ message }}
    </div>
</template>


<script>
    export default {
        name: 'hello-world',
        props: {
            message: String
        }
    }
</script>
