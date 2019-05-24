<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
    export default {
        name: "CitySearch"
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        padding .1rem
        background $bgColor
        .search-input
            width 100%
            border-radius .06rem
            height: .62rem
            text-align center
            color: #666

</style>