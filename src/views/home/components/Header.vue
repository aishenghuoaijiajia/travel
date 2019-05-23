<template>
    <div class="header">
        <div class="header-left"><span class="iconfont">&#xe624;</span></div>
        <div class="header-center"><span class="iconfont">&#xe632;</span>请输入景点</div>
        <div class="header-right">南京<span class="iconfont">&#xe6aa;</span></div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
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
            width: 1.04rem
            text-align: center
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