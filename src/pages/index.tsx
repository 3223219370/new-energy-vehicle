import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Layout,
  Menu,
  MenuProps,
  Modal,
} from "antd";
// import { history } from "ice";
import styles from "./index.module.scss";
import store from "@/store";
import Header from '@/components/Header'
export default function index() {
  const [state, dispatch] = store.useModel("index");

  const showModal = () => {
    dispatch.openLogin();
  };

  //导航菜单
  const items: MenuProps["items"] = [
    {
      label: "首页",
      key: "mail",
    },
    {
      label: "选车",
      key: "app",
    },
    {
      label: "排行",
      key: "app1",
    },
    {
      label: "车友圈",
      key: "SubMenu",
    },
  ];

  return (
    <div className={styles.layouts}>
      <Header />
      <div className={styles.content}>
        <Menu
          // onClick={onClick}
          // selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
    </div>
  );
}
