import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
createApp(App).use(store).use(router).mount('#app');
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(this.name + "eating");
    }
}
const p = new Person(22, 28);
alert(p.name);
//# sourceMappingURL=main.js.map