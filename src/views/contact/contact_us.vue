<template>
	<div class="index">
		<div class="container">
			<div class="topview">
				<top-view :index="6"></top-view>
			</div>
			<div class="content">
				<div class="header">Contact Us</div>
				<div class="table_form">
					<div class="row_1">
						<div class="row_left">
							<div class="label">Your Name<span>*</span></div>
							<div class="input_area">
								<input type="text" v-model="submitObj.name" placeholder="Your Name" class="input"/>
							</div>
						</div>
						<div class="row_right">
							<div class="label">Company Name<span>*</span></div>
							<div class="input_area">
								<input type="text" v-model="submitObj.company" placeholder="Company Name" class="input"/>
							</div>
						</div>
					</div>
					<div class="row_1">
						<div class="row_left">
							<div class="label">Email Address<span>*</span></div>
							<div class="input_area">
								<input type="text" v-model="submitObj.email" placeholder="Email Address" class="input"/>
							</div>
						</div>
						<div class="row_right">
							<div class="label">Contact No.<span>*</span></div>
							<div class="input_area">
								<input type="text" v-model="submitObj.contact" placeholder="Contact No." class="input"/>
							</div>
						</div>
					</div>
					<div class="row_1">
						<div class="row_left">
							<div class="label">Handphone No.</div>
							<div class="input_area">
								<input type="text" v-model="submitObj.phone" placeholder="Handphone No." class="input"/>
							</div>
						</div>
						<div class="row_right">
							<div class="label">Attachment <span class="text_gray">(*only support cdr,ai,psd,jpeg,jpg,png,pdf)</span></div>
							<div class="input_area">
                <div class="input" style="display: flex; align-items: center;">
                  <input type="file" @change="fileChange" placeholder="Upload file" accept=".cdr, .ai, .psd, .jpeg, .jpg, .png, .pdf"/>
                </div>
							</div>
						</div>
					</div>
					<div class="row_2">
						<div class="label">Enquiry<span>*</span></div>
						<div class="text_area">
							<textarea v-model="submitObj.enquiry" cols="30" rows="10" placeholder="Enquiry"></textarea>
						</div>
					</div>
					<div class="btn_area">
						<div class="btn" @click="toSend">SEND</div>
					</div>
				</div>
			</div>
			<div class="text_content">
				<div class="text_header">Why contact us</div>
				<div class="text_main">
					<div class="block_one">
						<div class="img">
							<img src="../../assets/images/box_with_paper_image.png" />
						</div>
						<div class="text">
							If you are looking for the finest quality of carton box items, YF Packaging has the right solution to cater for your every requirement. We are using digital printing for all our product. Digital printing is a method of printing from a digital-based image directly to a substrate using a laser or inkjet. Digital printing does not use printing plates, therefore, setup, waste and time is lower than traditional printing (Flexo) methods. This on-demonds printing solution is suitable for short large run and variable label printing. the color is based on adjustment of CMYK & PANTONE color. Beside that, our company can doing a customize boxes for you. This can make sure that our customer have a more suitable size of boxes to pack for their item and a more colorful and grand packaging.
						</div>
					</div>
					<div class="block_two">
						<div class="text">
							Our packaging products are widely used in furniture, clothing and food industries, as well as customized holiday gift boxes. We are now directly printing onto corrugated board using digital printers. The digital printer benefit from uptime, because there is no plate-making and no job changes. Otherwise, orders can be changed within 2 minutes for board of the same size and about five minutes for board of different sizes. The delivery speed is significantly accelerated and the printed products are of high quality, so orders can be placed and delivered on the same day. The combination of single pass and multi-pass equipment enables our company to respond more quickly to market demand. If you are looking for the finest quality of carton box items, YF Packaging has the right solution to cater for your every requirement.
						</div>
						<div class="img">
							<img src="../../assets/images/box_packaging_mockup.png" />
						</div>
					</div>
				</div>
			</div>
			<FooterTwo></FooterTwo>

		</div>
	</div>
</template>

<script>
	import TopView from '@/components/top.vue'
	import FooterTwo from '@/components/footerTwo.vue'
  import ContactApi from "../../api/contact"

	export default{
		name:"contact_us",
		components:{
			TopView,
			FooterTwo
		},
		data(){
			return{
        submitObj: {},
        formObj: null // formData 格式
			}
		},
		metaInfo: {
			title: "Contact Us | Get quote on custom carton box",
			meta: [
			  { name: "description", content: "Contact us or get quote to get an instant quotation of your custom carton box" },
			],
		},
		methods:{
      // 发送邮件
		  toSend () {
        console.log(this.submitObj)
        let _formData = this.formObj
        let obj = this.submitObj

        Object.keys(obj).forEach((key) => {
          if (obj[key] instanceof Array) {
            obj[key].forEach((item) => {
              _formData.append(key, item)
            })
            return
          }
          _formData.append(key, obj[key])
        })

        ContactApi.sendEmail(_formData).then(res => {
          this.$message.success('Send Successful !')
        })
      },

      // 文件
      fileChange (e) {
        let files = e.target.files
        if (!files.length) return

        // 上传文件 创建FormData
        let formData = new FormData()

        for (let i = 0; i < files.length; i++) {
          // formData中的append方法 如果已有相同的键，则会追加成为一个数组  注意:这里需要使用formData.getAll()获取
          formData.append('file', files[i], files[i].name)
        }

        this.formObj = formData
      }
		}
	}
</script>

<style lang="less" scoped>

	.container{
		background: #7C736D;
		.topview{
			/deep/	#top{
				background: #7C736D;
				.top{
					.nav{
						color: #FFFFFF;
					}
				}
			}
		}
		.content{
			height: 1000px;
			position: relative;
			.header{
				font-size: 48px;
				font-family: 'DMSerifDisplay-Regular';
				line-height: 58px;
				color: #FFFFFF;
				margin-top: 3px;
				text-align: center;
				padding-top: 30px;
			}
			.table_form{
				background: #FFFFFF;
				border-radius: 44px;
				margin: 85px 180px 0 180px;
				padding: 60px 105px 85px;
				box-shadow: 0px 4px 25px #494949;
				position: absolute;

				.row_1{
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 40px;
					.row_left{
						.label{
							font-size: 22px;
							font-family: 'Roboto-Regular';
							line-height: 26px;
							color: #262626;
							margin: 0 0 16px 22px;
							span{
								color: #EC1D1D;
							}
						}
						.input_area{
							.input{
								-webkit-appearance: none;
								width: 628px;
								height: 68px;
								background: #EFF1F4;
								border: 1px solid #eff1f4;
								opacity: 1;
								border-radius: 9px;
								padding-left: 22px;
								font-size: 27px;
								color: #262626;
								font-family: 'Roboto-Regular';
							}
							.input::-webkit-input-placeholder{
								font-size: 27px;
								color: #A7A7A7;
								font-family: 'Roboto-Regular';
							}
						}
					}
					.row_right{
						margin-left: 94px;
						.label{
							font-size: 22px;
							font-family: 'Roboto-Regular';
							line-height: 26px;
							color: #262626;
							margin: 0 0 16px 22px;
							span{
								color: #EC1D1D;
							}
							.text_gray{
								color: #757575;
								font-size: 22px;
							}
						}
						.input_area{
							.input{
								width: 628px;
								height: 68px;
								background: #EFF1F4;
								border: 1px solid #eff1f4;
								opacity: 1;
								border-radius: 9px;
								padding-left: 22px;
								font-size: 27px;
								color: #262626;
								-webkit-appearance: none;
								font-family: 'Roboto-Regular';
							}
							.input::-webkit-input-placeholder{
								font-size: 27px;
								color: #A7A7A7;
								font-family: 'Roboto-Regular';
							}
						}
					}
				}
				.row_2{
					margin-top: 47px;
					.label{
						font-size: 22px;
						font-family: 'Roboto-Regular';
						line-height: 26px;
						color: #262626;
						margin: 0 0 16px 22px;
						span{
							color: #EC1D1D;
						}
					}
					.text_area{
						textarea{
							font-size: 27px;
							background: #EFF1F4;
							width: 98%;
							height: 218px;
							border-radius: 9px;
							border: 1px solid #eff1f4;
							resize: none;
							font-size: 27px;
							font-family: 'Roboto-Regular';
							color: #262626;
							padding: 18px 0 0 22px;
						}
						textarea::-webkit-input-placeholder{
							font-size: 27px;
							color: #A7A7A7;
							font-family: 'Roboto-Regular';
						}
					}
				}
				.btn_area{
					display: flex;
					align-items: center;
					justify-content: center;
					.btn{
						width: 272px;
						height: 73px;
						background: #7C736D;
						opacity: 1;
						border-radius: 37px;
						font-size: 25px;
						font-family: 'Roboto-Medium';
						line-height: 73px;
						color: #FFFFFF;
						text-align: center;
						margin-top: 69px;
					}
				}

			}
		}
		.text_content{
			width: 1919px;
			padding-bottom:80px ;
			background: #BEB6AF;
			.text_header{
				font-size: 48px;
				font-family: 'DMSerifDisplay-Regular';
				line-height: 58px;
				color: #2D2D2D;
				padding: 290px 0 0 225px;
			}
			.text_main{
				.block_one{
					display: flex;
					align-items: center;
					.img{
						img{
							width: 904px;
							height: 581px;
						}
					}
					.text{
						font-size: 21px;
						font-family: 'Roboto-Regular';
						line-height: 32px;
						color: #494949;
						margin-right: 197px;
					}
				}
				.block_two{
					display: flex;
					align-items: center;
					margin-top: -150px;
					.text{
						font-size: 21px;
						font-family: 'Roboto-Regular';
						line-height: 32px;
						color: #494949;
						margin: 20px 0 0 213px;
					}
					.img{
						margin-right: 95px;
						img{
							width: 766px;
							height: 766px;
						}
					}
				}
			}
		}

	}

	// 媒体查询
	@media screen and (max-width: 600px) {
		.content {
			height: auto !important;
			padding-bottom: 200px;
			padding-left:20px !important ;
			padding-right: 20px !important;
			.header{
				font-size: 55px !important;
				font-weight: bold;
			}
			.table_form {
				margin: 85px 40px 0 40px !important;
				padding: 60px 40px 85px !important;
				position: relative !important;
				.row_1 {
					display: block !important;
					margin: 0 !important;
					input {
						width: 500px !important;
					}
					.row_right {
						margin: 0 !important;
						padding-bottom: 40px !important;
					}
					.row_left {
						padding-bottom: 40px !important;
					}
				}
				.row_2 {
					textarea {
						width: 575px !important;
					}
				}
				.btn {
					font-size: 38px !important;
				}
			}
		}

		.text_content {
			width: auto !important;
			padding: 0 60px;
			.text_header {
				font-size: 55px !important;
				padding: 100px 0 0 0 !important;
				font-weight: bold;
			}
			.text_main {
				.block_one {
					display: block !important;
					padding-bottom: 60px !important;
					.img {
						width: 100% !important;
						margin-top: 20px !important;
						img {
							width: 100% !important;
							height: auto !important;
						}
					}
					.text {
						margin: 0 !important;
						font-size: 32px !important;
						line-height: 40px !important;
					}
				}
				.block_two {
					display: block !important;
					margin-top: 100px !important;
					.img {
						width: 100% !important;
						margin-top: 20px !important;
						img {
							width: 100% !important;
							height: auto !important;
						}
					}
					.text {
						margin: 0 !important;
						font-size: 32px !important;
						line-height: 40px !important;
					}
				}
			}
		}
		.footer{
			padding: 80px !important;
		}
	}

	@supports (-webkit-overflow-scrolling: touch) {
		.content {
			padding-top: 40px;
			padding-left: 20px !important;
			padding-right: 20px !important;
			.header {
				line-height: 180px !important;
			}
			.table_form {
				.row_1 {
					.row_left {
						margin-bottom: 80px !important;
						.label {
							font-size: 24px !important;
							line-height: 80px !important;
							margin-bottom: 0 !important;
						}
						.input_area {
							.input {
								width: 94% !important;
								height: 150px !important;
								border-radius: 20px !important;
							}
						}
					}
					.row_right {
						margin-bottom: 80px !important;
						.label {
							font-size: 24px !important;
							line-height: 80px !important;
							margin-bottom: 0 !important;
						}
						.input_area {
							.input {
								width: 94% !important;
								height: 150px !important;
								border-radius: 20px !important;
							}
						}
					}
				}
				.row_2 {
					.label {
						font-size: 24px !important;
						line-height: 80px !important;
						margin-bottom: 40px !important;
					}
					.text_area {
						textarea {
							width: 98% !important;
							height: 350px !important;
							border: none !important;
							border-radius: 20px !important;
						}
					}
				}
				.btn_area {
					.btn {
						width: 600px !important;
						height: 180px !important;
						line-height: 180px !important;
						border-radius: 90px !important;
					}
				}
			}
		}
		.text_content {
			padding: 0 60px;
			.text_header {
				font-size: 50px !important;
				padding: 200px 0 0 0 !important;
			}
			.text_main {
				.block_one, .block_two {
					.text {
						line-height: 80px !important;
					}
				}

			}

		}
		.footer{
			padding: 80px !important;
		}
	}
</style>
