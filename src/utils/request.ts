import { message } from "antd";
import { request } from "ice";

export async function fetchApi({url, params, method = "get"}) {
  const config = {
    url,
    method,
  };
  if (method === "get") {
    config["params"] = params;
  } else {
    config["data"] = params;
  }
  try {
    const res = await request(config);
    if (!res.success) {
        message.error(res.message);
    }
    return res;
  } catch (error) {
    console.log('error',error);
    
    return {
      success: false, // 请求是否成功
      data:{},
      message: "请求失败", // 错误信息
    }
  }
}
