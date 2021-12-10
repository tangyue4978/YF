<template>
	<div class="index">
		<div class="container">
      <div class="first_screen" :style="{ height: isMobile ? '100vw' : '100vh' }">
        <video autoplay muted loop class="video_bg" v-if="!isMobile">
          <source :src="require('../../assets/images_new/homepage_bg.mp4')" type="video/mp4">
        </video>

        <div class="topview">
          <top-view :index="1"></top-view>
        </div>

        <div class="first_screen_content" v-if="isMobile">
          <div class="first_screen_text_box">
            <div class="first_screen_text">
              <span>Printed with perfection.</span>
              <span>Wrapping the Putures.</span>
              <span>Custom packaging and boxes bring your brand in front of your users.</span>
            </div>
          </div>

          <div class="btn_box">
            <router-link to="/product/index" class="arrow_btn" tag="div">
              <span>Choose your custom box</span>

              <div class="arrow_box">
                <img :src="require('../../assets/images_new/right_arrow.png')" alt="">
              </div>
            </router-link>
          </div>
        </div>
      </div>

<!--      <div class="content">-->
<!--        <div class="content_tit">-->
<!--          On Demand Custom  <br />-->
<!--          Carton Box-->
<!--        </div>-->
<!--        &lt;!&ndash; <div class="content_text">-->
<!--          Custom packaging caters for your brand. <br />-->
<!--          Deliver your product with a grand brand look.-->
<!--        </div> &ndash;&gt;-->
<!--        <div class="content_text">-->
<!--          Its pack up time!-->
<!--        </div>-->
<!--        <img src="../../assets/images/mockup.png" />-->
<!--      </div>-->

      <div class="text_content">
        <div class="text_main">
          <div class="block_one">
            <div class="img">
              <img src="../../assets/images/rich.png" />
            </div>
            <div class="text">
              <div class="text_tit">Rich Experience</div>
              With over 20 years expertise in the field of corrugated boxes, die cut products and custom products.
            </div>
          </div>
          <div class="block_two">
            <div class="text">
              <div class="text_tit">Quality Assurance</div>
              Various stages of quality check in accordance with ISO9001:2015 and ISO 14001:2015 Certificate to ensure that our products are of the best quality for our customer.
            </div>
            <div class="img">
              <img src="../../assets/images/quality.png" />
            </div>
          </div>
          <div class="block_one">
            <div class="img">
              <img src="../../assets/images/premium.png" />
            </div>
            <div class="text">
              <div class="text_tit">Premium Services</div>
              Provide high efficiency product consultation and expertise to valuable customers

            </div>
          </div>
          <div class="block_two">
            <div class="text">
              <div class="text_tit">Concept Design</div>
              Ability in all aspect of creative design including customers need
            </div>
            <div class="img">
              <img src="../../assets/images/concept.png" />
            </div>
          </div>
        </div>
        <video
            id="myVideo"
            class="video-js"
            controls
            width="640"
            height="264"
        >
          <source
              src="../../assets/images/WeChat.mp4"
              type="video/mp4"
          >
        </video>
        <div class="menu">
          <div class="menu_list">
            <img src="../../assets/images/box.png" >
            <div class="menu_list_tit">Tiny minimums. No maximums.</div>
            <div class="menu_list_text">
              No matter the size of your order, you'll get the best boxes at prices to match.
            </div>
          </div>
          <div class="menu_list">
            <img src="../../assets/images/quotes.png" >
            <div class="menu_list_tit">Instant quotes</div>
            <div class="menu_list_text">
              Pick your style, design your custom boxes, and get an instant quote.
            </div>
          </div>
          <div class="menu_list">
            <img src="../../assets/images/fast.png" >
            <div class="menu_list_tit">Fast turnarounds</div>
            <div class="menu_list_text">
              Eligible orders may ship within 10 days or less with priority turnaround options.
            </div>
          </div>
        </div>

        <div class="design_box">
          <div class="design_title">
            Box design that inspires
          </div>
          <div class="design_description">
            <span>We are here to help with packaging solutions that make sense for businesses of any kind. We have single wall, double wall, white paper, brown paper, and whether you are designing your own custom packaging with your logo. We have all for you .</span>
          </div>
          <div class="design_content">
            <div class="design_content_box">
              <template v-for="(item, index) in designImgList">
                <div class="design_img_box" :key="index">
                  <img :src="item.url" alt="">
                </div>
              </template>
            </div>
          </div>
        </div>

        <div class="question">
          <div class="question_tit">
            FAQ
          </div>
          <div class="question_con">
            <div class="question_nav">
              <div v-for="item in nav_list" :key="item.id"
                   :class="navId==item.id?'question_nav_item question_nav_item-av':'question_nav_item'"
                   @click="tabbader(item.id)"
              >
                {{item.name}}
              </div>
            </div>
            <div class="question_warp">
              <div class="question_warp_list" v-for="(item,index) in question_list" :key="index">
                <div class="question_warp_list_tit">{{item.title}}</div>
                <div class="question_warp_list_item" v-for="(items,index1) in item.data" :key="index1">
                  <div class="question_item_con" @click="questionOpen(index,index1)">
                    <div class="question_item_con_text">{{items.name}}</div>
                    <img v-show="!items.mask" src="../../assets/images/icon_add.png" >
                    <img v-show="items.mask" src="../../assets/images/icon_reduce.png" >
                  </div>
                  <div class="question_item_bottom" v-if="items.mask && items.text != ''">
                    {{items.text}}
                  </div>
                  <div class="question_item_bottom1" v-if="items.mask && items.text == ''">
                    {{items.text1}}
                  </div>
                  <div class="question_item_bottom2" v-if="items.mask && items.text == ''">
                    {{items.text2}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="request_quote">
          <div class="request_title">
            Request a quote
          </div>

          <div class="request_description">
            <span>We are here to help you for your custom packaging. </span>
          </div>

          <div class="request_btn_box">
            <router-link to="/contact/contact_us" class="arrow_btn" tag="div">
              <span>Request quote</span>

              <div class="arrow_box">
                <img :src="require('../../assets/images_new/right_arrow.png')" alt="">
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <FooterTwo></FooterTwo>
		</div>
	</div>
</template>

<script>
	import TopView from '@/components/top.vue'
	import FooterTwo from '@/components/footerTwo.vue'
	export default{
		name:"home",
		components:{
			TopView,
			FooterTwo
		},
		data(){
			return{
        isMobile: false, // 是否是手机浏览器
        bodyHeight: '100vh', // body 高度
				navId: '1',
				nav_list: [
					{
						id: 1,
						name: 'ORDER'
					},
					{
						id: 2,
						name: 'PRODUCT & PRINTING'
					},
					{
						id: 3,
						name: 'DELIVERY'
					},
					{
						id: 4,
						name: 'GENERAL'
					},
					{
						id: 5,
						name: 'PAYMENT'
					},
				],
        designImgList: [
          {
            url: require('../../assets/images_new/design_1.jpg')
          },
          {
            url: require('../../assets/images_new/design_2.jpg')
          },
          {
            url: require('../../assets/images_new/design_3.jpg')
          },
          {
            url: require('../../assets/images_new/design_4.jpg')
          },
          {
            url: require('../../assets/images_new/design_5.jpg')
          },
          {
            url: require('../../assets/images_new/design_6.jpg')
          }
        ],
				question_list: [
					{
						title: 'ORDER',
						data: [
							{
								name: 'Is there any minimum order quantity?',
								text: 'No, there is no any minimum order quantity is limit or enactment. However, specific volume and printing requirement is accepted with further enquiry and request. You may refer to here (http://static.web.gdtuode.com/#/contact/contact_us) for further information.',
								mask: false
							},
							{
								name: 'Can I customise my boxes or cartons with including my company name and logo?',
								text: 'Yes! Just head on here (http://static.web.gdtuode.com/#/contact/contact_us), and please do fill in the enquiry form.',
								mask: false
							},
							{
								name: 'Will I receive an official invoice?',
								text: 'Yes! Your official invoice will be issue and despatch together with your orders. A soft copy of official invoice will be sent to your registered e-mail address once the order is delivered. In the unlikely event that you didn’t receive an official invoice, you may please to contact us at Tel +06-2635 273/860 or +017-2755273 for replacement an official invoice purposes.',
								mask: false
							}
						]
					},
					{
						title: 'PRODUCT & PRINTING',
						data: [
							{
								name: 'Is there multiple types of product to be chosen?',
								text: 'Yes, we provide multiple types of product to be chosen by customer through here.',
								mask: false
							},
							{
								name: 'What kind of printing method that we use?',
								text: 'We are glad to tell you that we are using the Single-Pass Corrugated Digital Printing Machine with eco-friendly and water proofing inks for prevention of colour fading thus preservation of the natural environment. You may refer here (http://static.web.gdtuode.com/#/about_us/index) for more information.',
								mask: false
							}
						]
					},
					{
						title: 'DELIVERY',
						data: [
							{
								name: 'Is there any freight charges apply on my delivery?',
								text: 'You may kindly contact to our customer services at Tel: +06-2635 273/860 or +017-2755273 for further information.',
								mask: false
							},
							{
								name: 'How long will my order take to arrive?',
								text: 'All readymade item(s) are ship out through express manner. It will take approximately 5-10 working days to arrive for all Peninsular Malaysia. Specific custom made order will be arrive within 14 working days after order acceptance.',
								mask: false
							},
							{
								name: "My delivery doesn't arrive within the expected time?",
								text: 'The cut off time for orders to be process for next day delivery is 2pm (Monday to Friday) and 11am for Saturday. Orders received after 2pm will be process on the next working day. Where orders are receive on Sunday or Public Holiday (National and State Holidays) will be process on the next following working day. In the unlikely event that issues incur with your delivery, or you do not receive your orders within expected period, you may kindly contact us at Tel: +06-2635 273 / 860, +6017-2755273 or email: services@yfpackagingsb.com and we will assist to track your order immediately.',
								mask: false
							}
						]
					},
					{
						title: 'GENERAL',
						data: [
							{
								name: 'How long does it take for us to reply your e-mail?',
								text: 'We will always respond to your e-mail with ASAP. We are operating from Monday to Friday from 8am to 5pm and Saturday from 8am to 1pm.',
								mask: false
							},
							{
								name: 'Could I get bulk purchase prices for larger quantities / regular orders?',
								text: 'If you are looking to order very large quantities or place orders on a regular basis of a particular item we may be able to offer further discounts. Please contact us at Tel: +06-2635 273/860, +6017-2755273 or email: services@yfpackagingsb.com to enquiry your requirements in further details.',
								mask: false
							}
						]
					},
					{
						title: 'PAYMENT',
						data: [
							{
								name: 'Payment may be made as follows:',
								text: '',
								text1:'Personal Account: ATM/Fund Transfer (Local Bank), Online Banking (FPX)',
								text2:'Business Account: ATM/Bank Transfer (Local Bank), Online Banking (FPX)',
								mask: false
							},
							{
								name: 'Will my information be kept confidential?',
								text: 'Yes. We take your personal information seriously and use or keep it confidential to protect your interests. Please refer to our Privacy Policy for more details.',
								mask: false
							}
						]
					}
				]
			}
		},
		metaInfo: {
			title: "On Demand Custom Carton Box in Malaysia | YF Packaging",
			meta: [
			  { name: "description", content: "The company manufacture and supply custom carton box, die cut box, half slotted carton box in Malaysia. We support export." },
			],
		},

    mounted() {
		  let _this = this
      _this.judgePlatform()

      window.onresize = function () {
        _this.judgePlatform()
      }
    },

    methods:{
      // 判断浏览器类型
		  judgePlatform () {
		    let _width = document.body.offsetWidth

        console.log(_width)

        if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
          this.isMobile = true // 移动端
        } else {
          this.isMobile = false // PC端
        }
      },

			// 侧边栏
			tabbader(id) {
				this.navId = id
			},
			// 常见问题 打开 收起
			questionOpen(index,index1) {
				this.question_list[index]['data'][index1]['mask'] = !this.question_list[index]['data'][index1]['mask']
			},
		}
	}
</script>

<style>
html, body {
  overflow-x: hidden;
}
</style>
<style lang="less" scoped>
@media screen and (max-width:690px){
  .first_screen {
    height: 100vw !important;
  }
}

	@innwidth: '600';
	.container{
		background: #7C736D;
    overflow-x: hidden;

    .first_screen {
      width: 100%;
      height: 100vh;
      position: relative;

      .video_bg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;
      }

      .topview{
        position: absolute;
        width: 100vw;

        /deep/	#top{
          background: transparent;
          .top{
            .nav{
              color: #FFFFFF;
            }
          }
        }
      }

      .first_screen_content {
        position: absolute;
        top: 25%;
        left: 0;
        display: flex;
        flex-direction: column;
        align-content: center;

        .first_screen_text_box {
          width: 100%;

          .first_screen_text {
            padding: 0 6%;
            display: flex;
            flex-direction: column;
            text-align: justify;
            color: #ffffff;
            zoom: 0.7 !important;

            span {
              margin-bottom: 80px;
            }

            span:last-child {
              color: #ffffff;
              zoom: 0.6 !important;
              line-height: 2;
            }
          }
        }

        .btn_box {
          width: 100%;
          display: flex;
          justify-content: center;
          position: relative;
          margin-top: 350px;

          .arrow_btn {
            display: flex;
            align-items: center;
            background: rgb(51, 51, 51);
            color: #ffffff;
            font-size: 24px;
            border-radius: 25px;
            padding: 30px 0 30px 36px;
            position: absolute;
            zoom: 0.7 !important;

            .arrow_box {
              display: flex;
              align-items: center;
              background: #ffffff;
              border-radius: 15px;
              margin: 36px;
              padding: 6px;

              img {
                width: 64px;
              }
            }
          }
        }
      }
    }


    .container_body {
      position: absolute;
    }

		.content{
			height: 735px;
			position: relative;
			padding-top: 90px;
			.content_tit {
				font-family: 'DMSerifDisplay-Regular';
				color: #E4DFDB;
				font-size: 84px;
				text-align: center;
			}
			.content_text {
				font-family: 'Roboto-Regular';
				color: #CBC5C1;
				font-size: 22px;
				text-align: center;
				margin-top: 30px;
			}
			img {
				width: 500px;
				height: auto;
				position: absolute;
				bottom: -230px;
				left: 0;
				right: 0;
				margin: auto;
			}
		}
		.text_content{
			width: 1919px;
			padding-bottom:80px ;
			background: #E4DFDB;
			.text_main{
				padding: 160px 320px 0 320px;
				.block_one{
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 111px;
					.img{
						img{
							width: 580px;
							height: auto;
						}
					}
					.text{
						font-size: 21px;
						font-family: 'Roboto-Regular';
						line-height: 32px;
						color: #565656;
						width: 600px;
						.text_tit {
							font-family: 'DMSerifDisplay-Regular';
							color: #46474B;
							font-size: 48px;
							padding: 30px 0;
						}
					}
				}
				.block_two{
					display: flex;
					align-items: center;
					margin-top: 111px;
					justify-content: space-between;
					.text{
						font-size: 21px;
						font-family: 'Roboto-Regular';
						line-height: 32px;
						color: #565656;
						width: 600px;
						.text_tit {
							font-family: 'DMSerifDisplay-Regular';
							color: #46474B;
							font-size: 48px;
							padding: 30px 0;
						}
					}
					.img{
						img{
							width: 580px;
							height: auto;
						}
					}
				}
			}
			.video-js {
				width: 860px;
				//height: 460px;
				border-radius: 50px;
				overflow: hidden;
				background-color: #272831;
				display: block;
				position: relative;
				bottom: -200px;
				margin: 10px auto 0 auto;
				box-shadow: 0px 20px 50px 0px #777;
        visibility: hidden;
			}
			.menu {
				background: #BEB6AF;
				display: flex;
				align-items: center;
				justify-content: space-between;
				//padding: 400px 100px 60px 100px;
        padding: 60px 100px 60px 100px;
				.menu_list {
					flex: 1;
					text-align: center;
					padding: 0 100px;
					img {
						width: 112px;
						height: auto;
					}
					.menu_list_tit {
						font-family: 'DMSerifDisplay-Regular';
						color: #46474B;
						font-size: 36px;
						padding: 0 40px;
						height: 100px;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: flex-end;
					}
					.menu_list_text {
						font-family: 'Roboto-Regular';
						color: #565656;
						font-size: 21px;
						margin-top: 20px;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
						overflow: hidden;
					}
				}
			}

      .design_box {
        padding: 126px 250px;
        background: rgb(124, 105, 119);

        .design_title {
          text-align: center;
          font-size: 48px;
          font-weight: bold;
          color: #ffffff;
        }

        .design_description {
          padding: 0 200px 274px;
          margin: 20px 0;
          text-align: center;
          font-size: 24px;
          color: #eeeeee;
          line-height: 1.3;
        }

        .design_content {
          width: 100%;
          padding-top: 126px;
          position: relative;

          .design_content_box {
            width: 90%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 50%);
          }

          .design_img_box {
            width: 23.5%;

            &:nth-last-of-type(1), &:nth-last-of-type(2) {
              width: 49%;
              margin-top: 25px;
            }

            img {
              width: 100%;
            }
          }
        }
      }

			.question {
				padding: 250px 126px 1px 126px;
				.question_tit {
					font-family: 'DMSerifDisplay-Regular';
					color: #46474B;
					font-size: 48px;
					text-align: center;
				}
				.question_con {
					display: flex;
					margin-top: 70px;
					.question_nav {
						width: 400px;
						.question_nav_item {
							font-family: 'Roboto-Regular';
							color: #999999;
							font-size: 22px;
							padding: 20px 0;
							cursor: pointer;
							font-weight: bold;
						}
						.question_nav_item-av {
							font-family: 'Roboto-Bold';
							color: #7C736D;
							font-weight: bold;
						}
					}
					.question_warp {
						flex: 1;
						.question_warp_list {
							padding-bottom: 20px;
							.question_warp_list_tit {
								font-family: 'Roboto-Bold';
								color: #727272;
								font-size: 20px;
								padding: 21px 0;
								font-weight: bold;
							}
						}
						.question_warp_list_item {
							background-color: #7C736D;
							border-radius: 5px;
							padding: 0 81px 0 68px;
							margin-bottom: 18px;
							.question_item_con {
								height: 98px;
								display: flex;
								align-items: center;
								cursor: pointer;
								border-bottom: 1px solid #FFFFFF;
								.question_item_con_text {
									flex: 1;
									color: #FFFFFF;
									font-size: 20px;
									font-weight: bold;
								}
								img {
									width: 40px;
									height: auto;
								}
							}
							.question_item_bottom {
								font-family: Roboto-Regular;
								color: #EFEAE8;
								font-size: 20px;
								padding: 26px 0 35px 0;
							}
							.question_item_bottom1 {
								font-family: Roboto-Regular;
								color: #EFEAE8;
								font-size: 20px;
								padding: 26px 0 15px 0;
							}
							.question_item_bottom2 {
								font-family: Roboto-Regular;
								color: #EFEAE8;
								font-size: 20px;
								padding: 10px 0 35px 0;
							}
						}
					}
				}
			}

      .request_quote {
        padding: 126px 250px;
        background: rgb(170, 163, 156);

        .request_title {
          text-align: center;
          font-size: 48px;
          font-weight: bold;
          color: rgb(45, 45, 45);
        }

        .request_description {
          margin: 20px 0 40px;
          text-align: center;
          font-size: 24px;
          color: rgb(45, 45, 45);
          line-height: 1.3;
        }

        .request_btn_box {
          display: flex;
          justify-content: center;

          .arrow_btn {
            display: flex;
            align-items: center;
            background: rgb(51, 51, 51);
            color: #ffffff;
            font-size: 24px;
            padding: 15px 20px 15px 30px;
            border-radius: 7px;
            cursor: pointer;

            .arrow_box {
              background: #ffffff;
              border-radius: 7px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 25px;

              img {
                width: 32px;
              }
            }
          }
        }
      }
		}
		.line{
			width: 100%;
			height: 1px;
			background-color: #BBB6B2;
		}
	}

	// 媒体查询
	@media screen and (max-width: 600px) {
    .design_box {
      padding: 100px 50px !important;

      .design_description {
        padding: 0 !important;
        padding-bottom: 300px !important;
        font-size: 16px !important;
        zoom: 0.7 !important;
      }
    }

    .request_quote {
      font-size: 16px !important;
      zoom: 0.7 !important;
    }

		.content {
			padding: 0 20 !important;
			.content_text {
				font-size: 32px !important;
				line-height: 45px !important;
			}
			img {
				width: 400px !important;
				bottom: -180px !important;
			}
		}
		.text_content {
			width: auto !important;
			.text_main {
				padding: 140px 60px 0 60px !important;
				.block_one {
					display: block !important;
					.img {
						img {
							width: 100% !important;
						}
					}
					.text {
						width: auto !important;
						font-size: 32px !important;
						line-height: 45px !important;
						.text_tit {

						}
					}
				}
				.block_two {
					display: block !important;
					padding-top: 30px !important;
					padding-bottom: 50px !important;
					.img {
						img {
							width: 100% !important;
							margin-top: 40px !important;
						}
					}
					.text {
						width: auto !important;
						font-size: 32px !important;
						line-height: 45px !important;
						.text_tit {

						}
					}
				}
			}
			.video-js {
				width: 90% !important;
				height: 1200px !important;
				zoom: 0.5 !important;
				border-radius: 120px !important;
				bottom: -500px !important;
				padding: 0 20 !important;
			}
			.menu {
				display: block !important;
				padding-left: 60px !important;
				padding-right: 60px !important;
				margin-top: 30px !important;
				.menu_list {
					padding-left: 0 !important;
					padding-right: 0 !important;
					margin-bottom: 200px !important;
					img {
						width: 300px !important;
						margin-bottom: 40px !important;
					}
					.menu_list_tit {
						font-size: 48px !important;
					}
					.menu_list_text {
						font-size: 32px !important;
					}
				}
			}
			.question {
				padding: 300px 60px 1px 60px !important;
				.question_con {
					display: block !important;
					.question_nav {
						width: 100% !important;
						display: flex;
						flex-wrap: wrap;
						.question_nav_item {
							width: 33.3%;
							text-align: center;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
							font-size: 28px !important;
						}
					}
					.question_warp {
						margin-top: 50px !important;
						.question_warp_list {
							margin-top: 20px !important;
							.question_warp_list_tit {
								font-size: 24px !important;
								font-weight: bold;
							}
							.question_warp_list_item {
								padding: 0 20px !important;
							}
						}
					}
				}
			}
		}
		.footer{
			padding: 80px !important;

		}
	}
	@supports (-webkit-overflow-scrolling: touch) {
		/* CSS for other than iOS devices */
		.content {
			height: 1000px !important;
			padding: 0 20 !important;
			.content_text {
				font-size: 32px !important;
				line-height: 80px !important;
			}
		}
		.text_content {
			.text_main {
				padding: 0 20 !important;
				.block_one {
					.text {
						line-height: 90px !important;
						.text_tit {
							line-height: 100px !important;
						}
					}
				}
				.block_two {
					padding-top: 30px !important;
					padding-bottom: 50px !important;
					.text {
						line-height: 90px !important;
						.text_tit {
							line-height: 100px !important;
						}
					}
				}
			}
			.menu {
				padding-top: 800px !important;
				padding-left: 20px !important;
				padding-right: 20px !important;
				margin-top: 30px !important;
				.menu_list {
					margin-bottom: 200px !important;
					img {
						width: 500px !important;
						margin-bottom: 40px !important;
					}
				}
			}
			.question {
				padding: 250px 60px 1px 60px !important;
				.question_con {
					display: block !important;
					.question_nav {
						width: 100% !important;
						display: flex;
						flex-wrap: wrap;
						.question_nav_item {
							width: 33.3%;
							text-align: center;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
							font-size: 28px !important;
						}
					}
					.question_warp {
						margin-top: 50px !important;
						.question_warp_list {
							margin-top: 20px !important;
							.question_warp_list_tit {
								font-size: 24px !important;
								font-weight: bold;
							}
							.question_warp_list_item {
								padding: 0 50px !important;
								.question_item_con {
									height: auto !important;
									padding: 60px 0;
									img {
										width: 80px !important;
									}
								}
							}
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
