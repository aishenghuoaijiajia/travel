<template>
    <div>
        <div class="banner" @click="handleOpen">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1601/d4/d4f1a62140b9d93590.img.jpg_600x330_16d61609.jpg">
            <div class="banner-info">
                <p class="banner-title">牛首山文化旅游区(AAAA景区)</p>
                <p class="banner-number">
                    <span class="iconfont ">&#xe612;</span>
                    <span>23张</span>
                </p>
            </div>
        </div>
        <CommonGallary @close="handleClose"
                       v-show="showPictures"
                       :pictures="pictures"
        ></CommonGallary>
    </div>

</template>

<script>
    import CommonGallary from  '@/common/gallary/gallary'
    export default {
        name: "DetailsBanner",
        components: {
            CommonGallary
        },
        data (){
            return {
                showPictures: false,
                pictures: ['http://img1.qunarzz.com/sight/p0/1511/4a/4a9bd9cf356cad7990.img.jpg_350x240_96696dea.jpg',
                    'http://img1.qunarzz.com/sight/p0/1511/94/94fd49f633a5eb5590.img.jpg_350x240_9827afe3.jpg']
            }
        },
        methods: {
            handleOpen (){
                this.showPictures = true
            },
            handleClose (){
                this.showPictures = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            align-items center
            position absolute
            left 0
            right 0
            bottom 0
            line-height: .6rem
            color: #fff
            padding: 0 .2rem
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex 1
                font-size: .32rem
            .banner-number
                background rgba(0,0,0,0.5)
                padding 0 0.2rem
                height .4rem
                line-height .4rem
                border-radius .2rem
                font-size 0.24rem
                .iconfont
                    font-size .24rem
                    margin-right .06rem







</style>