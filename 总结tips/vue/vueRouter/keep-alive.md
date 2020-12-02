# keep-alive

+ keep-alive是Vue内置的一个组件

> 使用keep-alive时候组件内部的，activated和deactivated才会被触发
>
> 使用keep-alive时候created和destroyed就不会频繁的被调用，性能方面会好些
>
> 问题：如果用了keep-alive之后created不执行了怎么处理？

```
// Profile   User是组件的名字
<keep-alive exclude="Profile,User">
	<router-view/>
</keep-alive>
```

