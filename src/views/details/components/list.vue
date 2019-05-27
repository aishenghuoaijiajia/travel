<template>
    <div>
        <div class="content" v-for="item in categoryList">
            <div class="ticket border-bottom">
                <img class="ticket-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
                <span class="ticket-title">{{item.title}}</span>
            </div>
            <div v-if="item.children">
                <details-list :categoryList="item.children"></details-list>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailsList",
        props: {
            categoryList:  Array
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        padding-left .2rem
        .ticket
            padding .24rem 0 .26rem 0
            .ticket-img
                width .3rem
                height .3rem
            .ticket-title
                vertical-align middle
                font-size .32rem
                margin-left .08rem
</style>