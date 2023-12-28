import { Button, Flex } from "antd";
import React from "react";
import styles from "./index.module.scss";
import store from "@/store";
import Login from "@/components/Login";
export default function index() {
  const [state, dispatch] = store.useModel("index");
  const showModal = () => {
    dispatch.openLogin();
  };
  return (
    <div className={styles.header}>
        <div className={styles.logoS}>
            <img src='https://pic.imgdb.cn/item/658d97e2c458853aef4a0339.jpg' className={styles.logoImg}/>
          <div>能源汽车大全</div>
        </div>
      <div>
        <Button type="primary" onClick={showModal}>
          登录
        </Button>
        <Login />
      </div>
    </div>
  );
}
