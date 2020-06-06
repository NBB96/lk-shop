<template>
  <div id="myAddress">
    <!-- 导航栏 -->
    <van-nav-bar
      title="我的地址"
      left-text="返回"
      left-arrow
      :fixed="true"
      :border="true"
      @click-left="onClickLeft"
    />
    <!-- 添加地址 -->
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
      style="margin-top:3rem"
    />
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Toast } from "vant";
import { getUserAddress } from "../../../server/api/index";
import { mapState } from "vuex";
import PubSub from "pubsub-js";
export default {
  name: "MyAddress",
  props: {},
  data() {
    return {
      chosenAddressId: "1",
      list: []
    };
  },

  components: {},

  computed: {
    ...mapState(["userInfo"])
  },

  created() {},

  mounted() {
    this.initUserAddress();
    // 订阅添加地址成功
    PubSub.subscribe("backToMyAddress", msg => {
      if (msg === "backToMyAddress") {
        this.initUserAddress();
      }
    });
  },

  methods: {
    onClickLeft() {
      this.$router.back();
    },
    // Toast("新增地址");
    onAdd() {
      this.$router.push({
        path: "/order/MyAddress/addAddress"
      });
    },
    onEdit(item, index) {
      // Toast("编辑地址:" + index);
      this.$router.push({
        path: "/order/MyAddress/editAddress"
      });
    },
    async initUserAddress() {
      if (this.userInfo.token) {
        // 处于登录状态
        let result = await getUserAddress(this.userInfo.token);
        console.log(result);
        if (result.success_code === 200) {
          let addressArr = result.data;
          this.list = [];
          addressArr.forEach((address, index) => {
            let addressObj = {
              id: String(index + 1),
              name: address.address_name,
              tel: address.address_phone,
              address: address.address_area + address.address_area_detail,
              address_id: address._id,
              user_id: address.user_id
            };
            // 追加到数组
            this.list.push(addressObj);
          });
        } else {
          Toast({
            message: "获取地址失败！",
            duration: 400
          });
        }
      } else {
        Toast({
          message: "登录已过期，请退出登录！",
          duration: 400
        });
      }
    }
  },
  beforeDestroy() {
    PubSub.unsubscribe("backToMyAddress");
  },

  watch: {}
};
</script>
<style  scoped>
#myAddress {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 200;
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