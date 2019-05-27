<template>
    <div>
        <details-banner :sightName="sightName"
                        :bannerImg="bannerImg"
                        :gallaryImgs="gallaryImgs">
        </details-banner>
        <details-header></details-header>
        <div class="content">
            <details-list :categoryList="categoryList"></details-list>
        </div>
    </div>
</template>

        <script>
            import DetailsBanner from './components/banner'
            import DetailsHeader from './components/header'
            import DetailsList from './components/list'

            export default {
                name: "Details",
                components: {
                    DetailsBanner,
                    DetailsHeader,
                    DetailsList
                },
                data (){
            return {
                sightName: '',
                bannerImg: '',
                gallaryImgs: [],
                categoryList: [],
            }
        },
        methods: {
            getDetailsInfo (){
                this.$axios.get('/api/detail.json',{
                    params:{
                        id: this.$route.params.id
                    }
                }).then(this.getDetailsInfoSuccess)
            },
            getDetailsInfoSuccess (res){
                let data = res.data
                if(data.ret && data.data){
                    this.sightName = data.data.sightName
                    this.bannerImg = data.data.bannerImg
                    this.gallaryImgs = data.data.gallaryImgs
                    this.categoryList = data.data.categoryList
                }
            }
        },
        mounted() {
            this.getDetailsInfo()
        }

    }
</script>

<style lang="stylus" scoped>
    .content
        height 50rem

</style>