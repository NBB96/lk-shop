<template>
  <div id="mine" v-if="userInfo.token">
    <!-- 头部 -->
    <van-nav-bar title="我的" :border="false" :fixed="true" />

    <!-- 用户信息 -->
    <van-cell-group style="margin-top:2.6rem">
      <van-cell
        value="内容"
        is-link
        style="background-color:#3bba63;color:#fff"
        :center="true"
        @click="$router.push('/dashboard/mine/userCenter').catch(err => {err})"
      >
        <template slot="title">
          <div class="personMsg">
            <img class="iconImage" :src="userInfo.icon_url" alt />
            <div class="personInfo">
              <span>{{userInfo.real_name}}</span>
              <span>手机号：{{userInfo.phone}}</span>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <!-- 我的订单 -->
    <van-cell-group>
      <van-cell icon="label" title="我的订单" value="查看所有的订单" is-link />
      <van-grid>
        <van-grid-item
          v-for="(order,index) in orderData"
          :key="index"
          :icon="order.icon"
          :text="order.title"
        />
      </van-grid>
    </van-cell-group>

    <!--我的优惠券-->
    <van-cell-group style="margin-top: 0.4rem">
      <van-cell title="我的优惠券" icon="gold-coin" value="1张" is-link></van-cell>
      <van-cell title="我的收货地址" icon="todo-list" is-link></van-cell>
    </van-cell-group>

    <!--联系客服-->
    <van-cell-group style="margin-top: 0.4rem">
      <van-cell title="联系客服" icon="phone" value="客服时间 07:00-22:00" is-link></van-cell>
      <van-cell title="意见反馈" icon="smile-comment" is-link></van-cell>
    </van-cell-group>

    <!--路由的出口-->
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
  <SelectLogin v-else />
</template>

<script>
import SelectLogin from "./../login/SelectLogin";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Mine",
  props: [""],
  data() {
    return {
      orderData: [
        { icon: "cart-circle-o", title: "待支付" },
        { icon: "gift-o", title: "待收货" },
        { icon: "smile-comment-o", title: "待评价" },
        { icon: "cash-back-record", title: "售后/退款" }
      ]
    };
  },

  components: {
    SelectLogin
  },

  computed: {
    ...mapState(["shopCart", "userInfo"])
  },

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='less' scoped>
#mine {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

.van-nav-bar {
  background-color: #3bba63;
}

.van-nav-bar__title {
  color: #fff;
  font-size: 1rem;
}

.personMsg {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.personMsg > img {
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  border: 0.12rem solid #fff;
}

.personInfo {
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
}

.van-cell__left-icon {
  color: orangered;
  font-size: 1.2rem;
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