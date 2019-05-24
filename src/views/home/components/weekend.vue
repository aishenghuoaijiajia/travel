<template>
    <div class="weekend">
        <p class="weekend-title">周末去哪儿</p>
        <ul class="weekend-list">
            <li class="weekend-item" v-for="item in datalist" :key="item.id">
                <img class="item-img" :src="item.imgSrc">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
        data (){
            return {
                datalist: [{
                    id: '0001',
                    imgSrc: 'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
                    title: '南京必打卡',
                    desc: '看尽王侯将相荣辱成败，六朝金粉潮起潮落'
                },{
                    id: '0002',
                    imgSrc: 'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
                    title: '南京必打卡',
                    desc: '看尽王侯将相荣辱成败，六朝金粉潮起潮落'
                },{
                    id: '0003',
                    imgSrc: 'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
                    title: '南京必打卡',
                    desc: '看尽王侯将相荣辱成败，六朝金粉潮起潮落'
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .weekend-title
        padding-left .26rem;
        font-size .32rem
        line-height .8rem
        color #212121
    .weekend-list .weekend-item
        margin-bottom 0.1rem
        background-color white
        .item-img
            width 100%
        .item-info
            padding: .14rem .2rem .2rem .2rem;
            .item-title
                font-size .28rem
                line-height .48rem
                color: #212121
                ellipsis()
            .item-desc
                font-size .24rem
                line-height .42rem
                color: #616161
                ellipsis()

</style>