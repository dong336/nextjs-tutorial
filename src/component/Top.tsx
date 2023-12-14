import React from "react";
import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            style={{ display: "block", width: 150 }}
            src="/images/logo.png"
            alt="logo"
          />
        </div>
        <Header as="h1">Dong woon kim</Header>
      </div>
      <Gnb />
    </div>
  );
}
