"use client";

import { Form, Input, Button } from "antd";

export default function ContactForm() {
  return (
    <Form layout="vertical">
      <Form.Item label="Email">
        <Input />
      </Form.Item>
      <Button type="primary">Submit</Button>
    </Form>
  );
}