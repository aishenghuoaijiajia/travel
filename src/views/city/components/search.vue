<template>
    <div>
        <div class="search">
            <input class="search-input"
                   type="text"
                   v-model="keyword"
                   placeholder="输入城市名或拼音">
        </div>
        <div class="wrapper" ref="wrapper">
            <ul class="search-content"  v-show="keyword">
                <li class="search-item border-bottom"
                    v-for="item in list"
                    @click="handleCityClick(item.name)"
                    :key="item.id">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasList">
                    没有找到匹配的数据
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import BScroll from 'better-scroll'
    import { mapMutations } from 'vuex'
    export default {
        name: "CitySearch",
        props: {
            cities: Object
        },
        data (){
            return {
                keyword: '',
                list: [],
                timer: null
            }
        },
        methods: {
            handleCityClick (city){
                this.changeCurrentCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCurrentCity'])
        },
        watch: {
            keyword (){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const result = []
                    for(let key in this.cities){
                        this.cities[key].forEach((item)=>{
                            if(item.spell.indexOf(this.keyword) != -1 || item.name.indexOf(this.keyword) != -1){
                                result.push(item)
                            }
                        })
                    }
                    this.list = result
                }, 100)

            }
        },
        computed: {
            hasList (){
                return !this.list.length
            }
        },
        mounted () {
            this.scroll = new BScroll(this.$refs.wrapper)
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        padding .1rem
        background $bgColor
        .search-input
            width 100%
            border-radius .06rem
            height: .62rem
            text-align center
            color: #666
    .search-content
        z-index 1
        overflow hidden
        position absolute
        top 1.7rem
        left 0
        right 0
        bottom 0
        background #eee
        .search-item
            line-height: .62rem
            padding-left: .2rem
            background: #fff
            color: #666
</style>