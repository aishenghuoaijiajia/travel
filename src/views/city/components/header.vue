<template>
    <div>
        <div class="head">
            <div class="head-back">
                <router-link to="/">
                    <span class="iconfont color-w">&#xe624;</span>
                </router-link>
            </div>
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
            .color-w
                color white
        .head-title
            flex 1



</style>