<template>
  <div>
    <div class="search">
      <input type="text" placeholder="请输入城市名或拼音" class="search-input" v-model="keyword">
    </div>
    <div class="search-content" ref="search" v-show="keyword"> <!--如果keyword有值才让显示-->
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData" style="text-align: center">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: 'CitySearch', // 单文件组件的名字
    props: {
      cities: Object
    },
    data () {
      return {
        msg: 'hello',
        keyword: '',
        list: [],
        timer: null
      }
    },
    methods: {
      handleCityClick (city) {
        this.$store.commit('changeCity',city);
        // 通过编程式导航回到首页
        this.$router.push('/');
      }
    },
    computed: {
      hasNoData() { // 模板里面尽量不要写逻辑，让模板专注于视图
          return !this.list.length;
      }
    },
    mounted () {
        //
      this.scroll = new Bscroll(this.$refs.search);
    },
    watch: {
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
            this.list = [];
            return;
        }
        this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.cities) {
            this.cities[i].forEach((value) => { // 这里如果不用箭头函数this会有问题
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value);
              }
            });
          }
          this.list = result;
        }, 100)

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "~@/assets/less/varibles.less"; /*引入公用的*/
  .search {
    height: .72rem;
    padding: 0 .1rem;
    background: @bgColor;
    .search-input {
      height: .62rem;
      line-height: .62rem;
      width: 100%;
      text-align: center;
      border-radius: .06rem; /*厂商前缀会自动增加*/
      color: #666;
      padding: 0 .1rem;
    }
  }

  .search-content {
    overflow: hidden;
    background: #eee;
    z-index: 1;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    .search-item {
      line-height: .62rem;
      padding-left: .2rem;
      background: #fff;
      color: #666;
    }
  }
</style>
