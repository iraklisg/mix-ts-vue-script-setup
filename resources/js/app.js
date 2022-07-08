require('./bootstrap');

import Vue from 'vue';
import HelloWorld from "./components/HelloWorld";

Vue.component('HelloWorld', HelloWorld)

new Vue({
    el: '#app'
});
