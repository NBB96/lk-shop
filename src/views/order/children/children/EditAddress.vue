<template>
  <div id="editAddress">
    <!-- 导航栏 -->
    <van-nav-bar
      title="修改地址"
      left-text="返回"
      left-arrow
      :fixed="true"
      :border="true"
      @click-left="onClickLeft"
    />

    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      style="margin-top:3rem"
    />
  </div>
</template>

<script>
export default {
  name: "EditAddress",
  props: {},
  data() {
    return {
      areaList: {},
      searchResult: []
    };
  },

  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  },

  watch: {}
};
</script>
<style  scoped>
#editAddress {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 9999;
}
</style>