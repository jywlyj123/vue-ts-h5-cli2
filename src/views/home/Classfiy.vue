<template>
  <div>
    <Search></Search>
    <ClassfiyList></ClassfiyList>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Search from '@/components/Search.vue'
import ClassfiyList from '@/components/ClassfiyList.vue'
export default defineComponent({
  name: 'Classfiy',
  components: {
    Search,
    ClassfiyList
  }
})
</script>

<style scoped></style>
