<template>
	<div class="footer">
		<div class="footer_header">
			<div class="footer_name">YF Packaging Sdn Bhd</div>
			<div class="img" @click="jump_link(1)" >
				<img src="../assets/images/icon_f.png"  />
			</div>
			<div class="img" @click="jump_link(2)" >
				<img src="../assets/images/instagram.png"  />
			</div>
			<div class="img" @click="jump_link(3)" >
				<img src="../assets/images/youtube.png"  />
			</div>
		</div>
		<div class="footer_content">
			<div class="left_block">
				<div class="position">
					<div class="icon_position">
						<img src="../assets/images/icon_position_f.png" />
					</div>
					<div class="text">Lot 10-15, Jalan Usaha 5, Fasa 2, Kawasan Perindustrian Merlimau, 77300 Merlimau, Melaka, Malaysia.</div>
				</div>
				<div class="clock">
					<img src="../assets/images/icon_clock_f.png" />
					<div class="clock_right">
						<div class="label">Business Hours</div>
						<div class="clock_info">
							<div class="label_name">Monday - Friday</div>
							<div class="text_value">8:00 AM - 5:00 PM</div>
						</div>
						<div class="clock_info">
							<div class="label_name">Saturday</div>
							<div class="text_value">8:00 AM - 1:00 PM</div>
						</div>
						<div class="clock_info">
							<div class="label_name">Sunday</div>
							<div class="text_value">Closed</div>
						</div>
					</div>
				</div>
			</div>
			<div class="right_block">
				<div class="telephone">
					<img src="../assets/images/icon_telephone_f.png" />
					<div class="text">+606-263 5273 (Mr Ku)</div>
				</div>
				<div class="phone_area">
					<div class="phone_icon">
						<img src="../assets/images/icon_mobilephone_f.png" />
					</div>
					<div class="text">+6011-6321 8668 (Mr Ku)</div>
					<div class="phone">
						<img src="../assets/images/icon_phone.png" />
					</div>
					<div class="wechat">
						<img src="../assets/images/icon_wechat.png" />
					</div>
				</div>
				<div class="msg">
					<img src="../assets/images/icon_msg_f.png" />
					<div class="msg_right">
						<div class="text_one">For Customer / Product Enquiry ONLY</div>
						<div class="text_two">online@yfpackagingsb.com</div>
					</div>
				</div>
				<!-- <div class="msg">
					<img src="../assets/images/icon_msg_f.png" />
					<div class="msg_right">
						<div class="text_one">For Job Career / Send Resume ONLY</div>
						<div class="text_two">viviantan@yfpackagingsb.com</div>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"index",
		data(){
			return{
				// nav_index:1
				jump_index:1
			}
		},
		methods:{
			jump_link(index){
				this.jump_index = index
				if(this.jump_index ==  1){
					//脸书
					window.open('https://www.facebook.com/Yfpackagingsb',"_blank")
				}else if(this.jump_index == 2){
					//instagram
					window.open('https://www.instagram.com/yf_packaging/',"_blank")
				}else if(this.jump_index == 3){
					//youtube
					window.open('https://www.youtube.com/channel/UC16-Xf58EWwCV0QqF-CrF3w',"_blank")
				}
			},
			// nav_tab(index){
			// 	this.nav_index = index
			// 	if(this.nav_index == 1){
			// 		// this.$router.push({ path: '/companion/index'})
			// 	}else if(this.nav_index == 2){
			// 		this.$router.push({ path: '/product/item_details'})
			// 	}else if(this.nav_index == 3){
			// 		// this.$router.push({ path: '/companion/index'})
			// 	}else if(this.nav_index == 4){
			// 		this.$router.push({ path: '/job_career/job_career'})
			// 	}else if(this.nav_index == 5){
			// 		this.$router.push({ path: '/gallery/gallery'})
			// 	}else if(this.nav_index == 6){
			// 		this.$router.push({ path: '/contact/contact_us'})
			// 	}
			// },
		}
	}
</script>

<style lang="less" scoped>
	.footer{
		// height: 529px;
		background: #7C736D;
		padding: 60px 287px 113px 199px;
		.footer_header{
			// padding: 60px 287px 0 199px;
			display: flex;
			align-items: center;
			.footer_name{
				font-size: 48px;
				font-family: DMSerifDisplay-Regular;
				line-height: 58px;
				color: #FFFFFF;
			}
			.img{
				width: 32px;
				height: 32px;
				background: #ffffff;
				margin-left: 17px;
				border-radius: 10px;
				cursor: pointer;
				img{
					width: 33px;
					height: 33px;
				}
			}
		}
		.footer_content{
			margin-top: 41px;
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			.left_block{
				.position{
					display: flex;
					align-items: flex-start;
					.icon_position{
						width: 32px;
						height: 32px;
						margin-right: 17px;
						text-align: center;
						img{
							width: 20px;
							height: 27px;
						}
					}
					.text{
						width: 640px;
						height: 89px;
						font-size: 21px;
						font-family: Roboto-Regular;
						// line-height: 32px;
						color: #E7E7E7;
					}
				}
				.clock{
					display: flex;
					align-items: flex-start;
					margin-top: 16px;
					img{
						width: 32px;
						height: 32px;
						margin-right: 17px;
					}
					.clock_right{
						.label{
							font-size: 20px;
							font-family: Roboto-Bold;
							color: #FFFFFF;
							margin-bottom: 16px;
							font-weight: bold;
						}
						.clock_info{
							// width: 375px;
							display: flex;
							align-items: center;
							margin-bottom: 12px;
							// justify-content: space-between;
							.label_name{
								width: 200px;
								font-size: 21px;
								font-family: Roboto-Regular;
								color: #E7E7E7;
							}
							.text_value{
								width: 240px;
								font-size: 20px;
								font-family: Roboto-Bold;
								color: #FFFFFF;
								margin-left: 47px;
								text-align: left;
								font-weight: bold;
							}
						}
					}
				}
			}
			.right_block{
				.telephone{
					display: flex;
					align-items: center;
					margin-bottom: 27px;
					img{
						width: 27px;
						height: 24px;
						margin-right: 25px;
					}
					.text{
						font-size: 21px;
						font-family: Roboto-Regular;
						line-height: 32px;
						color: #E7E7E7;
					}
				}
				.phone_area{
					display: flex;
					align-items: center;
					margin: 27px 0;
					.phone_icon{
						width: 27px;
						text-align: center;
						img{
							width: 17px;
							height: 31px;
						}
					}
					.text{
						font-size: 21px;
						font-family: Roboto-Regular;
						line-height: 32px;
						color: #E7E7E7;
						margin: 0 7px 0 25px;
					}
					.phone{
						width: 31px;
						height: 31px;
						border-radius: 5px;
						margin-right: 22px;
						background-color: #E7E7E7;
						img{
							width: 32px;
							height: 32px;
						}
					}
					.wechat{
						width: 31px;
						height: 31px;
						border-radius: 5px;
						background-color: #E7E7E7;
						img{
							width: 32px;
							height: 32px;
						}
					}
				}
				.msg{
					display: flex;
					align-items: flex-start;
					
					img{
						width: 26px;
						height: 19px;
						margin-right: 24px;
					}
					.msg_right{
						margin-bottom: 30px;
						.text_one{
							font-size: 18px;
							font-family: Roboto-Regular;
							line-height: 22px;
							color: #D5D5D5;
						}
						.text_two{
							font-size: 20px;
							font-family: Roboto-Bold;
							line-height: 24px;
							color: #FFFFFF;
							font-weight: bold;
						}
					}
				}
			}
		}
	}
	// 媒体查询
	@media screen and (max-width: 600px) {
		.footer {
			padding: 60px 40px;
			.img {
				width: 40px !important;
				height: 40px !important;
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					width: 40px !important;
					height: auto !important;
				}
			}
			.footer_content {
				flex-direction: column;
				
				.position {
					height: 90px !important;
					.icon_position {
						width: 42px !important;
						height: 90px !important;
						display: flex;
						align-items: flex-start;
						justify-content: center;
						img {
							width: 20px !important;
							height: auto !important;
						}
					}
					.text {
						width: auto !important;
						height: 90px !important;
						font-size: 23px !important;
					}
				}
				.right_block {
					margin-top: 40px;
					.phone_icon {
						width: 27px !important;
						height: 120px;
						img {
							width: 17px !important;
						}
					}
					.phone, .wechat {
						width: 40px !important;
						height: 40px !important;
						display: flex;
						align-items: center;
						justify-content: center;
						img {
							width: 40px !important;
							height: auto !important;
						}
					}
				}
			}
		}
	}
	// 兼容苹果
	@supports (-webkit-overflow-scrolling: touch) {
		.footer {
			padding: 120px 80px;
			.img {
				width: 80px !important;
				height: 80px !important;
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					width: 80px !important;
					height: auto !important;
				}
			}
			.footer_content {
				flex-direction: column;
				margin-top: 100px !important;
				.position {
					height: auto !important;
					.icon_position {
						width: 84px !important;
						height: auto !important;
						display: flex;
						align-items: flex-start;
						justify-content: center;
						img {
							width: 50px !important;
							height: auto !important;
							margin-top: 10px !important;
						}
					}
					.text {
						width: auto !important;
						height: auto !important;
						font-size: 26px !important;
					}
				}
				.clock {
					margin-top: 60px !important;
					img {
						width: 70px !important;
						height: auto !important;
						margin-top: 10px !important;
					}
					.clock_right {
						width: 90% !important;
						.label {
							font-size: 28px !important;
						}
						.label_name {
							width: 50% !important;
							font-size: 21px !important;
						}
						.text_value {
							width: 50% !important;
							font-size: 21px !important;
						}
					}
				}
				.right_block {
					margin-top: 60px;
					.telephone {
						img {
							width: 60px !important;
							height: auto !important;
						}
						.text {
							line-height: 60px !important;
						}
					}
					.phone_icon {
						width: 50px !important;
						height: auto !important;
						img {
							width: 40px !important;
							height: auto !important;
							vertical-align: 20px;
						}
					}
					.msg {
						img {
							width: 60px !important;
							height: auto !important;
							margin-top: 18px !important;
						}
						.msg_right {
							margin-bottom: 80px !important;
							.text_one, .text_two {
								line-height: 80px !important;
								font-size: 21px !important;
							}
						}
					}
					.phone, .wechat {
						width: 80px !important;
						height: 80px !important;
						display: flex;
						align-items: center;
						justify-content: center;
						img {
							width: 80px !important;
							height: auto !important;
						}
					}
				}
			}
		}
	}
</style>
