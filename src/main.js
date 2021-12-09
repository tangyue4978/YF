import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import HomeRouter from './router/home'
import less from 'less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueDND from 'awe-dnd';
import Meta from "vue-meta";
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.use(VueVideoPlayer)

// 头部信息
Vue.use(Meta);

// 注册-拖拽组件
Vue.use(VueDND);
Vue.use(ElementUI);
Vue.use(less)

Vue.prototype.initDete = function (date) {
  var timestamp4 = new Date(date); //直接用 new Date(时间戳) 格式转化获得当前时间
  return timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8)
}
Vue.prototype.initDetes = function (date) {
  var time1 = new Date(date).getTime() / 1000
  return time1
}

Vue.prototype.returns = function () {
  history.go(-1)
}

Vue.config.productionTip = false
// Vue.prototype.HOST = 'http://8002.frp.wanghuiwen.com/'
Vue.prototype.HOST = 'https://wanghuiwen.com/game/api/'
Vue.prototype.innerWidth = window.innerWidth

Vue.use(VueRouter)
export default function createApp() {
  const router = new VueRouter({
    mode: 'hash',
    routes: [
      {
        path: '/',
        name: 'home',
        component: () =>
          import ('@/views/home/index'),
        meta: {
          ssr: true
        }
      },
      {
        path: '/gallery/gallery',
        name: 'gallery',
        component: () =>
          import ('@/views/gallery/gallery'),
        meta: {
          ssr: true
        }
      },
      {
        path: '/product/index',
        name: 'productIndex',
        component: () =>
          import ('@/views/product/index'),
        meta: {
          ssr: true
        }
      },
      {
        path: '/product/item_details',
        name: 'item_details',
        component: () =>
          import ('@/views/product/item_details'),
        meta: {
          ssr: true
        }
      },
      {
        path: '/contact/contact_us',
        name: 'contact_us',
        component: () =>
          import ('@/views/contact/contact_us'),
        meta: {
          ssr: true
        }
      },
      {
        path: '/job_career/job_career',
        name: 'job_career',
        component: () =>
          import ('@/views/job_career/job_career'),
        meta: {
          ssr: true
        }
      },
      {
        path: '/job_career/job_career_detail',
        name: 'job_career_detail',
        component: () =>
          import ('@/views/job_career/job_career_detail'),
        meta: {
          ssr: true
        }
      },
      {
        path: '/about_us/index',
        name: 'about_us',
        component: () =>
          import ('@/views/about_us/index'),
        meta: {
          ssr: true
        }
      },
      {
        path: '/product/rsc_detail',
        name: 'rsc_detail',
        component: () =>
          import ('@/views/product/rsc_detail'),
        meta: {
          ssr: true
        }
      },
    ],
  })

	router.beforeEach((to, from, next) => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;

		// 兼容IE
		window.scrollTo(0, 0);
		next();
	})

  // 2. Create the root component option
  const app = {
    router,
    // This is necessary, it is for vue-meta
    head: {},
    render: h => h(App)
  }

  // 3. return
  return app
}
