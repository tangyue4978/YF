<template>
	<div class="index">
		<div id="top">
			<div class="logo_area">
				<img src="../assets/images/logo.png" class="logo"/>
			</div>
			<div class="top_menu" v-if="innerWidth<=600" @click="open">
				<img v-show="status" src="../assets/images/clov.png" class="top_menu_img">
				<img v-show="!status" src="../assets/images/menu.png" class="top_menu_img">
			</div>
			<div class="top" v-if="innerWidth>600||status">
				<div :class="nav_index==1?'nav av':'nav'" @click="nav_tab(1)">Home</div>
				<div :class="nav_index==2?'nav av':'nav'" @click="nav_tab(2)">Product</div>
				<div :class="nav_index==3?'nav av':'nav'" @click="nav_tab(3)">About Us</div>
				<div :class="nav_index==4?'nav av':'nav'" @click="nav_tab(4)">Job Career</div>
				<div :class="nav_index==5?'nav av':'nav'" @click="nav_tab(5)">Gallery</div>
				<div :class="nav_index==6?'nav av':'nav'" @click="nav_tab(6)">Contact Us</div>
			</div>
		</div>
		<div class="topDiv"></div>
	</div>
</template>

<script>
	export default{
		name:"index",
		props: ['index'],
		data(){
			return{
				// nav_index:1,
				nav_index:this.index,
				innerWidth: window.innerWidth,
				status: false,
			}
		},
		methods:{
			open () {
				this.status = !this.status
			},
			nav_tab(index){
				this.nav_index = index
				if(this.nav_index == 1){
					this.$router.push({ path: '/'})
				}else if(this.nav_index == 2){
					this.$router.push({ path: '/product/index'})
				}else if(this.nav_index == 3){
					this.$router.push({ path: '/about_us/index'})
				}else if(this.nav_index == 4){
					this.$router.push({ path: '/job_career/job_career'})
				}else if(this.nav_index == 5){
					this.$router.push({ path: '/gallery/gallery'})
				}else if(this.nav_index == 6){
					this.$router.push({ path: '/contact/contact_us'})
				}
			},
		}
	}
</script>

<style  lang="less" scoped>
	#top{
		display: flex;
		/* align-items: center; */
		justify-content: space-between;
		.logo{
			width: 127px;
			height: 165px;
			margin: 22px 0 0 113px;
		}
		.top{
			/* width: 1041px; */
			display: flex;
			align-items: center;
			margin: 32px 123px 0 0;
			.nav{
				font-family: Roboto-Regular;
				width: 153px;
				height: 52px;
				color: #2D2D2D;
				font-size: 20px;
				text-align: center;
				line-height: 52px;
				cursor: pointer;
			}
			.av{
				font-family: Roboto-Bold;
				width: 153px;
				height: 52px;
				background: rgba(45, 45, 45, 0.08);
				border-radius: 26px;
				font-weight: bold;
			}
		}
	}
	
	// 媒体查询
	@media screen and (max-width: 600px) {
		#top{
			align-items: center;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			margin: auto;
			height: 200px;
			z-index: 9999;
			background: #E4DFDB;
			.logo{
				margin: 22px 0 0 40px;
				width: 100px;
				height: auto;
			}
			.top_menu {
				width: 100px;
				height: 100px;
				margin-right: 40px;
				.top_menu_img {
					width: 100px;
					height: auto;
				}
			}
			.top{
				display: block !important;
				margin: 0 !important;
				position: fixed;
				top: 160px;
				right: 20px;
				background-color: #ffffff;
				border-radius: 20px;
				overflow: hidden;
				padding: 0 20px;
				// width: 700px;
				.nav{
					font-family: Roboto-Regular;
					width: 350px;
					height: 80px;
					color: #2D2D2D !important;
					font-size: 30px;
					text-align: center;
					line-height: 80px;
					cursor: pointer;
				
				}
				.av{
					font-family: Roboto-Bold;
					width: 350px;
					height: 80px;
					background: rgba(45, 45, 45, 0.08);
					border-radius: 0;
					font-weight: bold;
				}
			}
		}
		.topDiv {
			height: 200px;
		}
	}
	
	// 兼容苹果
	@supports (-webkit-overflow-scrolling: touch) {
		#top {
			height: 350px !important;
			.logo_area {
				img {
					width: 200px !important;
				}
			}
			.top_menu {
				margin-right: 100px !important;
				margin-bottom: 60px !important;
				.top_menu_img {
					width: 180px !important;
					padding: 0 ;
				}
			}
			.top {
				top: 300px !important;
				.nav {
					width: 600px !important;
					padding: 40px 0 !important;
					height: auto !important;
				}
			}
		}
		.topDiv {
			height: 300px !important;
		}
	}
</style>
