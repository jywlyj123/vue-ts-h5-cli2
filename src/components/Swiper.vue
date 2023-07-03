<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in swiperList" :key="index">
      <van-image :src="item.img"></van-image>
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { UseHomeSerivice } from '@/api/home'
import { HomeManageType } from '@/interface/model/home'
export default defineComponent({
  name: 'SwiperView',
  setup() {
    const homeserivice = UseHomeSerivice()
    const state = {
      loading: ref(false),
      finished: ref(false),
      error: ref(false),
      swiperList: ref<Array<HomeManageType.CarouselInterface>>([])
    }
    const getSwiperList = async () => {
      const result = await homeserivice.getCarouselList({})
      state.swiperList.value = result.result
    }
    onMounted(() => {
      getSwiperList()
    })
    return {
      ...state
    }
  }
})
</script>

<style></style>
