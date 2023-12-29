import { fetchApi } from "@/utils/request";
export default {
  // 登录
  async login(params) {
    return await fetchApi({
      url: "/api/users/login",
      params,
      method: "POST",
    });
  },
};
