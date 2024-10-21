import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* sidebar */}
      <Sidebar />
      <div className="w-full flex-col bg-gray-50 dark:bg-dark-bg">
        {/* navbar */}
        <Navbar />
        <main className="p-10">{children}</main>
      </div>
    </div>
  );
};

export default DashboardWrapper;
