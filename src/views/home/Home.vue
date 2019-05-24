<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>

    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcons from './components/icons.vue'
import HomeRecommend from './components/recommend'
import HomeWeekend from  './components/weekend'

export default {
    name: 'Home',
    components:{
        HomeRecommend,
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeWeekend
    }
}
</script>

<style lang="stylus" scoped>
    .home
        background-color #f5f5f5
</style>
