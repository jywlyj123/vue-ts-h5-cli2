<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Footer',
  setup() {
    const value = ref('')
    return { value }
  }
})
</script>

<style scoped></style>
