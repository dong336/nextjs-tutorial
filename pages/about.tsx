import React from "react";
import {
  Button,
  Divider,
  Form,
  Header,
  List,
  TextArea,
} from "semantic-ui-react";

export default function about() {
  return (
    <div>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        소개
      </Header>
      <Divider />
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>김동운</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>Korea</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:dong094724@gmail.com">dong094724@gmail.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://github.com/dong336">https://github.com/dong336</a>
          </List.Content>
        </List.Item>
      </List>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        문의사항
      </Header>
      <Divider />
      <Form>
        <Form.Field>
          <label>제목</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>내용</label>
          <TextArea />
        </Form.Field>
        <Button color="green">보내기</Button>
      </Form>
    </div>
  );
}
