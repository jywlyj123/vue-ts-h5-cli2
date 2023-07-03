<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o"><router-link to="/home/index">首页</router-link></van-tabbar-item>
      <van-tabbar-item name="search" icon="apps-o"><RouterLink to="/home/classfiy">分类</RouterLink></van-tabbar-item>
      <van-tabbar-item name="friends" icon="cart-o"><RouterLink to="/home/cart">购物车</RouterLink></van-tabbar-item>
      <van-tabbar-item name="setting" icon="manager-o"><RouterLink to="/home/my">我的</RouterLink></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Footer',
  setup() {
    const active = ref('home')
    return { active }
  }
})
</script>

<style scoped></style>
