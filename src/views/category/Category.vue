<template>
  <div id="category">
    <!-- 头部 -->
    <Header />
    <!-- 内容 -->
    <div class="listWrapper" v-if="!showLoading">
      <!-- 左边 -->
      <div class="leftWrapper">
        <ul class="wrapper">
          <li
            class="categoryItem"
            v-for="(cate,index) in categoriesData"
            :key="cate.id"
            :class="{selected:currentIndex===index}"
            @click="clickLeftLi(index)"
            ref="menuList"
          >
            <span class="textWrapper">{{cate.name}}</span>
          </li>
        </ul>
      </div>
      <!-- 右边 -->
      <ContentView :categoriesDetailData="categoriesDetailData" />
    </div>
    <van-loading
      v-else
      type="spinner"
      color="#75a42"
      style="position:absolute;left:50%;top:40%;transform:translate(-50%)"
    >正在拼命加载中...</van-loading>
  </div>
</template>

<script>
//引入组件
import Header from "./components/Header";
import ContentView from "./components/ContentView";
//引入滚动组件
import BScoll from "better-scroll";
//引入接口
import { getCategories, getCategoriesDetail } from "./../../server/api/index";

import Pubsub from "pubsub-js";
import { Toast } from "vant";
import { mapMutations } from "vuex";

export default {
  name: "Category",
  props: [""],
  data() {
    return {
      //是否显示加载图标
      showLoading: true,
      //左边列表数据
      categoriesData: [],
      //右边列表数据
      categoriesDetailData: [],
      // 左边item选中与否
      currentIndex: 0
    };
  },

  components: {
    Header,
    ContentView
  },

  computed: {},

  created() {
    this.initData();
  },

  mounted() {},

  methods: {
    // ...mapMutations(["ADD_GOODS"]),

    //初始化操作(数据和界面)
    async initData() {
      //获取左边数据
      let leftRes = await getCategories();
      if (leftRes.success) {
        // console.log(leftRes);
        this.categoriesData = leftRes.data.cate;
      }

      //获取右边数据
      let rightRes = await getCategoriesDetail("/lk001");
      if (rightRes.success) {
        this.categoriesDetailData = rightRes.data.cate;
      }
      console.log(this.categoriesData, this.categoriesDetailData);

      //隐藏loading
      this.showLoading = false;

      //初始化滚动框架
      this.$nextTick(() => {
        this.leftScroll = new BScoll(".leftWrapper", {
          probeType: 3,
          click: true,
          scrollY: true,
          tap: true,
          mouseWheel: true
        });
      });
    },

    //左边的点击
    async clickLeftLi(index) {
      //改变索引
      this.currentIndex = index;
      //滚到到对应的位置
      let menuLists = this.$refs.menuList;
      // console.log(menuLists);
      let el = menuLists[index];
      console.log(el);
      //滚动到对应的元素上
      this.leftScroll.scrollToElement(el, 300);

      //获取右边的数据
      let rightRes = await getCategoriesDetail(`/lk00${index + 1}`);
      if (rightRes.success) {
        this.categoriesDetailData = rightRes.data.cate;
      }
    }
  },

  watch: {}
};
</script>
<style  scoped>
#category {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
}
.listWrapper {
  position: fixed;
  top: 50px;
  bottom: 50px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
}

.leftWrapper {
  background-color: #f4f4f4;
  width: 5.3125rem;
  flex: 0 0 5.3125rem;
}

.categoryItem {
  padding: 0.75rem 0;
  border-bottom: solid 1px #e8e9e8;
  position: relative;
}

.categoryItem .textWrapper {
  line-height: 1.25rem;
  border-left: solid 0.1875rem transparent;
  padding: 0.3125rem 0.6875rem;
  font-size: 0.8125rem;
  color: #666666;
}

.categoryItem.selected {
  background: #fff;
}

.categoryItem.selected .textWrapper {
  border-left-color: #3cb963;
  font-weight: bold;
  font-size: 0.875rem;
  color: #333333;
}

@media (min-width: 960px) {
  .wrapper {
    border-right: 1px solid #e8e9e8;
  }

  .wrapper .categoryItem {
    background: #fff;
  }
}
</style>