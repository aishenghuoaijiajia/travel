<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
    import CityHeader from './components/header'
    import CitySearch from './components/search'
    import CityList from './components/list'
    import CityAlphabet from './components/alphabet'
    export default {
        name: "City",
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data (){
            return{
                cities: {},
                hotCities: []
            }
        },
        methods: {
            getCityInfo (){
                this.$axios.get('/api/city.json')
                    .then(this.getCityInfoSuccess)
            },
            getCityInfoSuccess (res){
                let reData = res.data
                if(reData.ret && reData.data){
                    this.cities = reData.data.cities
                    this.hotCities = reData.data.hotCities
                }
            }
        },
        mounted() {
            this.getCityInfo()
        }
    }
</script>

<style scoped>

</style>