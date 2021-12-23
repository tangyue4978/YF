<template>
	<div class="index">
		<div class="container">
			<div class="topview">
				<top-view :index="4"></top-view>
			</div>
			<div class="content">
				<div class="header">Job Career</div>
				<div class="list_area">
					<div class="list_row" >
						<div class="list_left" v-for="(item,index) in job_career_list" :key="index">
							<div class="left_block">
								<div class="left">
									<img :src="item.img" />
								</div>
								<div class="center">
									<div class="block_name">{{item.title}}</div>
									<div class="level">{{item.executive}}</div>
									<div class="block_info">
										<div class="time">
											<img src="../../assets/images/clock_gray.png" />
											<div class="text">{{ item.fullTime }}</div>
										</div>
										<div class="position">
											<img src="../../assets/images/position.png" />
											<div class="text">{{ item.locale }}</div>
										</div>
									</div>
									<div class="block_tip">{{item.subTitle}}</div>
								</div>

							</div>
							<div class="right" @click="jump_detail(index)">VIEW DETAILS</div>
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
  import JobApi from "../../api/job";

	export default{
		name:"job_career",
		components:{
			TopView,
			FooterTwo
		},
		data(){
			return {
			  imageList: [
          require("@/assets/images/icon_receiver_assistant.png"),
          require("@/assets/images/icon_production_leader.png"),
          require("@/assets/images/icon_engineer.png"),
          require("@/assets/images/icon_operator.png"),
          require("@/assets/images/icon_receiver_assistant.png"),
          require("@/assets/images/icon_production_leader.png"),
          require("@/assets/images/icon_engineer.png"),
          require("@/assets/images/icon_operator.png"),
          require("@/assets/images/icon_receiver_assistant.png"),
          require("@/assets/images/icon_production_leader.png"),
          require("@/assets/images/icon_engineer.png"),
          require("@/assets/images/icon_operator.png"),
        ],
				job_career_list:[{}, {}, {}, {}]
			}
		},
		metaInfo: {
			title: "Build your career with YF Packaging in Malacca",
			meta: [
			  { name: "description", content: "YF Packaging provide career opportunity to talents who want to join us in Malacaa. Apply Now!" },
			],
		},

    mounted() {
		  this.fetchData()
    },

    methods:{
		  fetchData() {
		    JobApi.getList().then(res => {
          if (res.status === 200) {
            let cacheList = res.data
            let _imageList = this.imageList

            cacheList.forEach((item, index) => {
              item.img = _imageList[index]
            })

            this.job_career_list = cacheList
            localStorage.setItem('job_career_list', JSON.stringify(cacheList))
          }
        })
      },

      jump_detail(id){
				console.log(id)
				this.$router.push({ path: '/job_career/job_career_detail',query:{id:id}})
			}
		}
	}
</script>

<style lang="less" scoped>
	.container{
		background: #E4DFDB;
		.content{
			.header{
				font-size: 48px;
				font-family: 'DMSerifDisplay-Regular';
				line-height: 58px;
				color: #4F4946;
				margin-top: 3px;
				text-align: center;
				padding-top: 30px;
			}
			.list_area{
				margin: 88px 224px 0 207px;
				.list_row{
					display: flex;
					align-items: center;
					justify-content: space-between;
					flex-wrap: wrap;
					.list_left{
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 43%;
						height: 249px;
						background: #FFFFFF;
						opacity: 1;
						border-radius: 15px;
						padding:0 18px 0 55px;
						margin-bottom: 29px;
						box-shadow: 0px 4px 25px rgba(0,0,0,0.2);
						.left_block{
							display: flex;
							align-items: flex-start;
							.left{
								width: 72px;
								height: 72px;
								background: #E4DFDB;
								border-radius: 50%;
								display: flex;
								align-items: center;
								justify-content: center;
								margin-top: 33px;
								img{
									width: 29px;
									height: auto;
								}
							}
							.center{
								margin:0 24px 0 45px;
								.block_name{
									font-size: 25px;
									font-family: 'Roboto-Medium';
									line-height: 30px;
									color: #424444;
									font-weight: bold;
								}
								.level{
									margin-top: 7px;
									width: 184px;
									height: 37px;
									background: #7C736D;
									opacity: 1;
									border-radius: 6px;
									font-size: 18px;
									font-family: 'Roboto-Bold';
									line-height: 37px;
									color: #F4F4F4;
									text-align: center;
									font-weight: bold;
								}
								.block_info{
									display: flex;
									align-items: center;
									margin: 24px 0 21px;
									.time{
										display: flex;
										align-items: center;
										margin-right: 58px;
										img{
											width: 18px;
											height: 18px;
										}
										.text{
											font-size: 18px;
											font-family: 'Roboto-Regular';
											line-height: 22px;
											color: #424444;
											margin-left: 10px;
										}
									}
									.position{
										display: flex;
										align-items: center;
										img{
											width: 15px;
											height:21px;
										}
										.text{
											font-size: 18px;
											font-family: 'Roboto-Regular';
											line-height: 22px;
											color: #424444;
											margin-left: 10px;
										}
									}
								}
								.block_tip{
									max-width: 300px;
									font-size: 18px;
									font-family: 'Roboto-Regular';
									line-height: 22px;
									color: #818F91;
									overflow: hidden;
									text-overflow:ellipsis;
									white-space: nowrap;
								}
							}

						}
						.right{
							width: 181px;
							height: 57px;
							display: flex;
							align-items: center;
							justify-content: center;
							background: #E4DFDB;
							opacity: 1;
							border-radius: 9px;
							font-size: 17px;
							font-family: 'Roboto-Black';
							color: #7C736D;
							letter-spacing: 2px;
							cursor: pointer;
							font-weight: bold;
						}
					}

				}

			}
		}
		.line{
			width: 100%;
			height: 1px;
			background-color:  #BBB6B2;
			margin-top: 76px;
		}

	}

	// 媒体查询
	@media screen and (max-width: 600px) {
		.content{
			.header {
				font-size: 55px !important;
				font-weight: bold;
			}
			.list_area {
				margin: 60px 60px !important;
				padding-bottom: 30px !important;
				.list_row {
					display: block !important;
					.list_left {
						width: 93.5% !important;
						height: auto !important;
						padding: 40px 20px 40px 30px !important;
						margin-bottom: 50px !important;
						.left_block {
							.center {
								margin: 0 20px 0 30px !important;
								.block_info {
									margin: 10px 0 !important;
									justify-content: space-between;
									.time {
										margin: 0 !important;
									}
									.text {
										font-size: 15px !important;
									}
								}
								.block_tip {
									max-width: 260px !important;
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
			padding-top: 80px;
			.header {
				line-height: 180px !important;
				font-weight: bold;
			}
			.list_area {
				.list_row {
					.list_left {
						padding: 80px 40px 80px 60px !important;
						.left_block {
							width: 70%;
							.left {
								width: 200px !important;
								height: 200px !important;
								img {
									width: 80px !important;
								}
							}
							.center {
								width: 70%;
								margin: 0 60px 0 60px !important;
								.block_name {
									line-height: 80px !important;
								}
								.level {
									width: 450px !important;
									height: 100px !important;
									line-height: 100px !important;
									border-radius: 20px !important;
								}
								.block_info {
									margin: 40px 0 !important;
									justify-content: space-between;
									.time {
										margin: 0 !important;
										img {
											width: 60px !important;
											height: auto !important;
										}
									}
									.position {
										img {
											width: 60px !important;
											height: auto !important;
										}
									}
									.text {
										font-size: 20px !important;
									}
								}
								.block_tip {
									max-width: 100% !important;
									line-height: 70px !important;
									font-size: 20px !important;
								}
							}
						}
						.right {
							width: 540px !important;
							height: 150px !important;
							line-height: 150px !important;
							font-size: 21px !important;
							border-radius: 20px !important;
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
