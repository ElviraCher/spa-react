import { Outlet } from "react-router-dom";
import React from "react";

import "./Layout.css";

interface LayoutProps {
  header: string;
}

export default function Layout(props: LayoutProps) {
  const { header } = props;
  return (
    <>
      <header className="header">{header}</header>
      <Outlet />
    </>
  );
}
