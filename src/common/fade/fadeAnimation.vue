<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
    export default {
        name: "FadeAnimation"
    }
</script>

<style lang="stylus" scoped>
    .v-enter-active, .v-leave-active
        transition opacity 1s
    .v-enter, .v-leave-to
        opacity: 0
</style>