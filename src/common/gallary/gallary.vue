<template>
    <div class="container" @click="handlePicturesClose">
        <div class="swiper">
            <swiper :options="swiperOption" >
                <swiper-slide class="swiper-slide" v-for="item in pictures">
                    <img class="swiper-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonGallary",
        props: {
            pictures: Array
        },
        data (){
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    observeParents: true,
                    observer: true
                }
            }
        },
        methods: {
            handlePicturesClose (){
                this.$emit('close')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container
        display flex
        flex-direction column
        justify-content center
        position fixed
        left  0
        right 0
        top 0
        bottom 0
        background #000
        .swiper
            height 0
            width 100%
            padding-bottom 100%
            .swiper-img
                width 100%
            .swiper-pagination
                color white
                margin-bottom -1rem
</style>