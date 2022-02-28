<template>
	<div class="index">
		<div class="container">
			<div class="topview">
				<top-view :index="5"></top-view>
			</div>
			<div class="content">
				<div class="header">Gallery</div>
        <div class="type_box">
          <template v-for="(item, index) in typeList">
            <div :class="['type_item', currentType === index ? 'active' : '']" :key="index" @click="changeType(index)">
              <span>{{ item }}</span>
            </div>
          </template>
        </div>
				<div class="line"></div>
				<div class="content_area">
					<div class="img_list">
            <template v-for="(item, index) in galleryList">
              <div class="img" @mouseover="currentIndex = index" @mouseout="currentIndex = null">
                <img :src="$rootApi + '/' + item.url" v-show="currentIndex !== index" />
                <img src="https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF" v-show="currentIndex === index" />

                <h5>{{ item.category }}</h5>
              </div>
            </template>
					</div>
<!--					<div class="footer_pagination">-->
<!--						<div class="text_size">2 of 4</div>-->
<!--						<div class="text">-->
<!--							<img src="../../assets/images/previous.png" />-->
<!--						</div>-->
<!--						<div class="text_pn">PREV</div>-->
<!--						<div class="text">1</div>-->
<!--						<div class="text av">2</div>-->
<!--						<div class="text">3</div>-->
<!--						<div class="text">4</div>-->
<!--						<div class="text_pn">NEXT</div>-->
<!--						<div class="text">-->
<!--							<img src="../../assets/images/next_page.png" />-->
<!--						</div>-->
<!--					</div>-->
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
  import GalleryApi from "../../api/gallery";
	// import Pagination from '@/components/Pagination/wallet.vue'
	export default{
		name:"gallery",
		components:{
			TopView,
			FooterTwo
		},
		data(){
			return{
				typeList: ['Diecut box', 'Rsc box', 'Custom box'],
        currentType: 0,
        initGalleryList: [],
        galleryList: [],
        currentIndex: null
			}
		},
		metaInfo: {
			title: "Gallery of Custom Carton Box | YF Pakaging",
			meta: [
			  { name: "description", content: "View all the products YF Packaging have done for pass customers." },
			],
		},

    mounted() {
		  this.fetchData()
    },

    methods: {
      fetchData() {
        GalleryApi.getList().then(res => {
          this.initGalleryList = res.data

          this.changeType(0)
        })
      },

      changeType(index) {
        this.currentType = index
        let initList = this.initGalleryList
        let cacheType = this.typeList[index]
        let cacheList = []

        initList.forEach(item => {
          if (item.category === cacheType) {
            cacheList.push(item)
          }
        })

        this.galleryList = cacheList
      }
		}
	}
</script>

<style lang="less" scoped>
	.container{
		background-color: #E4DFDB;
		.content{
			margin: 0 214px 0 234px;
			.header{
				font-size: 48px;
				font-family: 'DMSerifDisplay-Regular';
				line-height: 58px;
				color: #4F4946;
				margin-top: 3px;
				text-align: center;
				padding-top: 30px;
			}

      .type_box {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 30px;

        .type_item {
          padding: 0 20px;
          background: #efefef;
          border: 2px solid #e1e1e1;
          box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.16);
          border-radius: 13px;
          font-size: 18px;
          font-family: "Roboto-Regular";
          line-height: 48px;
          color: #565656;
          text-align: center;
          margin-right: 17px;
          cursor: pointer;
          white-space: nowrap;
          overflow: hidden;
          display: flex;
          align-items: center;
          margin-bottom: 10px;

          &.active {
            background: #ffffff;
            border: 2px solid #dcb888;
            color: #dcb888;
            box-shadow: none;
          }
        }
      }

			.line{
				width: 100%;
				height: 1px;
				background-color: #C6BDB9;
				margin: 21px 0 46px;
			}
			.content_area{
        min-height: 100px;

				.img_list{
					display: flex;
					align-items: center;
					//justify-content: space-around;
					flex-wrap: wrap;

					.img{
						margin-bottom: 60px;
            margin-right: 35px;
            cursor: pointer;

            &:nth-of-type(4n) {
              margin-right: 0;
            }

						img{
							width: 333px;
							height: 333px;
						}

            h5 {
              text-align: center;
              line-height: 1;
            }
					}
				}
				.footer_pagination{
					display: flex;
					align-items: center;
					justify-content: flex-end;
					.text{
						width: 59px;
						height: 59px;
						background: #BEB6AF;
						border-radius: 10px;
						font-size: 16px;
						font-family: 'Roboto-Regular';
						line-height: 59px;
						color: #727272;
						text-align: center;
						margin-right: 8px;
						img{
							width: 17px;
							height: 17px;
						}
					}
					.text_pn{
						width: 76px;
						height: 59px;
						background: #BEB6AF;
						border-radius: 11px;
						margin-right: 9px;
						text-align: center;
						font-size: 16px;
						font-family: 'Roboto-Regular';
						line-height: 59px;
						color: #727272;
					}
					.text_size{
						font-size: 16px;
						font-family: 'Roboto-Regular';
						line-height: 59px;
						color: #727272;
						margin-right: 45px;
					}
					.av{
						background: #7C736D;
						color: #ffffff;
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
    .type_item {
      padding: 15px 30px !important;
    }

		.container {
			height: auto !important;
			padding: 0 20px 100px 20px !important;
			.header{
				font-size: 55px !important;
				font-weight: bold;
			}
			.content {
				margin: 0 40px 0 40px !important;
				.content_area {
					.img_list {
						.img {
							margin-bottom: 10px !important;
							width: 45% !important;
							height: 45% !important;
							img {
								width: 100% !important;
								height: 100% !important;
							}
						}
					}
					.footer_pagination {
						zoom: 1.2 !important;
						padding-top: 20px;
						padding-bottom: 50px !important;
					}
				}
			}
			.footer{
				padding: 80px !important;
			}
		}

	}

	@supports (-webkit-overflow-scrolling: touch) {
		.content {
			padding-top: 50px;
			padding-left: 20px !important;
			padding-right: 20px !important;
			.header {
				line-height: 180px !important;
			}
			.content_area {
				.footer_pagination {
					.text_size {
						width: 150px !important;
						font-size: 21px !important;
					}
					.text {
						width: 150px !important;
						height: 150px !important;
						line-height: 150px !important;
						font-size: 22px !important;
						img {
							width: 40px !important;
							height: auto !important;
						}
					}
					.text_pn {
						width: 200px !important;
						height: 150px !important;
						line-height: 150px !important;
						font-size: 22px !important;
					}
				}
			}
		}
		.footer{
			padding: 80px !important;
		}
	}
</style>




