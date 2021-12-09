<template>
	<div id="app">
		<!-- <LeftView v-if="route_status == true"></LeftView> -->
		<router-view  :class="route_status == true ?'route':'zroute' " />
	</div>
</template>

<script>
	// import LeftView from '@/components/left.vue'
	export default {
		name: 'App',
		components: {
			// LeftView
		},
		data() {
			return {
				res: {},
				route_status: true,
			}
		},
		watch: {
			// 监听路由变化判断路由为login/index  页面去掉全局组件
			// $route(to, from) {
			// 	console.log(this.$route.query)
			// 	let that = this;
			// 	console.log('watch....')
			// 	console.log(to.path)
			// 	if (to.path == '/login/index') {
			// 		that.route_status = false
			// 	} else {
			// 		that.route_status = true
			// 		// 判断是否从用户端注册过来
			// 		if(this.$route.query.token != '' && this.$route.query.token != null  && this.$route.query.token != undefined){
			// 			console.log('执行到这里')
			// 			sessionStorage.setItem("token", this.$route.query.token)
			// 			sessionStorage.setItem("userId", this.$route.query.userId)
			// 		}else{
			// 			if ( !sessionStorage.getItem("token") ) {
			// 				this.$message({
			// 					showClose: true,
			// 					message: '请先登录',
			// 					type: 'error'
			// 				});
			// 				this.$router.push({ path: '/login/index'})
			// 			}
			// 		}
			// 	}
			// }
		},
		mounted() {
			// console.log(this.$route.query)
			//  let that = this;
			//  console.log('App.vue')
			//  console.log(that.$route.path)
			// 判断路由为login/index  页面去掉全局组件
			// if(that.$route.path == '/login/index'){
			// 	that.route_status = false
			// }else{
			// 	that.route_status = true
			// 	// 判断是否从用户端注册过来
			// 	if(this.$route.query.token != '' && this.$route.query.token != null  && this.$route.query.token != undefined){
			// 		sessionStorage.setItem("token", this.$route.query.token)
			// 		sessionStorage.setItem("userId", this.$route.query.userId)
			// 	}else{
			// 		if ( !sessionStorage.getItem("token") ) {
			// 			this.$message({
			// 				showClose: true,
			// 				message: '请先登录',
			// 				type: 'error'
			// 			});
			// 			this.$router.push({ path: '/login/index'})
			// 		}
			// 	}
			// }
		},
		needSerialize: true,
		async created() {
		  // this.res = await fetch()
			console.log('.....Created.....')
			this.$router.beforeEach((to, from, next) => {
			 //    console.log(to);
				// console.log(from);
				// console.log(next);
			    next();
			});

		},
	}
</script>
<style>
	/* 轮播图引用样式 */
	/* 大于1080px小于1920px的时候执行下面的CSS。 */
	@import url("common/font/font.css");
	@media screen and (max-width:690px){
		* {
			zoom: 1.1 !important;
		}
	}
	.route {
		height: 100% !important;
	}
	body,
	html {
		margin: 0 0 !important;
		/* background: #2A2E3F; */
		height: 100%;
	}
	input,textarea,select,button{
		outline:none;
	}
	audio{
		outline:none;
	}
	/* 谷歌 */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
	    -webkit-appearance: none;
	    appearance: none;
	    margin: 0;
	}
	/* 火狐 */
	input{
	    -moz-appearance:textfield;
	}
	.el-form-item__label {
		padding: 0 0px 0 0;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.route {
		/* position: fixed; */
		/* top: 137px; */
		/* left: 208px; */
		/* height: calc(100vh - 120px); */
		/* width: calc(100% - 202px); */
		width: 100%;
		/* height: calc(100% - 0px); */
		/* height: calc(100vh); */
		height: 100vh;
		overflow: scroll;
	}
	.zroute{

	}
	/* 大于1080px小于1920px的时候执行下面的CSS。 */
	/* @media screen and (min-width:1080px) and (max-width:1919px) {
    .route {
      height: 100vh;
      zoom: 0.9;
    }
  } */

	.route::-webkit-scrollbar {
		display: none;
		/* Chrome Safari */
	}

	input,
	textarea {
		outline: none;
	}
</style>
