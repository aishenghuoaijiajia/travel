<template>
    <ul class="alpha">
        <li class="item"
            v-for="key in letters"
            :key="key"
            :ref="key"
            @click="handleClick"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >{{key}}</li>
    </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props: {
            cities: Object
        },
        data (){
            return {
                touchStatus: false,
                timer: null,
                startY: 0
            }
        },
        computed: {
            letters (){
                const letters =[]
                for(let key in this.cities){
                    letters.push(key)
                }
                return letters
            }
        },
        updated (){
            this.startY = this.$refs['A'][0].offsetTop
        },
        methods: {
            handleClick (e){
                this.bus.$emit('letterChange', e.target.innerText)
            },
            handleTouchStart(){
                this.touchStatus = true
            },
            handleTouchMove(e){
                if(this.touchStatus){
                    if (this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(() => {
                        const touchY = e.touches[0].clientY - 85
                        const index = Math.floor((touchY - this.startY) / 20)
                        if (index >= 0 && index < this.letters.length) {
                            this.bus.$emit('letterChange', this.letters[index])
                        }
                    }, 8)

                }
            },
            handleTouchEnd(){
                this.touchStatus = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .alpha
        position absolute
        top 1.72rem
        right 0
        bottom 0
        display flex
        flex-direction column
        justify-content center
        width: .4rem
        .item
            font-size .24rem
            line-height: .4rem
            color: $bgColor
            text-align center
</style>