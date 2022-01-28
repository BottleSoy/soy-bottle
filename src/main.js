import Vue from 'vue';

import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import jQuery from "jquery";

import Index from "@/pages/Index";
import Media from "@/pages/Media";
import Wishes from "@/pages/Wishes";

import App from "@/App";
import language from "@/lang/language";
import secret from "@/js/secret"


Vue.config.productionTip = false
Vue.config.async = true
Vue.config.performance = true
console.log("config",Vue.config)
Vue.prototype.jq = jQuery
Vue.prototype.lang = language.getLanguage()


Vue.prototype.secret = secret

Vue.use(VueRouter)
Vue.use(ElementUI)
let vue = new Vue({
	router: new VueRouter({
		routes: [
			{path: "/", component: Index},
			{path: "/media", component: Media},
			{path: "/wishes", component: Wishes},
		], scrollBehavior: () => ({x: 0, y: 0})
	}),
	render: h => h(App),
	config: {
		performance: true
	}
}).$mount('#app')

