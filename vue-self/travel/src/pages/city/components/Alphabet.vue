<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item) in letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet', // 单文件组件的名字
    props: {
      cities: Object
    },
    computed: {
      letters() {
        const letters = [];
        for (let i in this.cities) {
          letters.push(i);
        }
        return letters;
        // ['A','B','C']
      }
    },
    methods: {
      /*兄弟组件之间的通信用bus，但是我们今天用另外一种思路
       *  把alphabet的数据传给给city.vue
       *  city.vue帮我们转发给list.vue
       *
       */
      handleLetterClick(e) {
        this.$emit('change', e.target.innerText);
      },
      handleTouchStart () {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus) { // 只有在touchsStatus是true的时候才去做
          if (this.timer) {
              clearTimeout(this.timer)
          }
          this.timer = setTimeout(()=> {// 函数节流大大降低touchMove的频路，提高性能
            const touchY = e.touches[0].clientY -79;
            const index = Math.floor((touchY-this.startY)/20);
            console.log(index);
            if (index>=0 && (index < this.letters.length)) {
              this.$emit('change',this.letters[index]);
            }
          },16)

        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      }
    },
    data () {
      return {
        msg: 'hello',
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "~@/assets/less/varibles.less"; /*引入公用的*/
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 1.58rem;
    bottom: 0;
    width: .4rem;
    .item {
      line-height: .4rem;
      text-align: center;
      color: @bgColor;
    }
  }
</style>
