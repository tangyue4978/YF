<template>
  <div class="index">
    <div class="container">
      <div class="content">
        <top-view :index="2"></top-view>
        <div class="back" @click="$router.go(-1)"><< Back</div>
        <div class="content_detail">
          <div class="detail_left">
            <img :src="figureList[currentFigure].image" />
          </div>
          <!-- <div class="detail_left_two" v-if="product_index == 2">
						<img src="../../assets/images/die_cut_img.png" />
					</div> -->
          <div class="detail_right">
            <img src="../../assets/images/img_box.png" class="detail_box" />
            <div class="box_name">RSC Box</div>
            <div class="box_intro">
              RSC is an economical choice, best suited for industry standard,
              used for everything from storage to shipping.
            </div>
            <!-- <div class="box_intro" v-if="product_index == 2">A versatile custom mailer box that's stylish, sturdy and ready to ship directly in the mail. It looks great in any color and works for retail-ready gift boxes, subscription boxes, and e-commerce packaging.</div> -->
            <!-- <div class="box_ps" v-if="product_index == 2">
							<div class="">PS:</div>
							<div class="">1. Key in length, width, height and quantity you desired.</div>
							<div class="">2. Check for the TOTAL PRICE.</div>
							<div class="">3. Get quote and our customer service will   contact you shortly.</div>
						</div> -->
            <div class="quantity_select">
              <div
                :class="wall_index == 1 ? 'white_paper' : 'paper_block'"
                @click="tabWall(1)"
              >
                Single Wall
              </div>
              <div
                :class="wall_index == 2 ? 'white_paper' : 'paper_block'"
                @click="tabWall(2)"
              >
                Double Wall
              </div>
            </div>
            <div class="quantity_select">
              <div
                :class="paper_index == 1 ? 'white_paper' : 'paper_block'"
                @click="tabQuantity(1)"
              >
                White Paper
              </div>
              <div
                :class="paper_index == 2 ? 'brown_paper' : 'paper_block'"
                @click="tabQuantity(2)"
              >
                Brown Paper
              </div>
            </div>
            <div class="quantity_select">
              <div
                :class="colour_index == 1 ? 'white_paper' : 'paper_block'"
                @click="tabColour(1)"
              >
                Full colour
              </div>
              <div
                :class="colour_index == 2 ? 'white_paper' : 'paper_block'"
                @click="tabColour(2)"
              >
                1-2 colour
              </div>
              <div
                :class="colour_index == 3 ? 'white_paper' : 'paper_block'"
                @click="tabColour(3)"
              >
                Plain
              </div>
            </div>
            <div class="size">
              <div class="label">Length(L)</div>
              <input
                class="text_value"
                v-on:blur="handleInput"
                v-on:input="totalValue"
                v-model="box.length"
              />
              <!-- <input class="text_value" v-if="product_index==2" v-on:blur="handleInput" v-on:input="totalValue2" v-model="box.length"/> -->
            </div>
            <div class="text_tip" v-if="show_tip == true">
              Length need to greater than width at least 1mm
            </div>
            <div class="size">
              <div class="label">Width(W)</div>
              <input
                class="text_value"
                v-on:blur="handleInput"
                v-model="box.width"
                v-on:input="totalValue"
              />
              <!-- <input class="text_value" v-if="product_index==2" v-on:blur="handleInput"  v-model="box.width" v-on:input="totalValue2"/> -->
            </div>
            <div class="size">
              <div class="label">Height(H)</div>
              <input
                class="text_value"
                v-on:blur="handleInput"
                v-model="box.depth"
                v-on:input="totalValue"
              />
              <!-- <input class="text_value" v-if="product_index==2" v-on:blur="handleInput" v-model="box.depth" v-on:input="totalValue2" /> -->
            </div>
            <div class="size">
              <div class="label quantity">Quantity</div>
              <input
                class="text_value"
                v-model="box.quantity"
                v-on:input="totalValue"
              />
              <!-- <input class="text_value" v-if="product_index==2" v-model="box.quantity" v-on:input="totalValue2"/> -->
            </div>
            <!--						<div class="total_value">-->
            <!--							<div class="label">Total Price</div>-->
            <!--							<div class="text_value">MYR {{box.total_price | numFilter}}</div>-->
            <!--						</div>-->
            <div class="btn" @click="toShowDialog">Get quote</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      width="50%"
      center
      custom-class="dialog_style"
      :show-close="false"
      title="Get Quote"
    >
      <el-form :model="infoForm" v-if="!isShowAllPrice">
        <el-form-item label="Your Name*" label-width="200">
          <el-input v-model="infoForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Email Address*" label-width="200">
          <el-input v-model="infoForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Handphone Number*" label-width="200">
          <el-input v-model="infoForm.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <div class="total_price_box" v-if="isShowAllPrice">
        <span>Total Price</span>
        <span class="price_text">MTR {{ box.total_price | numFilter }}</span>
      </div>

      <span slot="footer" class="dialog-footer" v-if="!isShowAllPrice">
        <el-button class="cancel_btn" @click="dialogVisible = false"
          >CANCEL</el-button
        >
        <el-button class="next_btn" type="primary" @click="toNextDialog"
          >NEXT</el-button
        >
      </span>

      <span slot="footer" class="dialog-footer" v-if="isShowAllPrice">
        <el-button class="cancel_btn" @click="isShowAllPrice = false"
          >CANCEL</el-button
        >
        <el-button class="next_btn" type="primary" @click="toGetQuote"
          >GET QUOTE</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import TopView from "@/components/top.vue";
import Footer from "@/components/footer.vue";
import ProductApi from "../../api/product";

export default {
  name: "rsc_detail",
  components: {
    TopView,
    Footer,
  },
  data() {
    return {
      // product_index:2,
      box: {
        length: 0,
        width: 0,
        depth: 0,
        quantity: 0,
        total_price: 0,
      },
      price_per: 0,
      rel_price_per: 0,
      show_tip: false,
      paper_index: 1, //纸张的颜色
      wall_index: 0, //厚度
      colour_index: 3,
      figureList: [
        {
          image: require("../../assets/images_new/product_2_1.png"),
          paper: 1,
          color: 3,
        },
        {
          image: require("../../assets/images_new/product_2_2.png"),
          paper: 1,
          color: 2,
        },
        {
          image: require("../../assets/images_new/product_2_3.png"),
          paper: 1,
          color: 1,
        },
        {
          image: require("../../assets/images_new/product_2_4.png"),
          paper: 2,
          color: 3,
        },
        {
          image: require("../../assets/images_new/product_2_5.png"),
          paper: 2,
          color: 2,
        },
        {
          image: require("../../assets/images_new/product_2_6.png"),
          paper: 2,
          color: 1,
        },
      ], // 图片列表
      currentFigure: 0, // 当前图片 index
      dialogVisible: false, // 是否显示弹窗
      isShowAllPrice: false, // 是否显示金额
      infoForm: {},
    };
  },
  metaInfo: {
    title: "Custom your RSC box in a minute | YF Packaging",
    meta: [
      {
        name: "description",
        content:
          "RSC is an economical choice, best suited for industry standard",
      },
    ],
  },
  mounted() {},
  methods: {
    tabWall(index) {
      this.wall_index = index;
      this.totalValue();
    },
    tabQuantity(index) {
      const _this = this;

      this.paper_index = index;
      // console.log(this.paper_index)
      this.totalValue();
      // this.totalValue2()

      _this.currentFigure = _this.figureList.findIndex((item) => {
        return (
          _this.paper_index === item.paper && _this.colour_index === item.color
        );
      });
    },
    tabColour(index) {
      const _this = this;

      this.colour_index = index;
      this.totalValue();

      _this.currentFigure = _this.figureList.findIndex((item) => {
        return (
          _this.paper_index === item.paper && _this.colour_index === item.color
        );
      });
    },
    //盒子为RSC时的计算
    totalValue() {
      let length = this.box.length;
      let width = this.box.width;
      // 总长度 毫米单位换算成米
      if (Number(width) >= Number(length)) {
        this.show_tip = true;
        this.box.total_price = 0;
      } else {
        this.show_tip = false;
        let total_length = (30 + Number(length) * 2 + Number(width) * 2) / 1000;
        let total_width =
          (Number(this.box.depth) + (Number(width) / 2 + 2) * 2) / 1000;
        // 面积
        let area = total_length * total_width;
        // 单价
        if (this.wall_index != 1 && this.wall_index != 2) {
          //不选择纸张厚度
          this.$message({
            message: "请选择您对应的纸张厚度",
            type: "warning",
          });
        } else {
          if (this.paper_index != 1 && this.paper_index != 2) {
            //不选择所需纸张的提示
            this.$message({
              message: "请选择您需要的纸张",
              type: "warning",
            });
          } else {
            //单价
            if (this.wall_index == 1) {
              //Single Wall
              if (this.paper_index == 1) {
                //纸张为白色
                if (this.colour_index == 1) {
                  if (Number(this.box.quantity) < 201) {
                    this.price_per = area * 4.5;
                  } else if (
                    Number(this.box.quantity) >= 201 &&
                    Number(this.box.quantity) < 301
                  ) {
                    this.price_per = area * 4.3;
                  } else if (
                    Number(this.box.quantity) >= 301 &&
                    Number(this.box.quantity) < 501
                  ) {
                    this.price_per = area * 3.95;
                  } else if (
                    Number(this.box.quantity) >= 501 &&
                    Number(this.box.quantity) < 1001
                  ) {
                    this.price_per = area * 3.85;
                  } else if (
                    Number(this.box.quantity) >= 1001 &&
                    Number(this.box.quantity) < 2001
                  ) {
                    this.price_per = area * 3.65;
                  } else if (
                    Number(this.box.quantity) >= 2001 &&
                    Number(this.box.quantity) < 3001
                  ) {
                    this.price_per = area * 3.5;
                  } else if (
                    Number(this.box.quantity) >= 3001 &&
                    Number(this.box.quantity) < 4001
                  ) {
                    this.price_per = area * 3.3;
                  } else if (
                    Number(this.box.quantity) >= 4001 &&
                    Number(this.box.quantity) < 5001
                  ) {
                    this.price_per = area * 3.15;
                  }
                } else if (this.colour_index == 2) {
                  if (Number(this.box.quantity) < 201) {
                    this.price_per = area * 3.35;
                  } else if (
                    Number(this.box.quantity) >= 201 &&
                    Number(this.box.quantity) < 301
                  ) {
                    this.price_per = area * 3.1;
                  } else if (
                    Number(this.box.quantity) >= 301 &&
                    Number(this.box.quantity) < 501
                  ) {
                    this.price_per = area * 2.95;
                  } else if (
                    Number(this.box.quantity) >= 501 &&
                    Number(this.box.quantity) < 1001
                  ) {
                    this.price_per = area * 2.7;
                  } else if (
                    Number(this.box.quantity) >= 1001 &&
                    Number(this.box.quantity) < 2001
                  ) {
                    this.price_per = area * 2.45;
                  } else if (
                    Number(this.box.quantity) >= 2001 &&
                    Number(this.box.quantity) < 3001
                  ) {
                    this.price_per = area * 2.35;
                  } else if (
                    Number(this.box.quantity) >= 3001 &&
                    Number(this.box.quantity) < 4001
                  ) {
                    this.price_per = area * 2.3;
                  } else if (
                    Number(this.box.quantity) >= 4001 &&
                    Number(this.box.quantity) < 5001
                  ) {
                    this.price_per = area * 2.27;
                  }
                } else if (this.colour_index == 3) {
                  if (Number(this.box.quantity) < 201) {
                    this.price_per = area * 3.1;
                  } else if (
                    Number(this.box.quantity) >= 201 &&
                    Number(this.box.quantity) < 301
                  ) {
                    this.price_per = area * 2.95;
                  } else if (
                    Number(this.box.quantity) >= 301 &&
                    Number(this.box.quantity) < 501
                  ) {
                    this.price_per = area * 2.85;
                  } else if (
                    Number(this.box.quantity) >= 501 &&
                    Number(this.box.quantity) < 1001
                  ) {
                    this.price_per = area * 2.65;
                  } else if (
                    Number(this.box.quantity) >= 1001 &&
                    Number(this.box.quantity) < 2001
                  ) {
                    this.price_per = area * 2.4;
                  } else if (
                    Number(this.box.quantity) >= 2001 &&
                    Number(this.box.quantity) < 3001
                  ) {
                    this.price_per = area * 2.35;
                  } else if (
                    Number(this.box.quantity) >= 3001 &&
                    Number(this.box.quantity) < 4001
                  ) {
                    this.price_per = area * 2.3;
                  } else if (
                    Number(this.box.quantity) >= 4001 &&
                    Number(this.box.quantity) < 5001
                  ) {
                    this.price_per = area * 2.27;
                  }
                }
              } else if (this.paper_index == 2) {
                //纸张为棕色
                if (this.colour_index == 1) {
                  if (Number(this.box.quantity) < 201) {
                    this.price_per = area * 3.4;
                  } else if (
                    Number(this.box.quantity) >= 201 &&
                    Number(this.box.quantity) < 301
                  ) {
                    this.price_per = area * 3.1;
                  } else if (
                    Number(this.box.quantity) >= 301 &&
                    Number(this.box.quantity) < 501
                  ) {
                    this.price_per = area * 2.9;
                  } else if (
                    Number(this.box.quantity) >= 501 &&
                    Number(this.box.quantity) < 1001
                  ) {
                    this.price_per = area * 2.75;
                  } else if (
                    Number(this.box.quantity) >= 1001 &&
                    Number(this.box.quantity) < 2001
                  ) {
                    this.price_per = area * 2.7;
                  } else if (
                    Number(this.box.quantity) >= 2001 &&
                    Number(this.box.quantity) < 3001
                  ) {
                    this.price_per = area * 2.65;
                  } else if (
                    Number(this.box.quantity) >= 3001 &&
                    Number(this.box.quantity) < 4001
                  ) {
                    this.price_per = area * 2.6;
                  } else if (
                    Number(this.box.quantity) >= 4001 &&
                    Number(this.box.quantity) < 5001
                  ) {
                    this.price_per = area * 2.55;
                  }
                } else if (this.colour_index == 2) {
                  if (Number(this.box.quantity) < 201) {
                    this.price_per = area * 3.05;
                  } else if (
                    Number(this.box.quantity) >= 201 &&
                    Number(this.box.quantity) < 301
                  ) {
                    this.price_per = area * 2.8;
                  } else if (
                    Number(this.box.quantity) >= 301 &&
                    Number(this.box.quantity) < 501
                  ) {
                    this.price_per = area * 2.7;
                  } else if (
                    Number(this.box.quantity) >= 501 &&
                    Number(this.box.quantity) < 1001
                  ) {
                    this.price_per = area * 2.6;
                  } else if (
                    Number(this.box.quantity) >= 1001 &&
                    Number(this.box.quantity) < 2001
                  ) {
                    this.price_per = area * 2.3;
                  } else if (
                    Number(this.box.quantity) >= 2001 &&
                    Number(this.box.quantity) < 3001
                  ) {
                    this.price_per = area * 2.2;
                  } else if (
                    Number(this.box.quantity) >= 3001 &&
                    Number(this.box.quantity) < 4001
                  ) {
                    this.price_per = area * 2.15;
                  } else if (
                    Number(this.box.quantity) >= 4001 &&
                    Number(this.box.quantity) < 5001
                  ) {
                    this.price_per = area * 2.1;
                  }
                } else if (this.colour_index == 3) {
                  if (Number(this.box.quantity) < 201) {
                    this.price_per = area * 2.95;
                  } else if (
                    Number(this.box.quantity) >= 201 &&
                    Number(this.box.quantity) < 301
                  ) {
                    this.price_per = area * 2.65;
                  } else if (
                    Number(this.box.quantity) >= 301 &&
                    Number(this.box.quantity) < 501
                  ) {
                    this.price_per = area * 2.45;
                  } else if (
                    Number(this.box.quantity) >= 501 &&
                    Number(this.box.quantity) < 1001
                  ) {
                    this.price_per = area * 2.3;
                  } else if (
                    Number(this.box.quantity) >= 1001 &&
                    Number(this.box.quantity) < 2001
                  ) {
                    this.price_per = area * 2.2;
                  } else if (
                    Number(this.box.quantity) >= 2001 &&
                    Number(this.box.quantity) < 3001
                  ) {
                    this.price_per = area * 2.15;
                  } else if (
                    Number(this.box.quantity) >= 3001 &&
                    Number(this.box.quantity) < 4001
                  ) {
                    this.price_per = area * 2.1;
                  } else if (
                    Number(this.box.quantity) >= 4001 &&
                    Number(this.box.quantity) < 5001
                  ) {
                    this.price_per = area * 2.05;
                  }
                }
              }
            } else {
              //Double Wall
              if (this.paper_index == 1) {
                //纸张为白色
                if (this.colour_index == 1) {
                  //full colour
                  if (Number(this.box.quantity) < 201) {
                    this.price_per = area * 6.3;
                  } else if (
                    Number(this.box.quantity) >= 201 &&
                    Number(this.box.quantity) < 301
                  ) {
                    this.price_per = area * 6.1;
                  } else if (
                    Number(this.box.quantity) >= 301 &&
                    Number(this.box.quantity) < 501
                  ) {
                    this.price_per = area * 5.75;
                  } else if (
                    Number(this.box.quantity) >= 501 &&
                    Number(this.box.quantity) < 1001
                  ) {
                    this.price_per = area * 5.35;
                  } else if (
                    Number(this.box.quantity) >= 1001 &&
                    Number(this.box.quantity) < 2001
                  ) {
                    this.price_per = area * 5.1;
                  } else if (
                    Number(this.box.quantity) >= 2001 &&
                    Number(this.box.quantity) < 3001
                  ) {
                    this.price_per = area * 4.85;
                  } else if (
                    Number(this.box.quantity) >= 3001 &&
                    Number(this.box.quantity) < 4001
                  ) {
                    this.price_per = area * 4.6;
                  } else if (
                    Number(this.box.quantity) >= 4001 &&
                    Number(this.box.quantity) < 5001
                  ) {
                    this.price_per = area * 4.35;
                  }
                } else if (this.colour_index == 2) {
                  // 1-2colour
                  if (Number(this.box.quantity) < 201) {
                    this.price_per = area * 5.0;
                  } else if (
                    Number(this.box.quantity) >= 201 &&
                    Number(this.box.quantity) < 301
                  ) {
                    this.price_per = area * 3.9;
                  } else if (
                    Number(this.box.quantity) >= 301 &&
                    Number(this.box.quantity) < 501
                  ) {
                    this.price_per = area * 3.75;
                  } else if (
                    Number(this.box.quantity) >= 501 &&
                    Number(this.box.quantity) < 1001
                  ) {
                    this.price_per = area * 3.65;
                  } else if (
                    Number(this.box.quantity) >= 1001 &&
                    Number(this.box.quantity) < 2001
                  ) {
                    this.price_per = area * 3.55;
                  } else if (
                    Number(this.box.quantity) >= 2001 &&
                    Number(this.box.quantity) < 3001
                  ) {
                    this.price_per = area * 3.45;
                  } else if (
                    Number(this.box.quantity) >= 3001 &&
                    Number(this.box.quantity) < 4001
                  ) {
                    this.price_per = area * 3.4;
                  } else if (
                    Number(this.box.quantity) >= 4001 &&
                    Number(this.box.quantity) < 5001
                  ) {
                    this.price_per = area * 3.35;
                  }
                } else if (this.colour_index == 3) {
                  //Plain
                  if (Number(this.box.quantity) < 201) {
                    this.price_per = area * 4.35;
                  } else if (
                    Number(this.box.quantity) >= 201 &&
                    Number(this.box.quantity) < 301
                  ) {
                    this.price_per = area * 3.65;
                  } else if (
                    Number(this.box.quantity) >= 301 &&
                    Number(this.box.quantity) < 501
                  ) {
                    this.price_per = area * 3.55;
                  } else if (
                    Number(this.box.quantity) >= 501 &&
                    Number(this.box.quantity) < 1001
                  ) {
                    this.price_per = area * 3.45;
                  } else if (
                    Number(this.box.quantity) >= 1001 &&
                    Number(this.box.quantity) < 2001
                  ) {
                    this.price_per = area * 3.4;
                  } else if (
                    Number(this.box.quantity) >= 2001 &&
                    Number(this.box.quantity) < 3001
                  ) {
                    this.price_per = area * 3.35;
                  } else if (
                    Number(this.box.quantity) >= 3001 &&
                    Number(this.box.quantity) < 4001
                  ) {
                    this.price_per = area * 3.33;
                  } else if (
                    Number(this.box.quantity) >= 4001 &&
                    Number(this.box.quantity) < 5001
                  ) {
                    this.price_per = area * 3.28;
                  }
                }
              } else if (this.paper_index == 2) {
                //纸张为棕色
                if (this.colour_index == 1) {
                  //full colour
                  if (Number(this.box.quantity) < 201) {
                    this.price_per = area * 4.7;
                  } else if (
                    Number(this.box.quantity) >= 201 &&
                    Number(this.box.quantity) < 301
                  ) {
                    this.price_per = area * 4.3;
                  } else if (
                    Number(this.box.quantity) >= 301 &&
                    Number(this.box.quantity) < 501
                  ) {
                    this.price_per = area * 4.0;
                  } else if (
                    Number(this.box.quantity) >= 501 &&
                    Number(this.box.quantity) < 1001
                  ) {
                    this.price_per = area * 3.85;
                  } else if (
                    Number(this.box.quantity) >= 1001 &&
                    Number(this.box.quantity) < 2001
                  ) {
                    this.price_per = area * 3.75;
                  } else if (
                    Number(this.box.quantity) >= 2001 &&
                    Number(this.box.quantity) < 3001
                  ) {
                    this.price_per = area * 3.68;
                  } else if (
                    Number(this.box.quantity) >= 3001 &&
                    Number(this.box.quantity) < 4001
                  ) {
                    this.price_per = area * 3.6;
                  } else if (
                    Number(this.box.quantity) >= 4001 &&
                    Number(this.box.quantity) < 5001
                  ) {
                    this.price_per = area * 3.5;
                  }
                } else if (this.colour_index == 2) {
                  // 1-2colour
                  if (Number(this.box.quantity) < 201) {
                    this.price_per = area * 4.1;
                  } else if (
                    Number(this.box.quantity) >= 201 &&
                    Number(this.box.quantity) < 301
                  ) {
                    this.price_per = area * 3.45;
                  } else if (
                    Number(this.box.quantity) >= 301 &&
                    Number(this.box.quantity) < 501
                  ) {
                    this.price_per = area * 3.3;
                  } else if (
                    Number(this.box.quantity) >= 501 &&
                    Number(this.box.quantity) < 1001
                  ) {
                    this.price_per = area * 3.15;
                  } else if (
                    Number(this.box.quantity) >= 1001 &&
                    Number(this.box.quantity) < 2001
                  ) {
                    this.price_per = area * 3.05;
                  } else if (
                    Number(this.box.quantity) >= 2001 &&
                    Number(this.box.quantity) < 3001
                  ) {
                    this.price_per = area * 2.95;
                  } else if (
                    Number(this.box.quantity) >= 3001 &&
                    Number(this.box.quantity) < 4001
                  ) {
                    this.price_per = area * 2.9;
                  } else if (
                    Number(this.box.quantity) >= 4001 &&
                    Number(this.box.quantity) < 5001
                  ) {
                    this.price_per = area * 2.8;
                  }
                } else if (this.colour_index == 3) {
                  //Plain
                  if (Number(this.box.quantity) < 201) {
                    this.price_per = area * 3.9;
                  } else if (
                    Number(this.box.quantity) >= 201 &&
                    Number(this.box.quantity) < 301
                  ) {
                    this.price_per = area * 3.3;
                  } else if (
                    Number(this.box.quantity) >= 301 &&
                    Number(this.box.quantity) < 501
                  ) {
                    this.price_per = area * 3.15;
                  } else if (
                    Number(this.box.quantity) >= 501 &&
                    Number(this.box.quantity) < 1001
                  ) {
                    this.price_per = area * 3.0;
                  } else if (
                    Number(this.box.quantity) >= 1001 &&
                    Number(this.box.quantity) < 2001
                  ) {
                    this.price_per = area * 2.9;
                  } else if (
                    Number(this.box.quantity) >= 2001 &&
                    Number(this.box.quantity) < 3001
                  ) {
                    this.price_per = area * 2.8;
                  } else if (
                    Number(this.box.quantity) >= 3001 &&
                    Number(this.box.quantity) < 4001
                  ) {
                    this.price_per = area * 2.75;
                  } else if (
                    Number(this.box.quantity) >= 4001 &&
                    Number(this.box.quantity) < 5001
                  ) {
                    this.price_per = area * 2.65;
                  }
                }
              }
            }

            // 单价小于等于0.3=>0.7   0.31rm-0.60rm=>0.6    0.61rm-0.9=>0.5   0.91rm-1.2rm=>0.4   1.21rm-1.5rm=>0.3
            if (this.price_per < 0.31) {
              this.rel_price_per = this.price_per + 0.7;
            } else if (this.price_per >= 0.31 && this.price_per < 0.61) {
              this.rel_price_per = this.price_per + 0.6;
            } else if (this.price_per >= 0.61 && this.price_per < 0.91) {
              this.rel_price_per = this.price_per + 0.5;
            } else if (this.price_per >= 0.91 && this.price_per < 1.21) {
              this.rel_price_per = this.price_per + 0.4;
            } else if (this.price_per >= 1.21 && this.price_per < 1.51) {
              this.rel_price_per = this.price_per + 0.3;
            } else {
              this.rel_price_per = this.price_per;
            }
            // 判断数量是否超过200
            if (Number(this.box.quantity) > 200) {
              this.box.total_price =
                this.rel_price_per * Number(this.box.quantity);
            } else {
              if (Number(this.box.quantity) == 0) {
                this.box.total_price = 0;
              } else {
                if (
                  Number(length) == 0 ||
                  Number(width) == 0 ||
                  Number(this.box.depth) == 0
                ) {
                  this.box.total_price = 0;
                } else {
                  this.box.total_price =
                    this.rel_price_per * Number(this.box.quantity) + 80;
                }
              }
            }
          }
        }
      }
    },
    handleInput(e) {
      // 通过正则过滤小数点后两位
      e.target.value = e.target.value.match(/^\d*(\.?\d{0,2})/g)[0] || null;
    },

    // 显示弹窗
    toShowDialog() {
      if (!this.box.total_price) {
        return;
      }

      this.dialogVisible = true;
    },

    // 下一步
    toNextDialog() {
      this.isShowAllPrice = true;

      ProductApi.addOrder({
        productStyle: 2,
        paper: this.paper_index,
        color: this.colour_index,
        length: this.box.length,
        width: this.box.width,
        height: this.box.depth,
        quantity: this.box.quantity,
        totalPrice: this.box.total_price.toFixed(2),
        name: this.infoForm.name,
        email: this.infoForm.email,
        phone: this.infoForm.phone,
      }).then((res) => {
      });
    },

    // get quote
    toGetQuote() {
      console.log("get quote");

      this.dialogVisible = false;
      this.isShowAllPrice = false;
      this.box = {
        length: 0,
        width: 0,
        depth: 0,
        quantity: 0,
        total_price: 0
      }
    },
  },

  filters: {
    numFilter(value) {
      let realVal = "";
      if (!isNaN(value) && value !== "") {
        // 截取当前数据到小数点后两位
        realVal = parseFloat(value).toFixed(2);
      } else {
        realVal = "--";
      }
      return realVal;
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.container {
  .content {
    // height: 1382px;
    padding-bottom: 302px;
    background: #e4dfdb;
    .back {
      padding: 0 236px 0 131px;
      font-size: 25px;
      font-family: "Roboto-Regular";
      line-height: 30px;
      color: #8b837e;
      margin-top: 71px;
      cursor: pointer;
    }
    .content_detail {
      padding: 0 236px 0 131px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .detail_left {
        margin-left: 16px;
        img {
          width: 861px;
          height: 340px;
        }
      }
      .detail_left_two {
        margin: 0 132px 0 125px;
        img {
          width: 650px;
          height: 685px;
        }
      }
      .detail_right {
        // width: 499px;
        // height: 797px;
        background: #ffffff;
        border-radius: 30px;
        margin-left: 148px;
        position: relative;
        .detail_box {
          width: 300px;
          height: 234px;
          position: absolute;
          top: -85px;
          right: -55px;
        }
        .box_name {
          padding: 0 53px 0 55px;
          font-size: 48px;
          font-family: "DMSerifDisplay-Regular";
          line-height: 58px;
          color: #46474b;
          margin: 97px 0 9px;
        }
        .box_intro {
          padding: 0 53px 0 55px;
          font-size: 18px;
          font-family: "Roboto-Regular";
          line-height: 22px;
          color: #7c7c7c;
          margin-bottom: 25px;
        }
        .box_ps {
          padding: 0 53px 0 55px;
          font-size: 15px;
          font-family: "Roboto-Regular";
          line-height: 22px;
          color: #7c7c7c;
          margin-bottom: 30px;
        }
        .quantity_select {
          display: flex;
          align-items: center;
          padding: 0 53px 0 55px;
          margin-bottom: 30px;
          .white_paper {
            //width: 118px;
            padding: 0 20px;
            // height: 48px;
            background: #ffffff;
            border: 2px solid #dcb888;
            border-radius: 13px;
            font-size: 18px;
            font-family: "Roboto-Regular";
            line-height: 48px;
            color: #dcb888;
            text-align: center;
            margin-right: 17px;
            white-space: nowrap;
            overflow: hidden;
          }
          .brown_paper {
            //width: 118px;
            padding: 0 20px;
            // height: 48px;
            background: #804000;
            border: 2px solid #dcb888;
            border-radius: 13px;
            font-size: 18px;
            font-family: "Roboto-Regular";
            line-height: 48px;
            color: #ffffff;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
          }
          .paper_block {
            //width: 118px;
            padding: 0 20px;
            // height: 48px;
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
          }
        }
        .size {
          padding: 0 53px 0 55px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          .label {
            font-size: 25px;
            font-family: "Roboto-Regular";
            line-height: 30px;
            color: #565656;
          }
          .text_value {
            width: 160px;
            height: 66px;
            background: #e1e1e1;
            border: none;
            opacity: 1;
            border-radius: 13px;
            font-size: 25px;
            font-family: "Roboto-Regular";
            color: #565656;
            line-height: 66px;
            text-align: right;
            padding-right: 30px;
          }
          .quantity {
            color: #888c92;
          }
        }
        .text_tip {
          color: #ff0000;
          font-size: 16px;
          padding: 0 53px 0 55px;
          margin-bottom: 24px;
        }
        .total_value {
          padding: 0 53px 0 55px;
          height: 74px;
          background: #dcd7d3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .label {
            font-size: 25px;
            font-family: "Roboto-Regular";
            line-height: 30px;
            color: #888c92;
          }
          .text_value {
            font-size: 25px;
            font-family: "Roboto-Bold";
            line-height: 74px;
            color: #565656;
            font-weight: bold;
          }
        }
        .btn {
          height: 95px;
          background: #7c736d;
          border-radius: 0px 0px 26px 26px;
          font-size: 21px;
          font-family: "Roboto-Regular";
          line-height: 95px;
          color: #ffffff;
          text-align: center;
        }
      }
    }
  }
}

// 媒体查询
@media screen and (max-width: 600px) {
	.detail_right .quantity_select {
		.white_paper, .brown_paper, .paper_block {
			padding: 15px 30px !important;
		}
	}

  .content {
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
        .text_tip {
          font-size: 20px !important;
        }
      }
    }
  }
  .footer {
    padding: 80px !important;
  }
}

@supports (-webkit-overflow-scrolling: touch) {
  .content {
    padding-left: 20px !important ;
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
      .box_ps {
        line-height: 70px !important;
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
      .text_tip {
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
  .footer {
    padding: 80px !important;
  }
}
</style>

<style>
@media screen and (max-width: 600px) {
  .dialog_style {
    width: 90% !important;
    padding: 80px 30px !important;
  }
}

.dialog_style {
  border-radius: 30px;
  padding: 80px 160px;
  font-family: "Roboto";
}

.dialog_style .el-dialog__header .el-dialog__title {
  font-family: "dm serif display";
  font-size: 48px;
  font-weight: bolder;
  color: rgb(70, 71, 75);
}

.dialog_style .el-form .el-form-item__label {
  font-size: 24px;
  color: rgb(92, 92, 92);
}

.dialog_style .el-form .el-input__inner {
  height: 64px;
  line-height: 64px;
  font-size: 24px;
  font-family: "Roboto";
}

.dialog_style .el-dialog__footer .dialog-footer {
  display: flex;
  justify-content: space-around;
}

.dialog_style .el-dialog__footer .cancel_btn {
  font-size: 24px;
  border: none;
  cursor: pointer;
}

.dialog_style .el-dialog__footer .next_btn {
  font-size: 24px;
  padding: 15px 70px;
  border: none;
  border-radius: 30px;
  background: rgb(124, 105, 119);
  cursor: pointer;
}

.dialog_style .total_price_box {
  width: 100%;
  padding: 50px 0;
  margin: 70px 0;
  border-radius: 10px;
  background: rgb(239, 239, 239);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
}

.dialog_style .total_price_box .price_text {
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  font-family: "dm serif display";
}
</style>
