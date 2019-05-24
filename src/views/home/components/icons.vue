<template>
    <div class="icons">
        <swiper  :options="swiperOption">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="data in page" :key="data.id">
                    <img class="icon-img" :src="data.src">
                    <p class="icon-desc">{{data.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>

</template>

<script>
    export default {
        name: "HomeIcons",
        data (){
            return{
                swiperOption: {
                    autoplay: false
                },
                dataLists:[{
                    id: 1,
                    src: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    desc: '景点门票'
                },{
                    id: 2,
                    src: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    desc: '景点门票'
                },{
                    id: 3,
                    src: "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                    desc: '景点门票'
                },{
                    id: 4,
                    src: "http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png",
                    desc: '景点门票'
                },{
                    id: 5,
                    src: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    desc: '景点门票'
                },{
                    id: 6,
                    src: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    desc: '景点门票'
                },{
                    id: 7,
                    src: "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                    desc: '景点门票'
                },{
                    id: 8,
                    src: "http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png",
                    desc: '景点门票'
                },{
                    id: 9,
                    src: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/94f7f5bf7b0f4d238dd68d718f102f40.png",
                    desc: '景点门票'
                },{
                    id: 10,
                    src: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/94f7f5bf7b0f4d238dd68d718f102f40.png",
                    desc: '景点门票'
                },{
                    id: 11,
                    src: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/94f7f5bf7b0f4d238dd68d718f102f40.png",
                    desc: '景点门票'
                }]
            }
        },
        computed: {
            pages () {
                const pages = []
                this.dataLists.forEach((item, index) => {
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