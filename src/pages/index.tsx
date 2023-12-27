import React from "react";
import { Button, Layout } from "antd";
import { history } from "ice";
import styles from "./index.module.scss";

export default function index() {
  return (
    <>
      <div className={styles.header}>
      <Button
            type="primary"
            onClick={() => {
              history?.push("/login");
            }}
          >
            登录
          </Button>
        <div></div>
        <div>
          <Button
            type="primary"
            onClick={() => {
              history?.push("/login");
            }}
          >
            登录
          </Button>
        </div>
      </div>
      <div>Content</div>
      <div>Footer</div>
    </>
  );
}
