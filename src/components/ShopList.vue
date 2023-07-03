<template>
  <div>
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-card v-for="item in productList" :key="item.pid" :price="item.sale_price" :desc="item.desc" :title="item.pname" :thumb="item.imgUrl">
        <template #tags>
          <van-tag plain type="primary">原价:{{ item.original_price }}</van-tag>
          <van-tag plain type="primary">销量:{{ item.sales }}</van-tag>
        </template>
      </van-card>
    </van-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUserSerivice } from '@/api/home'
import { HomeManageType } from '@/interface/model/home'
export default defineComponent({
  name: 'ShopList',
  setup() {
    const homeserivice = useUserSerivice()
    const state = {
      loading: ref(false),
      finished: ref(false),
      error: ref(false),
      productList: ref<Array<HomeManageType.ProductInterface>>([]),
      pagesize: ref<number>(10),
      pagecount: ref<number>(1)
    }
    const onLoad = async () => {
      state.loading.value = true
      const result = await homeserivice
        .getGoodsList({
          pagesize: state.pagesize.value,
          pagecount: state.pagecount.value
        })
        .catch(() => {
          state.error.value = true
        })
      if (result.code == 1) {
        state.pagecount.value = state.pagecount.value + 1
        state.productList.value = [...state.productList.value, ...result.result]
      } else {
        state.finished.value = true
      }
      state.loading.value = false
    }

    return {
      ...state,
      onLoad
    }
  }
})
</script>

<style></style>
