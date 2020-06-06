<template>
  <div id="order">
    <!-- 导航栏 -->
    <van-nav-bar
      title="填写订单"
      left-text="返回"
      left-arrow
      :fixed="true"
      :border="true"
      @click-left="onClickLeft"
    />
    <!-- 收货地址 -->
    <van-contact-card type="add" add-text="选择收货地址" @click="chooseAddress" style="margin-top:3rem" />

    <!-- 送达时间 -->
    <van-cell-group style="margin-top:0.6rem">
      <van-cell title="送达时间" value="请选择送达时间" is-link />
      <van-cell value="内容" is-link :center="true">
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <img src="./images/detail1.jpg" alt style="width:3em" />
          <img src="./images/detail1.jpg" alt style="width:3em" />
          <img src="./images/detail1.jpg" alt style="width:3em" />
        </template>
      </van-cell>
    </van-cell-group>

    <!-- 支付方式 -->
    <van-cell-group style="margin-top:0.6rem">
      <van-cell title="支付方式" value="微信" />
    </van-cell-group>

    <!-- 备注 -->
    <van-cell-group style="margin-top:0.6rem">
      <van-cell title="备注">
        <input type="text" placeholder="请备注您的需求" />
      </van-cell>
    </van-cell-group>

    <!-- 商品金额 -->
    <van-cell-group style="margin-top:0.6rem">
      <van-cell title="商品金额" value="人民币" />
      <van-cell title="配送费" value="人民币" />
    </van-cell-group>

    <!-- 订单提交 -->
    <van-submit-bar :price="3050" button-text="提交订单" label="实付" @submit="onSubmit" />

    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Order",
  props: {},
  data() {
    return {};
  },

  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {
    onClickLeft() {
      this.$router.back();
    },
    //选择地址
    chooseAddress() {
      this.$router.push("/order/myAddress");
    },
    onSubmit() {}
  },

  watch: {}
};
</script>
<style  scoped>
#order {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
/*转场动画*/
.router-slider-enter-active,
.router-slider-leave-active {
  transition: all 0.3s;
}

.router-slider-enter,
.router-slider-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
</style>