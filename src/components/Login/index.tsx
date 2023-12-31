import { Button, Checkbox, Form, Input, Modal, Flex, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import store from "@/store";
import styles from "./index.module.scss";
export default function index() {
  const [state, dispatch] = store.useModel("index");
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    const { username, password} = values;
    dispatch.login({ name:username, password });
  };

  const onCancel = () => {
    dispatch.closeLogin();
  };
  return (
    <Modal
      title="登录"
      onCancel={onCancel}
      open={state?.loginVisible}
      footer={null}
    >
      <Form
        name="normal_login"
        className={styles.loginForm}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Flex justify="space-between">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          {/* <a href="">忘记密码</a> */}
        </Flex>

        <Flex justify='center'>
          <Button type="primary" className={styles.loginButton} size="large" htmlType='submit'>
            登录 / 注册
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
}
