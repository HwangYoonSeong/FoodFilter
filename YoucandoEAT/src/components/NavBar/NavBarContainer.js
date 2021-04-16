import React, { useState } from "react";
import NavBarPresenter from "./NavBarPresenter";

function NavBarContainer() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <NavBarPresenter sidebar={sidebar} setSidebar={setSidebar} />
    </>
  );
}

export default NavBarContainer;
