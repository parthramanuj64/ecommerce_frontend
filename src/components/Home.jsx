import React from "react";
import Header from "./Header";
import Drawer from "./Drawer";
import { Outlet } from "react-router";

function Home() {
  return (
    <div>
      <div className="h-screen w-screen">
        <div className="flex h-screen ">
          <div className="w-80 h-screen ">
            <Drawer />
          </div>
          <div className="w-full h-full ">
            <div className="">
              <Header />
              <Outlet />
              {/* Apply code here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
