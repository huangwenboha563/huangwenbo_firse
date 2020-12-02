# 用react实现一个todoList

> 思路
>
> 1. 先拆分组件，构建静态页面（静态组件）

```javascript
// 添加组件
class Add extends React.Component {
    constructor() {
        super();
    }

    // 点击的时候要往数组里面添加一条
    handleAdd = () => {
        // 这里要如何子组件改变父组件的状态呢？
        // 状态在哪个组件，更新状态的行为就应该定义在哪个组件
        // 这个方法是父组件通过props传递过来的
        let inputValue = this.myInput.value;
        if (!inputValue) {
            alert('请输入')
            return false;
        }
        this.props.toDoAdd(inputValue)
        this.myInput.value = ''
    }

    render() {
        return (
            <div>
                <input type="text" ref={input => this.myInput = input}/>
                <button onClick={this.handleAdd}>add #{this.props.count+1}</button>
            </div>
        )
    }
}

// 列表组件
class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let isEmpty = this.props.lists.length>0?false: true
        if (isEmpty) {
            return <h5>啥都么有</h5>
        } else {
            return (
                <div>
                    <ul>
                    	// 当需要再jsx控制的区域内，写一些js表达式，就需要 {} 了
                        {
                            this.props.lists.map(item => {
                                return <li>{item}</li>
                            })
                        }
                    </ul>
                </div>
            )
        }

    }
}

// 父组件
class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            lists: []
        }
    }

    toDoAdd = (todo) => {
        // 要想更新状态必须setState
        const lists = this.state.lists;
        lists.unshift(todo)
        this.setState({
            lists: lists
        })
    }

    render() {
        return (
            <div>
                <Add toDoAdd={this.toDoAdd} count={this.state.lists.length}></Add>
                <List lists={this.state.lists}></List>
            </div>
        )
    }
}

ReactDOM.render(<TodoList/>, document.getElementById('root'))
```



