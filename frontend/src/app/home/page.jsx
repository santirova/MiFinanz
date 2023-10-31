"use client";
import Profile from "@/components/home/dropProfile/Profile";
import AddTransaction from "@/components/views/AddTransaction";
import CreditCard from "@/components/views/CreditCard";
import Dashboard from "@/components/views/Dashboard";
import Table from "@/components/views/Table";
import { useAppSelector } from "@/redux/hooks";

const AppHome = () => {
  const activeSection = useAppSelector(
    (state) => state?.activeSection?.activeSection || "exception"
  );
  switch (activeSection) {
    case "dashboard":
      return (
        <div className="w-full ">
          <Dashboard />
        </div>
      );
    case "cards":
      return (
        <div className="w-full ">
          <CreditCard />
        </div>
      );
    case "bills":
      return (
        <div className="w-full">
          <Table />
        </div>
      );
    case "earnings":
      return (
        <div className="w-full ">
          <Table />
        </div>
      );
    case "addTransaction":
      return (
        <div className=" w-full ">
          <AddTransaction />
        </div>
      );
    case "profile":
      return (
        <div className="w-full ">
          <Profile />
        </div>
      );
    case "exception":
      return (
        <div className="w-full ">
          <h1>Bienvenido al Sistema</h1>
        </div>
      );
    default:
      return (
        <div className="w-full ">
          <h1>Bienvenido al Sistema</h1>
        </div>
      );
  }
};

export default AppHome;
