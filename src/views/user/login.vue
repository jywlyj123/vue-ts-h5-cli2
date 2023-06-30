<template>
  <div>
    <div>
      <van-nav-bar title="登录页面" />
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="formState.username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="formState.password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { UserManageType } from '@/interface/model/user'
export default defineComponent({
  name: 'UserLogin',
  props: {},
  setup(props, { emit }) {
    const state = {
      formState: ref<UserManageType.UserLoginFromState>(new UserManageType.UserLoginFromState())
    }
    const onSubmit = () => {
      console.log(state.formState.value)
    }

    return {
      ...state,
      onSubmit
    }
  }
})
</script>

<style scoped></style>
