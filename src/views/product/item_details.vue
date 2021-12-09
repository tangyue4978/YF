<template>
	<div class="index">
		<div class="container">
			<div class="content">
				<top-view :index="2"></top-view>
				<div class="back" @click="$router.go(-1)"><< Back</div>
				<div class="content_detail">
					<!-- <div class="detail_left" v-if="product_index == 1">
						<img src="../../assets/images/img_rsc.png" />
					</div> -->
					<div class="detail_left_two">
						<img src="../../assets/images/die_cut_img.png" />
					</div>
					<div class="detail_right">
						<img src="../../assets/images/img_box.png" class="detail_box"/>
						<div class="box_name">Die-Cut Box</div>
						<div class="box_intro" v-if="product_index == 2">A versatile custom mailer box that's stylish, sturdy and ready to ship directly in the mail. It looks great in any color and works for retail-ready gift boxes, subscription boxes, and e-commerce packaging.</div>
						<div class="box_ps" v-if="product_index == 2">
							<div class="">PS:</div>
							<div class="">1. Key in length, width, height and quantity you desired.</div>
							<div class="">2. Check for the TOTAL PRICE.</div>
							<div class="">3. Get quote and our customer service will   contact you shortly.</div>
						</div>
						<div class="quantity_select">
							<div :class="paper_index == 1 ? 'white_paper' : 'paper_block'" @click="tabQuantity(1)">White Paper</div>
							<div :class="paper_index == 2 ? 'brown_paper' : 'paper_block'" @click="tabQuantity(2)">Brown Paper</div>
						</div>
						<div class="quantity_select">
							<div :class="colour_index == 1 ? 'white_paper' : 'paper_block'" @click="tabColour(1)">Full colour</div>
							<div :class="colour_index == 2 ? 'white_paper' : 'paper_block'" @click="tabColour(2)">1-2 colour</div>
							<div :class="colour_index == 3 ? 'white_paper' : 'paper_block'" @click="tabColour(3)">Plain</div>
						</div>
						<div class="size">
							<div class="label">Length(L)</div>
							<input class="text_value" v-on:blur="handleInput" v-on:input="totalValue2" v-model="box.length"/>
						</div>
						<div class="text_tip" v-if="show_tip == true">Length need to greater than width at least 1mm</div>
						<div class="size">
							<div class="label">Width(W)</div>
							<input class="text_value" v-on:blur="handleInput"  v-model="box.width" v-on:input="totalValue2"/>
						</div>
						<div class="size">
							<div class="label">Height(H)</div>
							<input class="text_value" v-on:blur="handleInput" v-model="box.depth" v-on:input="totalValue2" />
						</div>
						<div class="size">
							<div class="label quantity">Quantity</div>
							<input class="text_value" v-model="box.quantity" v-on:input="totalValue2"/>
						</div>
						<div class="total_value">
							<div class="label">Total Price</div>
							<div class="text_value">MYR {{box.total_price | numFilter}}</div>
						</div>
						<div class="btn">Get quote</div>
					</div>
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
		name:"item_details",
		components:{
			TopView,
			Footer
		},
		data(){
			return{
				product_index:2,
				box:{
					length:0,
					width:0,
					depth:0,
					quantity:0,
					total_price:0
				},
				price_per:0,
				rel_price_per:0,
				show_tip:false,
				paper_index:0,
				colour_index:0
			}
		},
		metaInfo: {
			title: "Custom your die cut box in a minute | YF Packaging",
			meta: [
			  { name: "description", content: "A versatile custom mailer box that's stylish, sturdy and ready to ship directly in the mail." },
			],
		},
		mounted() {
		},
		methods:{
			tabQuantity(index){
				this.paper_index = index
				console.log(this.paper_index)
				this.totalValue2()
			},
			tabColour(index){
				this.colour_index = index
				this.totalValue()
			},
			//盒子为Die-Cut Box的计算
			totalValue2(){
				let length = this.box.length
				let width = this.box.width
				let depth = this.box.depth
				if(Number(width) >= Number(length)){
					this.show_tip = true
					this.box.total_price = 0
				}else{
					this.show_tip = false
					let total_length = (((Number(depth) * 3 ) + 3 + (width * 2) + 3) / 1000) + 0.02
					let total_width = ((5*2 + 10*2 + (Number(depth) * 4) + Number(length)) / 1000) + 0.02
					// 面积
					let area = total_length * total_width
					console.log(area)
					if(this.paper_index != 1 && this.paper_index != 2){
						//不选择所需纸张的提示
						this.$message({
							message: '请选择您需要的纸张',
							type: 'warning'
						});
					}else{
						//单价
						if(this.paper_index == 1){
							//纸张为白色
							if(this.colour_index == 1){//Full colour
								if(Number(this.box.quantity)<201){
									this.price_per = area * 8.50
								}else if( Number(this.box.quantity) >= 201 && Number(this.box.quantity) < 301){
									this.price_per = area * 7.90
								}else if( Number(this.box.quantity) >= 301 && Number(this.box.quantity) < 501){
									this.price_per = area * 7.30
								}else if( Number(this.box.quantity) >= 501 && Number(this.box.quantity) < 1001){
									this.price_per = area * 6.80
								}else if( Number(this.box.quantity) >= 1001 && Number(this.box.quantity) < 2001){
									this.price_per = area * 6.20
								}else if( Number(this.box.quantity) >= 2001 && Number(this.box.quantity) < 3001){
									this.price_per = area * 5.60
								}else if( Number(this.box.quantity) >= 3001 && Number(this.box.quantity) < 4001){
									this.price_per = area * 5.00
								}else if( Number(this.box.quantity) >= 4001 && Number(this.box.quantity) < 5001){
									this.price_per = area * 4.50
								}
							}else if(this.colour_index == 2){	//1-2colour
								if(Number(this.box.quantity)<201){
									this.price_per = area * 6.80
								}else if( Number(this.box.quantity) >= 201 && Number(this.box.quantity) < 301){
									this.price_per = area * 6.20
								}else if( Number(this.box.quantity) >= 301 && Number(this.box.quantity) < 501){
									this.price_per = area * 5.60
								}else if( Number(this.box.quantity) >= 501 && Number(this.box.quantity) < 1001){
									this.price_per = area * 5.00
								}else if( Number(this.box.quantity) >= 1001 && Number(this.box.quantity) < 2001){
									this.price_per = area * 4.70
								}else if( Number(this.box.quantity) >= 2001 && Number(this.box.quantity) < 3001){
									this.price_per = area * 4.40
								}else if( Number(this.box.quantity) >= 3001 && Number(this.box.quantity) < 4001){
									this.price_per = area * 4.10
								}else if( Number(this.box.quantity) >= 4001 && Number(this.box.quantity) < 5001){
									this.price_per = area * 3.80
								}
							}else if(this.colour_index == 3){	//Plain
								if(Number(this.box.quantity)<201){
									this.price_per = area * 5.60
								}else if( Number(this.box.quantity) >= 201 && Number(this.box.quantity) < 301){
									this.price_per = area * 5.30
								}else if( Number(this.box.quantity) >= 301 && Number(this.box.quantity) < 501){
									this.price_per = area * 5.00
								}else if( Number(this.box.quantity) >= 501 && Number(this.box.quantity) < 1001){
									this.price_per = area * 4.75
								}else if( Number(this.box.quantity) >= 1001 && Number(this.box.quantity) < 2001){
									this.price_per = area * 4.50
								}else if( Number(this.box.quantity) >= 2001 && Number(this.box.quantity) < 3001){
									this.price_per = area * 4.20
								}else if( Number(this.box.quantity) >= 3001 && Number(this.box.quantity) < 4001){
									this.price_per = area * 3.90
								}else if( Number(this.box.quantity) >= 4001 && Number(this.box.quantity) < 5001){
									this.price_per = area * 3.60
								}
							}
						}else if(this.paper_index == 2){
							//纸张为棕色
							if(this.this.colour_index == 1){//full colour
								if(Number(this.box.quantity)<201){
									this.price_per = area * 6.80
								}else if( Number(this.box.quantity) >= 201 && Number(this.box.quantity) < 301){
									this.price_per = area * 6.50
								}else if( Number(this.box.quantity) >= 301 && Number(this.box.quantity) < 501){
									this.price_per = area * 5.60
								}else if( Number(this.box.quantity) >= 501 && Number(this.box.quantity) < 1001){
									this.price_per = area * 5.00
								}else if( Number(this.box.quantity) >= 1001 && Number(this.box.quantity) < 2001){
									this.price_per = area * 4.80
								}else if( Number(this.box.quantity) >= 2001 && Number(this.box.quantity) < 3001){
									this.price_per = area * 4.50
								}else if( Number(this.box.quantity) >= 3001 && Number(this.box.quantity) < 4001){
									this.price_per = area * 4.00
								}else if( Number(this.box.quantity) >= 4001 && Number(this.box.quantity) < 5001){
									this.price_per = area * 3.70
								}
							}else if(this.colour_index == 2){	//1-2colour
								if(Number(this.box.quantity)<201){
									this.price_per = area * 5.10
								}else if( Number(this.box.quantity) >= 201 && Number(this.box.quantity) < 301){
									this.price_per = area * 4.85
								}else if( Number(this.box.quantity) >= 301 && Number(this.box.quantity) < 501){
									this.price_per = area * 4.60
								}else if( Number(this.box.quantity) >= 501 && Number(this.box.quantity) < 1001){
									this.price_per = area * 4.30
								}else if( Number(this.box.quantity) >= 1001 && Number(this.box.quantity) < 2001){
									this.price_per = area * 4.00
								}else if( Number(this.box.quantity) >= 2001 && Number(this.box.quantity) < 3001){
									this.price_per = area * 3.70
								}else if( Number(this.box.quantity) >= 3001 && Number(this.box.quantity) < 4001){
									this.price_per = area * 3.40
								}else if( Number(this.box.quantity) >= 4001 && Number(this.box.quantity) < 5001){
									this.price_per = area * 3.10
								}
							}else if(this.colour_index == 3){	//Plain
								if(Number(this.box.quantity)<201){
									this.price_per = area * 4.85
								}else if( Number(this.box.quantity) >= 201 && Number(this.box.quantity) < 301){
									this.price_per = area * 4.60
								}else if( Number(this.box.quantity) >= 301 && Number(this.box.quantity) < 501){
									this.price_per = area * 4.30
								}else if( Number(this.box.quantity) >= 501 && Number(this.box.quantity) < 1001){
									this.price_per = area * 4.00
								}else if( Number(this.box.quantity) >= 1001 && Number(this.box.quantity) < 2001){
									this.price_per = area * 3.70
								}else if( Number(this.box.quantity) >= 2001 && Number(this.box.quantity) < 3001){
									this.price_per = area * 3.40
								}else if( Number(this.box.quantity) >= 3001 && Number(this.box.quantity) < 4001){
									this.price_per = area * 3.10
								}else if( Number(this.box.quantity) >= 4001 && Number(this.box.quantity) < 5001){
									this.price_per = area * 2.90
								}
							}
							
						}
						// 单价小于等于0.3=>0.7   0.31rm-0.60rm=>0.6    0.61rm-0.9=>0.5   0.91rm-1.2rm=>0.4   1.21rm-1.5rm=>0.3
						if(this.price_per < 0.31){
							this.rel_price_per = this.price_per  + 0.7
						}else if(this.price_per >= 0.31 && this.price_per< 0.61){
							this.rel_price_per = this.price_per + 0.6
						}else if(this.price_per >= 0.61 && this.price_per< 0.91){
							this.rel_price_per = this.price_per + 0.5
						}else if(this.price_per >= 0.91 && this.price_per< 1.21){
							this.rel_price_per = this.price_per + 0.4
						}else if(this.price_per >= 1.21 && this.price_per< 1.51){
							this.rel_price_per = this.price_per + 0.3
						}else{
							this.rel_price_per = this.price_per
						}
						// 判断数量是否超过200
						if(this.box.quantity > 200){
							this.box.total_price = this.rel_price_per * this.box.quantity
						}else{
							if(Number(this.box.quantity) == 0){
								this.box.total_price = 0
							}else{
								if(Number(length) == 0 || Number(width) == 0 || Number(depth) == 0){
									this.box.total_price = 0
								}else{
									this.box.total_price = (this.rel_price_per * this.box.quantity) + 80
								}
							}
						}
					}
					
				}
			},
			handleInput(e) {
				// 通过正则过滤小数点后两位
				e.target.value = (e.target.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null
			},
		},
		
		filters: {
			numFilter (value) {
				let realVal = ''
				if (!isNaN(value) && value!== '') {
				  // 截取当前数据到小数点后两位
				  realVal = parseFloat(value).toFixed(2)
				} else {
					realVal = '--'
				}
				return realVal
			 }
		},
		computed:{
			
		}
	}
</script>

<style lang="less" scoped>
	.container{
		.content{
			// height: 1382px;
			padding-bottom: 302px;
			background: #E4DFDB;
			.back{
				padding: 0 236px 0 131px;
				font-size: 25px;
				font-family: 'Roboto-Regular';
				line-height: 30px;
				color: #8B837E;
				margin-top: 71px;
				cursor: pointer;
			}
			.content_detail{
				padding: 0 236px 0 131px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.detail_left{
					margin-left: 16px;
					img{
						width: 861px;
						height: 340px;
					}
				}
				.detail_left_two{
					margin: 0  132px 0 125px;
					img{
						width: 650px;
						height: 685px;
					}
				}
				.detail_right{
					// width: 499px;
					// height: 797px;
					background: #FFFFFF;
					border-radius: 30px;
					margin-left: 148px;
					position: relative;
					.detail_box{
						width: 300px;
						height: 234px;
						position: absolute;
						top: -85px;
						right: -55px;
					}
					.box_name{
						padding: 0 53px 0 55px;
						font-size: 48px;
						font-family: 'DMSerifDisplay-Regular';
						line-height: 58px;
						color: #46474B;
						margin: 97px 0 9px;
					}
					.box_intro{
						padding: 0 53px 0 55px;
						font-size: 18px;
						font-family: 'Roboto-Regular';
						line-height: 22px;
						color: #7C7C7C;
						margin-bottom: 25px;
					}
					.box_ps{
						padding: 0 53px 0 55px;
						font-size: 15px;
						font-family: 'Roboto-Regular';
						line-height: 22px;
						color: #7C7C7C;
						margin-bottom: 30px;
					}
					.quantity_select{
						display: flex;
						align-items: center;
						padding: 0 53px 0 55px;
						margin-bottom: 30px;
						.white_paper{
							width: 118px;
							height: 48px;
							background: #FFFFFF;
							border: 2px solid #DCB888;
							border-radius: 13px;
							font-size: 18px;
							font-family: 'Roboto-Regular';
							line-height: 48px;
							color: #DCB888;
							text-align: center;
							margin-right: 17px;
						}
						.brown_paper{
							width: 118px;
							height: 48px;
							background: #804000;
							border: 2px solid #DCB888;
							border-radius: 13px;
							font-size: 18px;
							font-family: 'Roboto-Regular';
							line-height: 48px;
							color: #FFFFFF;
							text-align: center;
							
						}
						.paper_block{
							width: 118px;
							height: 48px;
							background: #EFEFEF;
							border: 2px solid #E1E1E1;
							box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.16);
							border-radius: 13px;
							font-size: 18px;
							font-family: 'Roboto-Regular';
							line-height: 48px;
							color: #565656;
							text-align: center;
							margin-right: 17px;
						}
					}
					.size{
						padding: 0 53px 0 55px;
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 24px;
						.label{
							font-size: 25px;
							font-family: 'Roboto-Regular';
							line-height: 30px;
							color: #565656;
						}
						.text_value{
							width: 160px;
							height: 66px;
							background: #E1E1E1;
							border: none;
							opacity: 1;
							border-radius: 13px;
							font-size: 25px;
							font-family: 'Roboto-Regular';
							color: #565656;
							line-height: 66px;
							text-align: right;
							padding-right: 30px;
						}
						.quantity{
							color: #888C92;
						}
						
					}
					.text_tip{
						color: #ff0000;
						font-size: 16px;
						padding: 0 53px 0 55px;
						margin-bottom: 24px;
					}
					.total_value{
						padding: 0 53px 0 55px;
						height: 74px;
						background: #DCD7D3;
						display: flex;
						align-items: center;
						justify-content: space-between;
						.label{
							font-size: 25px;
							font-family: 'Roboto-Regular';
							line-height: 30px;
							color: #888C92;
						}
						.text_value{
							font-size: 25px;
							font-family: 'Roboto-Bold';
							line-height: 74px;
							color: #565656;
							font-weight: bold;
						}
					}
					.btn{
						height: 95px;
						background: #7C736D;
						border-radius: 0px 0px 26px 26px;
						font-size: 21px;
						font-family: 'Roboto-Regular';
						line-height: 95px;
						color: #FFFFFF;
						text-align: center;
					}
				}
			}
		}
	}

	// 媒体查询
	@media screen and (max-width: 600px) {
		
		.content{
			// padding: 0 20px !important;
			padding-left: 20px !important;
			padding-right: 20px !important;
			.back {
				font-size: 40px !important;
				padding: 0 40px !important;
			}
			.content_detail {
				flex-direction: column;
				padding: 50px 40px 0 !important;
				.detail_left {
					width: 100%;
					margin-top: 60px;
					img {
						width: 100% !important;
						height: auto !important;
					}
				}
				.detail_right {
					margin-left: 0 !important;
					margin-top: 100px;
					.box_name {
						
					}
					.box_intro {
						
					}
					.size {
						.label {
							
						}
					}
					.text_tip{
						font-size: 20px !important;
					}
				}
				
			}
			
		}
		.footer{
			padding: 80px !important;
		}
	}
	
	
	@supports (-webkit-overflow-scrolling: touch) {
		.content{
			padding-left:20px !important ;
			padding-right: 20px !important;
			.content_detail {
				.detail_left_two {
					margin: auto !important;
					text-align: center;
					img {
						width: 80% !important;
						height: auto !important;
					}
				}
				.detail_right {
					.detail_box {
						width: 600px !important;
						height: auto !important;
						top: -200px !important;
					}
				}
				.box_name {
					margin: 250px 0 80px 0 !important;
				}
				.box_intro {
					line-height: 70px !important;
					font-size: 24px !important;
				}
				.box_ps{
					font-size: 24px !important;
				}
				.size {
					margin-bottom: 80px !important;
					.label {
						font-size: 26px !important;
					}
					.text_value {
						width: 350px !important;
						height: 140px !important;
					}
				}
				.text_tip{
					font-size: 20px !important;
				}
				.total_value {
					height: 200px !important;
				}
				.btn {
					height: 200px !important;
					line-height: 200px !important;
					font-size: 26px !important;
				}
			}
				
		}
		.footer{
			padding: 80px !important;
		}
	}
</style>

