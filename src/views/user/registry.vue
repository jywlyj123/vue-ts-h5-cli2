<template>
  <div>
    <div>
      <van-nav-bar title="注册页面" />
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="formState.username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="formState.password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
        <van-field v-model="formState.mobile" type="tel" name="手机号" label="手机号" placeholder="手机号" :rules="[{ required: true, message: '请输入手机号' }]" />
      </van-cell-group>
      <div style="margin: 16px">
        <van-space direction="vertical" fill>
          <van-button round block type="primary" native-type="submit">提交</van-button>
          <van-button round block native-type="submit">注册</van-button>
        </van-space>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { UserManageType } from '@/interface/model/user'
import { useUserSerivice } from '@/api/user'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import router from '@/router'
export default defineComponent({
  name: 'UserRegistry',
  props: {},
  setup() {
    const router = useRouter()
    const userSerivice = useUserSerivice()
    const state = {
      formState: ref<UserManageType.UserRegistryFromState>(new UserManageType.UserRegistryFromState())
    }
    const onSubmit = async () => {
      const result = await userSerivice.registry(state.formState.value)
      console.log(result)
      if (result.code == 1) {
        showToast({
          type: 'success',
          message: result.msg,
          onClose() {
            router.replace({
              path: '/user/login'
            })
          }
        })
      } else {
        showToast({
          type: 'fail',
          message: result.msg,
          onClose() {
            state.formState.value = new UserManageType.UserRegistryFromState()
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
