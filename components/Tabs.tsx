"use client";
import { useState } from "react";
import Popular from "@/app/components/data/Popular";
import Vedette from "@/app/components/data/Vedette";

export const Tab = ({ label, isActive, onClick }: any) => {
  return (
    <button
      className={`px-4 py-2 ${
        isActive ? "bg-blue-500 text-white" : "text-gray-700"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("popular");

  const handleClick = (tab: any) => {
    setActiveTab(tab);
  };

  let tabContent;
  switch (activeTab) {
    case "popular":
      tabContent = <Popular />;
      break;
    case "vedette":
      tabContent = <Vedette />;
      break;
    default:
      tabContent = null;
  }

  return (
    <div>
      <div className="flex justify-center">
        <Tab
          label="popular"
          isActive={activeTab === "popular"}
          onClick={() => handleClick("popular")}
        />
        <Tab
          label="vedette"
          isActive={activeTab === "vedette"}
          onClick={() => handleClick("vedette")}
        />
      </div>
      <div className="mt-4">
        {activeTab === "popular" && <Popular />}
        {activeTab === "vedette" && <Vedette />}
      </div>
    </div>
  );
}
