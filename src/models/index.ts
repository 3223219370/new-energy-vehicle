import { createModel } from 'ice';
export default createModel({
  // 定义  model 的初始 state
  state: {
    loginVisible: false,
  },
  // 定义改变该 model 状态的纯函数
  reducers: {
    update(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
    openLogin(state) {
      return { ...state, loginVisible: true };
    },
    closeLogin(state) {
      return { ...state, loginVisible: false };
    }
  },
  // 定义处理该 model 副作用的函数
  effects: (dispatch) => ({
    async getUserInfo() {
      
    },
  }),
})