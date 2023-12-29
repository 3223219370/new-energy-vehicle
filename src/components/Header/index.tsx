import { Button, Flex, Dropdown, MenuProps } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import head from "@/assets/baidu383089.webp";
import React from "react";
import styles from "./index.module.scss";
import store from "@/store";
import Login from "@/components/Login";
import { removeLocalData } from "@/utils/index";
export default function index() {
  const [state, dispatch] = store.useModel("index");
  const showModal = () => {
    dispatch.openLogin();
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "退出登录",
    },
  ];
  const dropItemClick = ({ key }) => {
    if (key === "1") {
      dispatch.update({ userInfo: null });
      removeLocalData("userInfo");
    }
  };
  const loginBtn = (
    <Button type="primary" onClick={showModal}>
      登录
    </Button>
  );
  const useInfo = (
    <>
      <Dropdown menu={{ items, onClick: dropItemClick,style:{padding:12} }} overlayStyle={{paddingTop:4}}>
        <Flex align="center">
          <img src={head} className={styles.headImg} />
          <div className={styles.userName}> {state?.userInfo?.name}</div>
        </Flex>
      </Dropdown>
    </>
  );
  return (
    <div className={styles.header}>
      <div className={styles.logoS}>
        <img
          src="https://pic.imgdb.cn/item/658d97e2c458853aef4a0339.jpg"
          className={styles.logoImg}
        />
        <div className={styles.logoName}>能源汽车网</div>
      </div>
      <div>
        {state?.userInfo?.id ? useInfo : loginBtn}
        <Login />
      </div>
    </div>
  );
}
