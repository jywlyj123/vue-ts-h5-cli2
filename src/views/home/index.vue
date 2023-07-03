<template>
  <div>
    <Swiper></Swiper>
    <ShopList></ShopList>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ShopList from '@/components/ShopList.vue'
import Swiper from '@/components/Swiper.vue'
export default defineComponent({
  name: 'IndexView',
  components: {
    Swiper,
    ShopList
  }
})
</script>

<style lang="less" scoped>
.my-swipe {
  width: 100%;
  height: 200px;
}
</style>
