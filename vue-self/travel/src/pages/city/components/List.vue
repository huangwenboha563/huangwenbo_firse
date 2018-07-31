<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <!--热门城市-->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!--字母顺序（大循环嵌套小循环）-->
      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innterItem in item" :key="innterItem.id" @click="handleCityClick(innterItem.name)">
            {{innterItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /*这里要用高大上的better-scroll一直听说从未被使用过*/
  import Bscroll from 'better-scroll'
  export default {
    name: 'CityList', // 单文件组件的名字
    props: {
      hot: Array,
      cities: Object,
      letter: String
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0];
          // element 必须是一个dom元素
          this.scroll.scrollToElement(element);
        }
      }
    },
    methods: {
      handleCityClick (city) {
          this.$store.commit('changeCity',city);
          // 通过编程式导航回到首页
          this.$router.push('/');
      }
    },
    data () {
      return {
        msg: 'hello'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .border-topbottom {
    &:before {
      border-color: #ccc;
    }
    &:after {
      border-color: #ccc;
    }
  }

  .list {
    position: absolute;
    left: 0;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    overflow: hidden;
    .title {
      line-height: .54rem;
      background: #eee;
      padding-left: .2rem;
      color: #666;
      font-size: .26rem;
    }

    .button-list {
      padding: .1rem .6rem .1rem .1rem;
      overflow: hidden;
      .button-wrapper {
        width: 33.33%;
        float: left;
        .button {
          margin: .1rem;
          padding: .1rem 0px;
          border-radius: .06rem;
          text-align: center;
          border: .02rem solid #ccc;
        }
      }
    }

    .item-list {
      .item {
        line-height: .76rem;
        color: #666;
        padding-left: .2rem;

      }
    }
    .border-bottom {
      &:before {
        border-color: #ccc;
      }
    }
  }

  /*异步操作和比较复杂的同步操作可以放在actions（dispatch）里面->mutations里面才可以改变公用数据的值*/
  /*但是不一定，有时候我们可以绕过actions里面直接让mutations（commit）去改变那个数据*/
</style>
