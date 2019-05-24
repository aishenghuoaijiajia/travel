<template>
    <div class="icons">
        <swiper  :options="swiperOption">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <img class="icon-img" :src="item.imgUrl">
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>

</template>

<script>
    export default {
        name: "HomeIcons",
        props: {
            list: Array
        },
        data (){
            return{
                swiperOption: {
                    autoplay: false
                },
            }
        },
        mounted (){
            return this.list
        },
        computed: {
            pages () {
                const pages = []
                this.list.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .icons >>> .swiper-container
        width: 100%
        height: 0
        padding-bottom:50%
    .icons
        background-color  white
        .icon
            float left
            width: 25%
            height: 0
            padding-bottom: 25%
            text-align: center
            .icon-img
                width 1.1rem
                margin  0.1rem 0
            .icon-desc
                color: $darkTextColor
                ellipsis()





</style>