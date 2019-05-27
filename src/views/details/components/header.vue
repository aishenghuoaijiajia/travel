<template>
    <div>
        <router-link tag="div" to="/" class="head-icon" v-show="!showHead">
            <span class="iconfont">&#xe624;</span>
        </router-link>
        <div class="head" :style="opacityStyle">
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
        name: "DetailsHeader",
        data (){
            return {
                showHead: false,
                opacityStyle: {
                    opacity:0
                }
            }
        },
        methods: {
            handleScroll (){
                let top = document.documentElement.scrollTop
                if(top>0){
                    this.showHead = true
                    let opacity = top/200
                        opacity = opacity>1 ? 1 : opacity
                    this.opacityStyle = {opacity}
                }else {
                    this.showHead = false
                }
            }
        },
        activated () {
            window.addEventListener('scroll', this.handleScroll)
        },
        deactivated (){
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .head-icon
        width .72rem
        height .72rem
        position absolute
        top .1rem
        left .1rem
        background rgba(0,0,0,0.5)
        border-radius .36rem
        text-align center
        line-height .72rem
        .iconfont
            color white
            font-size .32rem
    .head
        position fixed
        top 0
        left 0
        right 0
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