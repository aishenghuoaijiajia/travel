<template>
    <div class="weekend">
        <p class="weekend-title">周末去哪儿</p>
        <ul class="weekend-list">
            <li class="weekend-item" v-for="item in list" :key="item.id">
                <img class="item-img" :src="item.imgUrl">
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
        props: {
            list: Array
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