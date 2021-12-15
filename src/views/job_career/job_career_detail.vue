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
								<img src="../../assets/images/icon_receiver_assistant.png" />
							</div>
							<div class="block_name">{{job_career_index == 1? 'Receiver Assistant' : job_career_index ==2 ?'Production Supervisor': job_career_index==3 ? 'Mechanical Engineer' : 'Production Operator'}}</div>
							<div class="level">{{job_career_index == 1? 'Non Executive' : job_career_index ==2 ?'Senior Executive': job_career_index==3 ? 'Executive' : 'Non-Executive'}}</div>
							<div class="block_info">
								<div class="time">
									<img src="../../assets/images/clock_fff.png" />
									<div class="text">Full-Time</div>
								</div>
								<div class="position">
									<img src="../../assets/images/icon_position_f.png" />
									<div class="text">Melaka</div>
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
							<div class="main_table_item" v-if="job_career_index == 1">Minimum SPM holder</div>
							<div class="main_table_item" v-if="job_career_index == 2">Minimum Diploma holder or in any production specialization.</div>
							<div class="main_table_item" v-if="job_career_index == 3">Minimum Diploma/Degree in IT/Mechanical Engineering</div>
							<div class="main_table_item" v-if="job_career_index == 4">Minimum SPM holder</div>
						</div>
						<div class="main_table_list">
							<div class="main_table_tit">Years of Experience</div>
							<div class="main_table_item" v-if="job_career_index == 1">1 year </div>
							<div class="main_table_item" v-if="job_career_index == 2">3 years in manufacturing field</div>
							<div class="main_table_item" v-if="job_career_index == 3">2 years above will be an advantage</div>
							<div class="main_table_item" v-if="job_career_index == 4">0(fresh graduates will be welcomed)</div>
						</div>
						<div class="main_table_list">
							<div class="main_table_tit">Age Range of Candidate</div>
							<div class="main_table_item" v-if="job_career_index==1">18-35 years old</div>
							<div class="main_table_item" v-if="job_career_index==2">28-45 years old</div>
							<div class="main_table_item" v-if="job_career_index==3">24-45 years old</div>
							<div class="main_table_item" v-if="job_career_index==4">18-45 years old</div>
						</div>
						<div class="main_table_list">
							<div class="main_table_tit">Monthly Salary</div>
							<div class="main_table_item">-</div>
						</div>
						<div class="main_table_list">
							<div class="main_table_tit">Responsibilities</div>
							<div class="main_table_item" v-if="job_career_index == 1">
								<div>• Check Delivery Order against each raw material, in direct and other materials with quantity received.</div>
								<div>• Visual Inspection for the quality product and during unloading from supplier lorry.</div>
								<div>• Receiving and signing of the Delivery Order.</div>
								<div>• Slot in product label and remark product detail on the board after inspection pass.</div>
								<div>• Assist to unloading the deliveries from lorry.</div>
								<div>• Processing returns for reject items after verify by QC.</div>
								<div>• Assist to organizing and storing received items in appropriate areas with production storekeeper.</div>
								<div>• Assist to record the incoming and outgoing pallet by supplier.</div>
								<div>• Any ad hoc task as assigned by superior.</div>
								<div class="line"></div>
							</div>
							<div class="main_table_item" v-if="job_career_index == 2">
								<div>• Maintain staff or operator by recruiting, selecting, ordering, training employees and developing personal growth opportunity.</div>
								<div>• Accomplish staff or operator job result by coaching, counseling and disciplining employees, planning, monitoring and  appraising  job  results, conducting training  and  implementing enforcing system, policy and standard operating procedure (SOP).</div>
								<div>• Maintain safety healthy work environment by establishing and enforcing organization standard and adhering to legal regulation.</div>
								<div>• Provide quality service by enforcing quality and customer service standard.</div>
								<div>• Maintain professional and technical knowledge by attending educational workshop and reviewing professional publication.</div>
								<div>• Contribute to team effort by accomplish if related result as needed.</div>
								<div>• Review work order line clean for production instruction and control and preparing of production inventory records.</div>
								<div>• To monitoring and ensuring achieving of KPI that been given at all section.</div>
								<div>• To arrange sales order production follow to date by date at all department or section and ensure each section is to implement 5S at all the time.</div>
								<div>• Able transfer to customers or clients side for rectification duty purposes.</div>
								<div>• To minimize double job (rejection) at all section.</div>
								<div>• Monitoring maintenance machine schedule and forklift daily maintenance checklist record.</div>
								<div>• Complete operation by developing schedule,assigning and monitoring works, gathering resources, implementing productivity standard,resolving operation problem, maintaining reference manuals and implementing new procedure.  </div>
								<div>• Any ad hoc task as assigned by superior.</div>
								<div class="line"></div>
							</div>
							<div class="main_table_item" v-if="job_career_index == 3">
								<div>• Handle digital printing machines and software programs to effectively create materials per client request.Continuous inkjet digital knowledge, software knowledge, failure analysis knowledge, reliability engineering.Evaluate final product’s overall performance, reliability and safety.</div>
								<div class="line"></div>
							</div>
							<div class="main_table_item" v-if="job_career_index == 4">
								<div>• Setup the production equipment and supplies before executing the job order.</div>
								<div>• Operate equipment safely and effectively for production process.</div>
								<div>• Ensure that equipment is maintained in good and safe working condition.</div>
								<div>• Inspect equipment to identify any replacement, malfunction and repair.</div>
								<div>• Perform regular equipment maintenance to ensure production capacity and quality.</div>
								<div>• Repair and clean the equipment when needed.</div>
								<div>• Work under the guidance of Supervisor to perform and complete the assigned duties in timely manner.</div>
								<div>• Follow the safety procedure and company policy for equipment operation.</div>
								<div>• Recommend process improvement to enhance operation to Supervisor immediately.</div>
								<div>• Maintain the work area clean, safe and organized.</div>
								<div>• Ensure every each department on section KPI% is achieve.</div>
								<div>• Any ad hoc task as assigned by superior.</div>
								<div class="line"></div>
							</div>
						</div>
						<div class="main_table_list">
							<div class="main_table_tit">Requirements</div>
							<div class="main_table_item" v-if="job_career_index == 1">
								<div>Able to read and write basic Bahasa English.</div>
								<div>Skilful in operating and forklift driving will be added advantage.</div>
								<div class="line"></div>
								<div>EPF+SOSCO+EIS+BONUS, Please contact：06-263 5860/012-6825273</div>
								<div>Ms Vivian/Mr Michael Email resume : hr@yfpackagingsb.com</div>
							</div>
							<div class="main_table_item" v-if="job_career_index == 2">
								<div>Required languages : Bahasa Malaysia, English.Must computer literate, knowledge with Microsoft Office.</div>
								<div>Minimum 3 years experience at factory field with knowledge in ISO 9001 and ISO 14001, 5S will be an added advantage.Matured, proactive and dynamic individual equipped with excellent communication, leadership, coaching and problem solving skills.</div>
								<div>Able to work with minimum supervision an self –motivated.</div>
								<div class="line"></div>
								<div>EPF+SOSCO+EIS+BONUS, Please contact：06-263 5860/012-6825273 </div>
								<div>Ms Vivian/Mr Michael Email resume : hr@yfpackagingsb.com</div>
							</div>
							<div class="main_table_item" v-if="job_career_index == 3">
								<div>IT /Mechanical Engineering background, printing operation & maintenance experience/Hands-on experience with computer-aided engineering (CAM) and computer-aided manufacturing (CAE)</div>
								<div class="line"></div>
								<div>EPF+SOSCO+EIS+BONUS, Please contact：06-263 5860/012-6825273</div>
								<div>Ms Vivian/Mr Michael Email resume : hr@yfpackagingsb.com</div>
							</div>
							<div class="main_table_item" v-if="job_career_index == 4">
								<div>Basic principles of writing and speaking skills.</div>
								<div class="line"></div>
								<div>EPF+SOSCO+EIS+BONUS, Please contact：06-263 5860/012-6825273 </div>
								<div>Ms Vivian/Mr Michael Email resume : hr@yfpackagingsb.com</div>
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
				job_career_index:1
			}
		},
		metaInfo: {
			title: "Build your career with YF Packaging in Malacca",
			meta: [
			  { name: "description", content: "YF Packaging provide career opportunity to talents who want to join us in Malacaa. Apply Now!" },
			],
		},
		mounted() {
			this.job_career_index = this.$route.query.id
			console.log(this.job_career_index)
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
