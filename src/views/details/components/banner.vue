<template>
    <div>
        <div class="banner" @click="handleOpen">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-info">
                <p class="banner-title">{{sightName}}</p>
                <p class="banner-number">
                    <span class="iconfont ">&#xe612;</span>
                    <span>23张</span>
                </p>
            </div>
        </div>
        <CommonGallary @close="handleClose"
                       v-show="showPictures"
                       :pictures="gallaryImgs"
                       :gallaryImgs="gallaryImgs"
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
        props: {
            sightName: String,
            bannerImg: String,
            gallaryImgs: Array
        },
        data (){
            return {
                showPictures: false,
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