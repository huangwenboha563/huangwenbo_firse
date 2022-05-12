# hello-world-ts

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

```javascript
/*
 *  1. performance: 性能比vue快1.2~2倍
 *  2. tree shaking support: 按需编译，体积比vue2.x更小
 *  3. composition api: 组合api（类似React Hooks）
 *  4. Better TS support：更好的 ts 支持
 *  5. custom render api: 暴露了自定义渲染api
 *  6. fragment,teleport(portal) suspense: 更先进的组件
 */
/*
 *  如何变快的？
 *  1. diff 方法优化
 *   + vue2中的虚拟dom是进行全量的对比
 *   + vue3中新增了静态标记（patchflag）
 *   + 在与上次节点进行对比的时候，只对比带有patch flag的节点
 *   + 并且可以通过flag的信息得知当前节点要对比的具体内容
 */
```
