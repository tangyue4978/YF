<template>
	<div class="index">
		<div class="container">
			<div class="topview">
				<top-view :index="3"></top-view>
			</div>
			<div class="content">
				<!-- 关于我们 -->
        <div class="about_first_screen">
          <div class="first_screen_left">
            <template v-for="(item, index) in aboutImageList">
              <div class="first_image_box" :key="index">
                <img :src="item.url" alt="">
              </div>
            </template>
          </div>

          <div class="first_screen_right">
            <h3>About Our Company</h3>
            <h1>Printing Your Dream</h1>
            <p>YF Packaging Sdn Bhd is a carton box manufacturer and supplier company. Our head office is located at Melaka, Malaysia. YF Packaging Sdn Bhd is a trusted company established with an aim is to provide lowest product prices to customers.</p>
            <p>There has been increasing demands for packaging products for every industries nowadays. To meet the unceasing demands has been one of the reasons why our company is working so hard in manufacturing wide array of packaging products.</p>
            <p>We are here not just to deliver quality packaging products and solutions to customers but also to accomplish our business goals and mission to our people, to our valued customers and to our society.</p>
            <p>If you are looking for the finest quality of carton box items, YF Packaging has the right solution to cater for your every requirement. Contact us now as our customer service team are happy to help and discuss through your needs.</p>
          </div>
        </div>
<!--				<div class="content_about">-->
<!--					<div class="content_about_tit">About Us</div>-->
<!--					<div class="content_about_img">-->
<!--						<img src="../../assets/images/aboutus_one.png">-->
<!--					</div>-->
<!--					<div class="content_about_text">-->
<!--						<p>YF Packaging Sdn Bhd is a carton box manufacturer and supplier company. Our head office is located at Melaka, Malaysia. YF Packaging Sdn Bhd is a trusted company established with an aim is to provide lowest product prices to customers.</p>-->
<!--						<p>There has been increasing demands for packaging products for every industries nowadays. To meet the unceasing demands has been one of the reasons why our company is working so hard in manufacturing wide array of packaging products.</p>-->
<!--						<p>We are here not just to deliver quality packaging products and solutions to customers but also to accomplish our business goals and mission to our people, to our valued customers and to our society.</p>-->
<!--						<p>If you are looking for the finest quality of carton box items, YF Packaging has the right solution to cater for your every requirement. Contact us now as our customer service team are happy to help and discuss through your needs.</p>-->
<!--					</div>-->
<!--				</div>-->
				<!-- 视频 -->
				<div class="video_box">
          <video
              id="myVideo"
              class="video-js"
              controls
          >
            <source
                src="../../assets/images/WeChat.mp4"
                type="video/mp4"
            >
          </video>
        </div>
				<!-- Facility -->
				<div class="text_main">
					<div class="text_main_tit">Facility</div>
					<div class="block_one">
						<div class="img">
							<img src="../../assets/images/aboutus_two.png" />
						</div>
						<div class="text">
							<div class="text_tit">Single-pass Corrugated Digital Printer</div>
							<div class="text_warp">Fastest production speed up to 492feet/min.</div>
							<div class="text_warp">High-Flexo like print quality.</div>
							<div class="text_warp">Instantaneous response and printable for small font or object.</div>
							<div class="text_warp">Seamless switch among multiple short-run orders.</div>
							<div class="text_warp">Applicable to all kinds of substrates including Craft Paper, Mottled White and Coated White.</div>
							<div class="text_warp">Supports the wide range of packaging applications.</div>
							<div class="text_warp">Eco-friendly water-based.</div>
						</div>
					</div>
					<div class="block_two">
						<div class="text">
							<div class="text_tit">Digital Inkjet Machine</div>
							<div class="text_warp">No need plate making.</div>
							<div class="text_warp">Substrates inkjet conversion with reduce conversion time.</div>
							<div class="text_warp">Fully controlled by the digital technology.</div>
							<div class="text_warp">Sprinkler constant temperature &amp; circulation system</div>
							<div class="text_warp">Printing process can be more high-speed, quiet and smooth.</div>
							<div class="text_warp">High-precision planetary reducer, positioning accuracy higher, faster.</div>
						</div>
						<div class="img">
							<img src="../../assets/images/aboutus_three.png" />
						</div>
					</div>
				</div>
				<!-- menu -->
<!--				<div class="menu">-->
<!--					<div class="menu_list">-->
<!--						<div class="menu_item">-->
<!--							<div class="menu_item_img"><img src="../../assets/images/aboutus_five.png"></div>-->
<!--							<div class="menu_item_con">-->
<!--								<div class="menu_item_con_tit">Offset Printing</div>-->
<!--								<div class="menu_item_con_text">-->
<!--									<div>● High-volume printing with significantly more time to set up.</div>-->
<!--									<div>● Produces fewer emissions and wastage.</div>-->
<!--									<div>● Lower cost per unit.</div>-->
<!--								</div>-->
<!--							</div>-->
<!--						</div>-->
<!--						<div class="menu_item">-->
<!--							<div class="menu_item_img"><img src="../../assets/images/aboutus_four.png"></div>-->
<!--							<div class="menu_item_con">-->
<!--								<div class="menu_item_con_tit">Digital Printing</div>-->
<!--								<div class="menu_item_con_text">-->
<!--									<div>● High or Lower volume printing acceptable with quick setup.</div>-->
<!--									<div>● Produces moderate emissions and wastage.</div>-->
<!--									<div>● Reasonable cost per unit.</div>-->
<!--									<div>● Eco-friendly</div>-->
<!--									<div>● Unlimited color (CMYK & Pantone)</div>-->
<!--									<div>● Without drop-off</div>-->
<!--								</div>-->
<!--							</div>-->
<!--						</div>-->
<!--					</div>-->
<!--				</div>-->

        <div class="feature_box">
          <div class="feature_title">
            Our Core Features
          </div>

          <div class="feature_subhead">
            Experience Allows Us To Printing Things
          </div>

          <div class="feature_content">
            <div class="feature_content_left">
              <div class="feature_content_title">
                <h3>Offset Printing</h3>
                <img :src="require('../../assets/images_new/about_6.png')" alt="">
              </div>

              <div class="feature_content_content">
                <p>● High or Lower volume printing acceptable with quick setup.</p>
                <p>● Produces fewer emissions and wastage.</p>
                <p>● Lower cost per unit.</p>
              </div>
            </div>

            <div class="feature_content_center">
              <img :src="require('../../assets/images_new/about_5.png')" alt="">
            </div>

            <div class="feature_content_right">
              <div class="feature_content_title">
                <h3>Digital Printing</h3>
                <img :src="require('../../assets/images_new/about_6.png')" alt="">
              </div>

              <div class="feature_content_content">
                <p>● High-volume printing with significantly more time to set up.</p>
                <p>● Produces moderate emissions and wastage.</p>
                <p>● Reasonable cost per unit.</p>
                <p>● Eco-friendly</p>
                <p>● Unlimited color (CMYK & Pantone)</p>
                <p>● Without drop-off</p>
              </div>
            </div>
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
		name:"about_us",
		components:{
			TopView,
			FooterTwo
		},
		data(){
			return{
        aboutImageList: [
          {
            url: require('../../assets/images_new/about_1.png')
          },
          {
            url: require('../../assets/images_new/about_2.png')
          },
          {
            url: require('../../assets/images_new/about_3.png')
          },
          {
            url: require('../../assets/images_new/about_4.png')
          }
        ]
			}
		},
		metaInfo: {
			title: "Carton box manufacturer and supplier in Malaysia | Offset and Digital Printing",
			meta: [
			  {name: "description", content: "Tiny minimums, instant quotes, and fast turnaround custom carton box to print for you." },
			],
		},
		methods:{

		}
	}
</script>

<style lang="less" scoped>

	.container{
    background: rgb(209, 204, 200);

		.content{
			position: relative;

      .about_first_screen {
        padding: 30px 160px 100px;
        display: flex;
        justify-content: space-between;

        .first_screen_left {
          width: 48%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;

          .first_image_box {
            display: flex;
            justify-content: center;
            align-items: center;

            &:nth-of-type(1) {
              width: 69%;
            }

            &:nth-of-type(2) {
              width: 27%;
            }

            &:nth-of-type(3) {
              width: 29%;
              margin-top: 20px;
            }

            &:nth-of-type(4) {
              width: 69%;
              margin-top: 20px;
            }

            img {
              width: 100%;
            }
          }
        }

        .first_screen_right {
          width: 48%;

          h3 {
            color: rgb(181, 143, 142);
          }

          h1 {
            color: rgb(79, 73, 70);
          }

          p {
            color: rgb(125, 127, 114);
            text-align: justify;

            &:first-of-type {
              color: rgb(74, 68, 66);
            }
          }
        }
      }

			.content_about {
				margin-bottom: 130px;
				.content_about_tit {
					font-family:'DMSerifDisplay-Regular';
					color: #4F4946;
					font-size: 48px;
					text-align: center;
					padding-top: 30px;
				}
				.content_about_img {
					width: 1032px;
					height: 393px;
					display: flex;
					align-items: center;
					justify-content: center;
					margin: 62px auto;
					img {
						width: 1000px;
						height: auto;
					}
				}
				.content_about_text {
					margin: 0 234px 0 320px;
					font-family:'Roboto-Regular';
					color: #494949;
					p {
						font-size: 21px;
					}
				}
			}

      .video_box {
        background: #E4DFDB;
        padding: 66px 0;

        .video-js {
          width: 860px;
          height: 460px;
          border-radius: 50px;
          overflow: hidden;
          background-color: #272831;
          display: block;
          margin: 10px auto 100px auto;
          box-shadow: 0px 40px 50px 0px #777;
        }
      }

			.text_main{
				padding: 0 0 120px 0;
				background-color: #BEB6AF;
				.text_main_tit {
					font-family:'DMSerifDisplay-Regular';
					color: #4F4946;
					font-size: 48px;
					padding: 52px 0;
					text-align: center;
				}
				.block_one{
					display: flex;
					align-items: center;
					justify-content: space-between;
					.img{
						background-color: #7C736D;
						width: 616px;
						height: 646px;
						position: relative;
						img{
							width: 800px;
							height: auto;
							position: absolute;
							right: -266px;
							top: 109px;
						}
					}
					.text{
						font-family:'Roboto-Regular';
						line-height: 40px;
						color: #565656;
						width: 936px;
						padding-right: 37px;
						.text_tit {
							font-family:'Roboto-Bold';
							color: #49423E;
							font-size: 32px;
							padding: 20px 0;
							font-weight: bold;
						}
						.text_warp {
							font-size: 20px;
						}
					}
				}
				.block_two{
					display: flex;
					align-items: center;
					justify-content: space-between;
					position: relative;
					margin: 109px 0 0 140px;
					border-left: 1px solid #7C736D;
					border-top: 1px solid #7C736D;
					padding: 0 37px 70px 100px;
					.text{
						font-family:'Roboto-Regular';
						line-height: 40px;
						color: #565656;
						width: 936px;
						padding-top: 40px;
						.text_tit {
							font-family:'Roboto-Bold';
							color: #49423E;
							font-size: 32px;
							padding: 20px 0;
							font-weight: bold;
						}
						.text_warp {
							font-size: 20px;
						}
					}
					.img{
						position: absolute;
						right: 37px;
						top: -110px;
						img{
							width: 740px;
							height: auto;
						}
					}
				}
				.block_two:before {
					content: '';
					height: 1px;
					width: 140px;
					position: absolute;
					left: -140px;
					bottom: 0;
					background-color: #7C736D;
				}
			}

			.menu {
				padding: 157px 235px 100px 392px;

				.menu_list {
					.menu_item {
						display: flex;
						align-items: center;
						margin-bottom: 63px;
						.menu_item_img {
							width: 450px;
							img {
								width: 450px;
								height: auto;
							}
						}
						.menu_item_con {
							margin-left: 84px;
							.menu_item_con_tit {
								font-family:'DMSerifDisplay-Regular';
								color: #46474B;
								font-size: 48px;
								margin-bottom: 10px;
							}
							.menu_item_con_text {
								font-family:'Roboto-Regular';
								font-size: 21px;
								color: #565656;
								div {
									padding: 10px 0;
								}
							}
						}
					}
				}
			}

      .feature_box {
        padding: 86px 200px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .feature_title {
          text-align: center;
          color: rgb(185, 151, 140);
          font-size: 30px;
          font-weight: bold;
        }

        .feature_subhead {
          width: 500px;
          margin-top: 30px;
          text-align: center;
          font-size: 48px;
          font-weight: bolder;
          color: rgb(70, 70, 75);
        }

        .feature_content {
          width: 100%;
          margin-top: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          &>div {
            width: 32%;
            height: 100%;
          }

          .feature_content_center {
            display: flex;
            align-items: center;

            img {
              width: 100%;
            }
          }

          .feature_content_title {
            display: flex;
            align-items: center;

            h3 {
              color: rgb(73, 66, 62);
            }

            img {
              width: 100px;
              margin-left: 20px;
            }
          }

          .feature_content_content {
            p {
              color: rgb(89, 89, 89);
              text-align: justify;
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
    .about_first_screen {
      flex-direction: column;

      .first_screen_left, .first_screen_right {
        width: 100% !important;
      }

      .first_screen_right {
        h3 {
          font-size: 16px !important;
        }

        h1 {
          font-size: 20px !important;
        }

        p {
          font-size: 14px !important;
        }
      }
    }

    .feature_box {
      padding: 50px !important;

      .feature_subhead {
        width: 80% !important;
      }

      .feature_content {
        flex-direction: column;

        &>div {
          width: 100% !important;
        }

        .feature_content_center {
          margin: 40px 0;
        }

        .feature_content_title {
          h3 {
            font-size: 16px !important;
            zoom: 0.7 !important;
          }
        }

        .feature_content_content {
          p {
            font-size: 14px !important;
            zoom: 0.7 !important;
          }
        }
      }
    }

		.content {
			.content_about {
				padding: 0 20px !important;
				.content_about_tit{
					font-weight: bold;
				}
				.content_about_img {
					width: auto !important;
					margin: 62px 40px !important;
					img {
						width: 100% !important;
					}
				}
				.content_about_text {
					margin: 0 40px !important;
					p {
						font-size: 30px !important;
					}
				}
			}
			.video-js {
				width: 90% !important;
				height: 1200px !important;
				zoom: 0.5 !important;
				border-radius: 120px !important;
			}
			.text_main {
				.block_one {
					display: block !important;
					.img {
						width: 520px !important;
						height: 520px !important;
						position: relative;

						img{
							width: 700px !important;
							height: auto !important;
							position: absolute;
							right: -266px;
							top: 80px !important;
							padding: 0 20px !important;
						}
					}
					.text {
						width: auto !important;
						padding: 0 60px 0 60px !important;
					}
				}
				.block_two {
					display: block !important;
					margin-bottom: 400px !important;
					.text {
						width: auto !important;
						padding-right: 20px !important;
					}
					.img {
						top: auto !important;
						bottom: -400px !important;
						padding: 0 20px !important;
						img {
							width: 650px !important;
						}
					}
				}
			}
			.menu {
				padding: 200px 60px !important;
				.menu_list {
					.menu_item {
						&:first-child{
							margin-bottom: 150px !important;
						}
						.menu_item_img {
							width: 250px;
							img {
								width: 250px !important;
								height: auto;
							}
						}
						.menu_item_con {
							margin-left: 20px !important;
							width: 360px;
							.menu_item_con_tit {
								font-size: 32px !important;
								overflow: hidden;
								text-overflow:ellipsis;
								white-space: nowrap;
								font-weight: bold;
							}
							.menu_item_con_text {
								div {
									padding: 5px 0 !important;
									overflow: hidden;
									text-overflow:ellipsis;
									white-space: nowrap;
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

	@supports (-webkit-overflow-scrolling: touch) {
		.content {
			.content_about {
				padding: 0 20px !important;
				.content_about_tit{
					font-weight: bold;
				}
				.content_about_img {
					margin: 300px 40px !important;
				}
				.content_about_text {
					p {
						font-size: 30px !important;
					}
				}
			}
			.video-js{
				// padding: 0 20px !important;
			}
			.text_main {
				padding-bottom: 700px !important;
				.block_one {
					.img {
						width: 1200px !important;
						height: 1200px !important;
						img {
							width: 1600px !important;
							right: -600px !important;
							top: 250px !important;
						}
					}
					.text {
						line-height: 90px !important;
						.text_tit {
							padding: 40px 0 !important;
						}
						.text_warp {
							font-size: 26px !important;
						}
					}
				}
				.block_two {
					.img {
						top: auto !important;
						bottom: -950px !important;
						img {
							width: 1600px !important;
						}
					}
					.text {
						line-height: 90px !important;
						.text_tit {
							padding: 40px 0 !important;
						}
						.text_warp {
							font-size: 26px !important;
						}
					}
				}
			}
			.menu {
				.menu_list {
					.menu_item {
						.menu_item_img {
							width: 700px !important;
							img {
								width: 700px !important;
								height: auto;
							}
						}
						.menu_item_con {
							flex: 1;
							margin-left: 80px !important;
							.menu_item_con_tit {
								font-weight: bold;
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
