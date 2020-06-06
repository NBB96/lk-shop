<template>
  <swiper id="swiper" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(sowing,index) in sowing_list" :key="sowing.public_id">
      <img :src="sowing.icon_url" :alt="sowing.public_name" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Sowing",
  props: {
    sowing_list: Array
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        //分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 1000
        },
        speed: 600,
        //滑动后回到函数
        on: {
          slideChangeTransitionEnd() {
            //console.log(this.activeIndex); //切换结束时，告诉我现在是第几个slide
          }
        }
      }
    };
  },

  components: {
    swiper,
    swiperSlide
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },

  created() {},

  mounted() {
    //this.swiper.slideTo(5,1000,false)
  },

  methods: {},

  watch: {}
};
</script>
<style  scoped>
#swiper {
  width: 100%;
  height: 14rem;
}
#swiper img{
    width: 100%;
    height: 100%;
}
</style>