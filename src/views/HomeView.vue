<template>
  <div class="box">
    <header>
      <van-nav-bar title="校园超市" />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="home-o"><router-link to="/home/index">首页</router-link></van-tabbar-item>
        <van-tabbar-item name="search" icon="apps-o"><RouterLink to="/home/classfiy">分类</RouterLink></van-tabbar-item>
        <van-tabbar-item name="friends" icon="cart-o"><RouterLink to="/home/cart">购物车</RouterLink></van-tabbar-item>
        <van-tabbar-item name="setting" icon="manager-o"><RouterLink to="/home/my">我的</RouterLink></van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'HomeView',
  setup() {
    const active = ref('home')
    return { active }
  }
})
</script>

<style lang="less">
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 50px;
  }
  main {
    flex: 1;
  }

  footer {
    width: 100%;
    height: 50px;
  }
}
</style>
