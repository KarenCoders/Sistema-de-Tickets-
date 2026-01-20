import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Tutorial from "./components/Tutorial";
import AuditTool from "./components/AuditTool";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [activeTab, setActiveTab] = useState("tutorial");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-6 md:p-10">
        {activeTab === "tutorial" && <Tutorial />}
        {activeTab === "auditoria" && <AuditTool />}
        {activeTab === "dashboard" && <Dashboard />}
      </main>
    </div>
  );
};

export default App;
