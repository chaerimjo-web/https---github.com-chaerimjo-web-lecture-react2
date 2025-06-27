import React from "react";
import * as MyLayout from "../lib/MyLayout";
import Backdrop from "../components/Backdrop";
import Dialog from "./Dialog";

const Page = ({ header, children, footer }) => (
  <div className="Page">
    <header>{header}</header>
    <main>{children}</main>
    {/* <footer>{footer}</footer> */}
    <MyLayout.DialogContainer />
    <MyLayout.layoutContext.Consumer>
      {({ setDialog }) => (
        <button
          onClick={() => {
            setDialog(<Dialog />);
          }}
        >
          다이얼러그 버튼
        </button>
      )}
    </MyLayout.layoutContext.Consumer>
  </div>
);

export default Page;
