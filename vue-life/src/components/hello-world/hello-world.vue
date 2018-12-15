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
        name: 'HelloWorld',
        props: {
            message: String
        }
    }
</script>
