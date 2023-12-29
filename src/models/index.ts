import { createModel } from "ice";
import userService from "@/services/index";
import { message } from "antd";
import {setLocalData,getocalData} from '@/utils/index'
export default createModel({
  state: {
    loginVisible: false,
    userInfo: getocalData('userInfo'),
  },
  reducers: {
    update(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
    // 打开登录框
    openLogin(state) {
      return { ...state, loginVisible: true };
    },
    // 关闭登录框
    closeLogin(state) {
      return { ...state, loginVisible: false };
    },

  },
  effects: (dispatch) => ({
    async login(params) {
      const res = await userService.login(params);
      if (!res?.success) return;
      message.success("登录成功");
      setLocalData('userInfo',res.data)
      this.update({ userInfo: res.data });
      this.closeLogin();
    },
  }),
});
