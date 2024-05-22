import React from "react";
import { appName } from "../utils/AppStrings";
import DrawerCard from "./DrawerCard";

import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleIcon from "@mui/icons-material/People";
import PaidIcon from "@mui/icons-material/Paid";
import DashboardIcon from "@mui/icons-material/Dashboard";

function Drawer() {
  const drawerItem = [
    {
      name: "DashBoard",
      icon: DashboardIcon,
      url: "/",
    },
    {
      name: "Products",
      icon: InventoryIcon,
      url: "/product",
    },
    {
      name: "Customers",
      icon: PeopleIcon,
      url: "/customers",
    },
    {
      name: "Transactions",
      icon: PaidIcon,
      url: "/transactions",
    },
  ];
  return (
    <div className="p-5 h-screen">
      <h1 className="font-semibold text-primaryColor text-2xl">{appName}</h1>
      <div className="mt-5 space-y-4 ">
        {drawerItem.map((item, index) => (
          <DrawerCard
            key={index}
            name={item.name}
            Icon={item.icon}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Drawer;
