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
        <van-space direction="vertical" fill>
          <van-button round block type="primary" native-type="submit">提交</van-button>
          <van-button round block url="/user/registry">注册</van-button>
        </van-space>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { UserManageType } from '@/interface/model/user'
import { useUserSerivice } from '@/api/user'
import { showToast } from 'vant'
import router from '@/router'
export default defineComponent({
  name: 'UserLogin',
  props: {},
  setup() {
    const userSerivice = useUserSerivice()
    const state = {
      formState: ref<UserManageType.UserLoginFromState>(new UserManageType.UserLoginFromState())
    }
    const onSubmit = async () => {
      const result = await userSerivice.login(state.formState.value)
      console.log(result)
      if (result.code == 1) {
        showToast({
          type: 'success',
          message: result.msg,
          onClose() {
            router.replace({
              path: '/homeview'
            })
          }
        })
      } else {
        showToast({
          type: 'fail',
          message: result.msg,
          onClose() {
            state.formState.value = new UserManageType.UserLoginFromState()
          }
        })
      }
    }

    return {
      ...state,
      onSubmit
    }
  }
})
</script>

<style scoped></style>
