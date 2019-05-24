<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <swiper-slide class="swiper-slide" v-for="item in list" :key="item.id">
                <img :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props: {
            list: Array
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: white
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 31.5%
        background: #eee
    .swiper-slide
        img
            width: 100%
</style>