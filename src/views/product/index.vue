<template>
	<div class="index">
		<div class="container">
			<div class="topview">
				<top-view :index="2"></top-view>
			</div>
			<div class="content">
				<div class="content_tit">Custom Box Style</div>
				<div class="text_content">
					<div class="content_list">
						<div class="content_list_img">
							<img src="../../assets/images/img_box1.png" >
						</div>
						<div class="content_list_con">
							<div class="content_list_tit">Die-Cut Box</div>
							<div class="content_list_text">A versatile custom mailer box that's stylish, sturdy and ready to ship directly in the mail.</div>
							<div class="content_list_button" @click="jump_detail(2)">Choose</div>
						</div>
					</div>
					<div class="content_list">
						<div class="content_list_img">
							<img src="../../assets/images/img_box2.png" >
						</div>
						<div class="content_list_con">
							<div class="content_list_tit">RSC</div>
							<div class="content_list_text">Command attention on retail shelves with our product boxes made from SBS paperboard</div>
							<div class="content_list_button" @click="jump_detail(1)">Choose</div>
						</div>
					</div>
<!--					<div class="content_list">-->
<!--						<div class="content_list_img">-->
<!--							<img src="../../assets/images/img_box3.png" >-->
<!--						</div>-->
<!--						<div class="content_list_con">-->
<!--							<div class="content_list_tit">OSC</div>-->
<!--							<div class="content_list_text">Our custom corrugated cardboard shipping boxes are strong and seriously durable.</div>-->
<!--							<div class="content_list_button" @click="jump_detail(1)">Choose</div>-->
<!--						</div>-->
<!--					</div>-->
				</div>
			</div>
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
	import TopView from '@/components/top.vue'
	import Footer from '@/components/footer.vue'
	export default{
		name:"productIndex",
		components:{
			TopView,
			Footer
		},
		data(){
			return{

			}
		},
		metaInfo: {
			title: "Choose your custom box style | Offest and Digital Printing",
			meta: [
			  { name: "description", content: "Get the box style you wants and they are ready to ship within 3 days to you. Put your logo on the box." },
			],
		},
		methods:{
			jump_detail (index) {
				console.log(index)
				if(index == 1){
					this.$router.push({ path: '/product/rsc_detail'})
				}else{
					this.$router.push({ path: '/product/item_details'})
				}
			},
		}
	}
</script>

<style lang="less" scoped>

	.container{
		background: #E4DFDB;
		.content{
			position: relative;
			padding-bottom: 200px;
			.content_tit {
				font-family: 'DMSerifDisplay-Regular';
				color: #46474B;
				font-size: 48px;
				padding: 30px 0  74px;
				text-align: center;
			}
			.text_content {
				margin: 0 231px 0 247px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.content_list {
					width: 390px;
					.content_list_img {
						width: 390px;
						height: 400px;
						display: flex;
						align-items: center;
						justify-content: center;
						img {
							width: 390px;
							height: auto;
						}
					}
					.content_list_con {
						text-align: center;
						.content_list_tit {
							font-family: 'Roboto-Bold';
							color: #232323;
							font-size: 25px;
							line-height: 50px;
							font-weight: bold;
						}
						.content_list_text {
							font-family: 'Roboto-Regular';
							color: #7C7C7C;
							font-size: 18px;
							height: 65px;
							margin-bottom: 20px;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 3;
							overflow: hidden;
						}
						.content_list_button {
							font-family: 'Roboto-Regular';
							color: #333333;
							font-size: 21px;
							width: 286px;
							height: 78px;
							line-height: 78px;
							background: #FFFFFF;
							border-radius: 39px;
							margin: auto;
							cursor: pointer;
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: 600px) {
		.content{
			padding: 0 20px !important;
			.content_tit{
				font-weight: bold;
				font-size: 55px !important;
			}
			.text_content {
				display: block !important;
				margin: 60px 30px 0 !important;
				padding: 0 20px !important;
				.content_list {
					width: 100% !important;
					margin-bottom: 200px;
					.content_list_img {
						margin: auto;
					}
					.content_list_con {
						.content_list_tit {
							font-size: 40px !important;
							line-height: 110px !important;
						}
						.content_list_text {
							font-size: 28px !important;
							margin-bottom: 80px !important;
						}
						.content_list_button {
							font-size: 30px !important;
						}
					}
				}
			}

		}
		.footer{
			padding: 60px !important;
		}
	}

	@supports (-webkit-overflow-scrolling: touch) {
		.content {
			padding: 0 20px !important;
			.text_content {
				margin: 60px 30px 0 !important;
				.content_list {
					font-weight: bold;
					font-size: 55px !important;
					.content_list_img {
						width: auto !important;
						height: auto !important;
						margin-bottom: 50px !important;
						img {
							width: 800px !important;
						}
					}
					.content_list_con {
						.content_list_tit {
							font-size: 40px !important;
							line-height: 180px !important;
						}
						.content_list_text {
							font-size: 28px !important;
							margin-bottom: 60px !important;
							height: 300px !important;
						}
						.content_list_button {
							font-size: 30px !important;
							width: 800px !important;
							height: 170px !important;
							line-height: 170px !important;
							border-radius: 80px !important;
						}
					}
				}
			}
		}
		.footer{
			padding: 80px !important;
		}
	}
</style>
