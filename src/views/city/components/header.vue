<template>
    <div>
        <div class="head">
            <router-link to="/" class="head-back">
                <span class="iconfont">&#xe624;</span>
            </router-link>
            <p class="head-title">城市选择</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .head
        display flex
        height .88rem
        line-height .88rem
        background-color $bgColor
        color white
        text-align center
        .head-back
            width .84rem
            color white
        .head-title
            flex 1



</style>