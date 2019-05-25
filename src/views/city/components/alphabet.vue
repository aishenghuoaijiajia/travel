<template>
    <ul class="alpha">
        <li class="item">A</li>
        <li  class="item">A</li>
    </ul>
</template>

<script>
    export default {
        name: "CityAlphabet"
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .alpha
        position absolute
        top 1.72rem
        right 0
        bottom 0
        display flex
        flex-direction column
        justify-content center
        width: .4rem
        .item
            font-size .24rem
            line-height: .4rem
            color: $bgColor
            text-align center
</style>