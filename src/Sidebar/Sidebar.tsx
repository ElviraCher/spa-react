import React from "react";
import Button from "../Button/Button.tsx";

interface SidebarProps {
  sortByNameHandler: () => {};
  sortByCityHandler: () => {};
}

export default function Sidebar(props: SidebarProps) {
  const { sortByNameHandler, sortByCityHandler } = props;

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__nav">
          <p className="sidebar__header">Сортировка</p>
          <Button handler={sortByCityHandler} text="по городу" />
          <Button handler={sortByNameHandler} text="по имени" />
        </div>
      </div>
    </>
  );
}
