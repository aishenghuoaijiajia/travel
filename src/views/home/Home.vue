<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconsList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcons from './components/icons.vue'
import HomeRecommend from './components/recommend'
import HomeWeekend from  './components/weekend'
import { mapState } from 'vuex'

export default {
    name: 'Home',
    components:{
        HomeRecommend,
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeWeekend
    },
    data (){
        return {
            swiperList: [],
            iconsList: [],
            recommendList: [],
            weekendList: [],
            lastCity: ''
        }
    },
    methods: {
        getHomeInfo (){
            this.$axios.get('/api/index.json?city='+this.currentCity)
                .then(this.getHomeInfoSuccess)
        },
        getHomeInfoSuccess (res){
            if(res.data.ret && res.data.data){
                this.swiperList = res.data.data.swiperList
                this.iconsList = res.data.data.iconsList
                this.recommendList = res.data.data.recommendList
                this.weekendList = res.data.data.weekendList
            }
        }
    },
    computed: {
        ...mapState(['currentCity'])
    },
    mounted (){
        this.lastCity = this.currentCity
        this.getHomeInfo()
    },
    activated() {
        if(this.lastCity !== this.currentCity){
            this.lastCity = this.currentCity
            this.getHomeInfo()
        }
    }
}
</script>

<style lang="stylus" scoped>
    .home
        background-color #f5f5f5
</style>
