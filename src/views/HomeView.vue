<template>
  <div class="box">
    <header>
      <div>
        <Header></Header>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <div>
        <Footer></Footer>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
    Footer
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
    overflow: auto;
  }

  footer {
    width: 100%;
    height: 50px;
  }
}
</style>
