<template>
	<div class="index">
		<div class="container">
			<div class="topview">
				<top-view :index="4"></top-view>
			</div>
			<div class="content">
				<div class="back" @click="$router.go(-1)"><< Back</div>
				<div class="content_main">
					<div class="main_top">
						<div class="block">
							<div class="icon_img">
								<img :src="job_career.img" />
							</div>
							<div class="block_name">{{ job_career.title }}</div>
							<div class="level">{{ job_career.executive }}</div>
							<div class="block_info">
								<div class="time">
									<img src="../../assets/images/clock_fff.png" />
									<div class="text">{{ job_career.fullTime }}</div>
								</div>
								<div class="position">
									<img src="../../assets/images/icon_position_f.png" />
									<div class="text">{{ job_career.locale }}</div>
								</div>
								<div class="position">
									<img src="../../assets/images/icon_position_f.png" />
									<div class="text">Merlimau</div>
								</div>
							</div>
						</div>
					</div>
					<div class="main_table">
						<div class="main_table_list">
							<div class="main_table_tit">Qualification</div>
							<div class="main_table_item">{{ job_career.qualification }}</div>
						</div>
						<div class="main_table_list">
							<div class="main_table_tit">Years of Experience</div>
              <div class="main_table_item">{{ job_career.experience }}</div>
						</div>
						<div class="main_table_list">
							<div class="main_table_tit">Age Range of Candidate</div>
              <div class="main_table_item">{{ job_career.candidate }}</div>
						</div>
						<div class="main_table_list">
							<div class="main_table_tit">Monthly Salary</div>
							<div class="main_table_item">{{ job_career.monthlySalary || '-' }}-</div>
						</div>
						<div class="main_table_list">
							<div class="main_table_tit">Responsibilities</div>
							<div class="main_table_item">
                <template v-if="job_career.responsibilities">
                  <template v-for="(item, index) in JSON.parse(job_career.responsibilities)">
                    <div :key="index">{{ item }}</div>
                  </template>
                </template>

								<div class="line"></div>
							</div>
						</div>
						<div class="main_table_list">
							<div class="main_table_tit">Requirements</div>
              <div class="main_table_item">
                <template v-if="job_career.requirements">
                  <template v-for="(item, index) in JSON.parse(job_career.requirements)">
                    <div :key="index">{{ item }}</div>
                  </template>

                  <div class="line"></div>
                  <div>EPF+SOSCO+EIS+BONUS, Please contact：06-263 5860/012-6825273</div>
                  <div>Ms Vivian Email resume : hr@yfpackagingsb.com</div>
                </template>
              </div>
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
	export default{
		name:"job_career_detail",
		components:{
			TopView,
			FooterTwo
		},
		data(){
			return{
        job_career_list: [],
				job_career_index: 1,
        job_career: {}
			}
		},
		metaInfo: {
			title: "Build your career with YF Packaging in Malacca",
			meta: [
			  { name: "description", content: "YF Packaging provide career opportunity to talents who want to join us in Malacaa. Apply Now!" },
			],
		},
		mounted() {
			let job_career_index = this.$route.query.id
      let job_career_list = JSON.parse(localStorage.getItem('job_career_list'))
      this.job_career = job_career_list[job_career_index]
		},
		methods:{

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
						//color: #FFFFFF;
					}
				}
			}
		}
		.content{
			padding-bottom: 239px;
			.back{
				font-size: 25px;
				font-family: 'Roboto-Regular';
				line-height: 30px;
				color: #E4DFDB;
				margin: 71px 0 0 130px;
				cursor: pointer;
			}
			.content_main{
				.main_top{
					display: flex;
					justify-content: center;
					margin-top: -60px;
					.block{
						.icon_img{
							width: 69px;
							height: 69px;
							background: #E4DFDB;
							border-radius: 50%;
							display: flex;
							align-items: center;
							justify-content: center;
							margin: 33px auto 0;
							img{
								width: 29px;
								height: 38px;
							}
						}
						.block_name{
							font-size: 48px;
							font-family: 'DMSerifDisplay-Regular';
							line-height: 58px;
							color: #FFFFFF;
							margin: 16px 0 7px;
						}
						.level{
							width: 181px;
							height: 37px;
							background: #E4DFDB;
							opacity: 1;
							border-radius: 6px;
							font-size: 18px;
							font-family: 'Roboto-Bold';
							line-height: 37px;
							color: #7C736D;
							text-align: center;
							margin: 0 auto 41px;
							font-weight: bold;
						}
						.block_info{
							display: flex;
							align-items: center;
							.time{
								display: flex;
								align-items: center;
								img{
									width: 18px;
									height: 18px;
								}
								.text{
									font-size: 18px;
									font-family: 'Roboto-Regular';
									line-height: 22px;
									color: #FFFFFF;
									margin-left: 12px;
								}
							}
							.position{
								display: flex;
								align-items: center;
								margin-left: 59px;
								img{
									width: 15px;
									height: 21px;
								}
								.text{
									font-size: 18px;
									font-family: 'Roboto-Regular';
									line-height: 22px;
									color: #FFFFFF;
									margin-left: 12px;
								}
							}
						}

					}

				}
				.main_table{
					width: 1546px;
					background: #E4DFDB;
					opacity: 1;
					border-radius: 23px;
					margin: 38px auto 0;
					padding: 53px 82px;
					.main_table_list {
						padding: 16px 0;
						display: flex;
						border-bottom: 1px solid #C4BCB7;
						.main_table_tit {
							font-family: 'Roboto-Regular';
							width: 230px;
							color: #7C736D;
							font-size: 18px;
						}
						.main_table_item {
							font-family: 'Roboto-Regular';
							flex: 1;
							color: #212121;
							font-size: 20px;
							div {
								margin-bottom: 10px;
							}
							.line {
								height: 20px;
							}
						}
					}
					.main_table_list:last-child {
						border: none;
					}
				}
			}
		}

	}

	// 媒体查询
	@media screen and (max-width: 600px) {
		.content {
			.back {
				margin-left: 50px !important;
				font-size: 42px !important;
			}
			.content_main {
				padding: 0 20px !important;
				.main_top {
					width: 100%;
					.block {
						.icon_img {
							width: 140px !important;
							height: 140px !important;
							margin-bottom: 20px !important;
							img {
								width: 60px !important;
								height: auto !important;
							}
						}
						.block_name {
							margin: auto !important;
							text-align: center !important;
						}
						.level {
							width: 280px !important;
							height: 50px !important;
							line-height: 50px !important;
							font-size: 28px !important;
							margin-top: 30px !important;
						}
						.block_info {
							.text {
								font-size: 20px !important;
							}
						}
					}
				}
				.main_table {
					width: auto !important;
					margin: 38px 40px 0 40px !important;
					padding: 40px 30px !important;
					.main_table_list {
						display: block !important;
						.main_table_tit {
							width: auto !important;
							font-size: 28px !important;
							line-height: 40px !important;
						}
						.main_table_item {
							font-size: 28px !important;
							padding-top: 20px;
							.line {
								height: 20px !important;
							}
						}
					}
				}
			}
		}
		.footer{
			padding:80px !important;
		}
	}

	@supports (-webkit-overflow-scrolling: touch) {
		.content {
			.content_main {
				padding: 0 20px !important;
				.main_top {
					.block {
						.icon_img {
							width: 300px !important;
							height: 300px !important;
							img {
								width: 130px !important;
							}
						}
						.block_name {
							height: auto !important;
							margin: 80px 0 !important;
						}
						.level {
							width: 550px !important;
							padding: 40px 0 !important;
							border-radius: 20px !important;
							margin-bottom: 80px !important;
						}
						.block_info {
							img {
								width: 50px !important;
								height: auto !important;
							}
						}
					}
				}
				.main_table {
					padding: 80px !important;
					.main_table_list {
						.main_table_tit {
							line-height: 100px !important;
							padding: 20px 0 !important;
						}
					}
				}
			}
		}
		.footer{
			padding:80px !important;
		}
	}
</style>
