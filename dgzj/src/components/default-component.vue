<template>
    <ul>
      <li v-for="item in data" :key="item.name">
        {{item.name}}
        <DefaultComponent v-if="item.child" :data="item.child"></DefaultComponent>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'DefaultComponent',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
