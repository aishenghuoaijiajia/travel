<template>
    <div class="header">
        <div class="header-left"><span class="iconfont">&#xe624;</span></div>
        <div class="header-center"><span class="iconfont">&#xe632;</span>请输入景点</div>
        <router-link to="/city">
            <div class="header-right">{{currentCity}}<span class="iconfont">&#xe6aa;</span></div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        computed: {
            currentCity () {
                return this.$store.state.currentCity
            }
        }
    }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
    @import "~styles/varibles.styl";

    .header
        display: flex
        height: .88rem
        color: white
        background-color: $bgColor
        line-height: .88rem
        .header-left
            width: .84rem
            text-align: center
        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            text-align: center
            color white
        .header-center
            flex: 1
            height: .6rem
            line-height: .6rem
            margin: .14rem 0
            padding:0 .2rem
            color: black
            background-color: white
            border-radius: 0.06rem
</style>