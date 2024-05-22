import React from "react";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

function DrawerCard({ name, Icon, url }) {
  return (
    <div className="">
      <NavLink to={url}>
        {({ isActive }) => (
          <div
            className={
              isActive
                ? " bg-primaryColor w-full pl-5 pr-5 pt-2 pb-2 rounded-md"
                : " w-full pl-5 pr-5 pt-2 pb-2 rounded-md"
            }
          >
            <div className="flex">
              <Icon
                className={isActive ? "text-white" : "text-black"}
                size={25}
              />
              <h1 className={isActive ? "ml-5 text-white" : "ml-5 text-black"}>
                {name}
              </h1>
            </div>
          </div>
        )}
      </NavLink>
    </div>
  );
}

export default DrawerCard;
