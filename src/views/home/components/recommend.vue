<template>
    <div class="recommend">
        <div class="like-box">
            <img class="like-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
            <span class="like-title">猜你喜欢</span>
        </div>
        <ul class="like-list">
            <router-link tag="li"
                         class="like-item border-bottom"
                         v-for="item in list"
                         :to="'/details/'+item.id"
                         :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <p class="item-place">{{item.place}}</p>
                </div>
            </router-link>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "HomeRecommend",
        props: {
            list: Array
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .recommend
        margin-top 0.2rem
        background white
        .like-box
            padding .24rem 0 .26rem .2rem
            .like-img
                width .3rem
                height .3rem
            .like-title
                vertical-align middle
                font-size .32rem
                margin-left .08rem
        .like-list
            margin-left .24rem
            .like-item
                display flex
                padding .2rem 0
                .item-img
                    width 2rem
                    height 2rem
                .item-info
                    flex 1
                    padding-left .22rem
                    min-width 0
                    .item-title
                        margin-top .26rem
                        font-size .32rem
                        color #212121
                        ellipsis()
                    .item-desc
                        margin-top 0.14rem
                        font-size .24rem
                        ellipsis()
                    .item-place
                        margin-top 0.44rem
                        color: #616161
                        font-size: .24rem
                        line-height: .34rem




</style>