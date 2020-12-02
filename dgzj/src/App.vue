<template>
  <div>
    <DefaultComponent :data="data"></DefaultComponent>
  </div>
</template>

<script>
import DefaultComponent from './components/default-component'
export default {
  name: 'App',
  data () {
    return {
      data: [{
        name: '山西',
        child: [
          {
            name: '运城',
            child: [
              {
                name: '稷山'
              },
              {
                name: '万荣'
              },
              {
                name: '河津'
              },
              {
                name: '芮城'
              }
            ]
          },
          {
            name: '大同'
          },
          {
            name: '吕梁'
          },
          {
            name: '太原',
            child: [
              { name: '小店' }
            ]
          }
        ]
      }]
    }
  },
  components: {
    DefaultComponent
  }
}
</script>

<style>
</style>
