<template>
    <div  class="list" ref="wrapper">
        <div class="content">
            <div class="area">
                <p class="list-title">我的城市</p>
                <div class="city-list">
                    <div class="city-box">
                        <div class="city">{{currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <p class="list-title">热门城市</p>
                <div class="city-list">
                    <div class="city-box" v-for="item in hotCities" :key="item.id">
                        <div class="city" @click="handleCityClick(item.name)">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area"
                 v-for="(item, key) in cities"
                 :key="key"
                 :ref="key">
                <p class="list-title">{{key}}</p>
                <div class="city-item border-bottom"
                     v-for="list in item"
                     @click="handleCityClick(list.name)"
                     :key="list.id">
                    {{list.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "CityList",
        props: {
            cities: Object,
            hotCities:  Array
        },
        methods: {
            toScroll (value){
                const  ele = this.$refs[value][0]
                this.scroll.scrollToElement(ele)
            },
            handleCityClick (city){
                this.$store.commit('changeCurrentCity',city)
                this.$router.push('/')
            }
        },
        mounted () {
            this.scroll = new BScroll(this.$refs.wrapper)
            this.bus.$on('letterChange', value => {
                this.toScroll(value)
            })
        },
        computed: {
            currentCity () {
                return this.$store.state.currentCity
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .list
        overflow: hidden
        position: absolute
        top: 1.72rem
        left: 0
        right: 0
        bottom: 0
        .list-title
            font-size .24rem
            padding .24rem .2rem
            background-color #f5f5f5
        .city-list
            overflow hidden
            padding: .1rem .6rem .1rem .1rem
            .city-box
                float left
                width 33.33%
                padding 0.1rem
                box-sizing border-box
                .city
                    border .02rem solid #ccc
                    border-radius: .06rem
                    padding: .1rem 0
                    text-align: center
        .city-item
            line-height: .76rem
            padding-left: .2rem

</style>