<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
  //  定义了就要引用
  import axios from 'axios'
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  export default {
    name: "City", // 导出的组价的名字
    components: { // 局部组件需要注册
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    data () {
      return {
        cities: {},
        hotCities: [],
        letter: ''
      }
    },
    methods: {
      getCityInfo () {
        axios.get('static/mock/city.json')
          .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc (res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities
        }
      },
      handleLetterChange (letter) {
        console.log(letter);
        this.letter = letter;// 当接受到子组件的letter以后把letter赋值
      }
    },
    mounted () {
      this.getCityInfo();
    }

  }
</script>

<style scoped lang="less">

</style>
