import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TutorialSection from "./components/TutorialSection";
import AuditSection from "./components/AuditSection";
import DashboardSection from "./components/DashboardSection";
import Footer from "./components/Footer";

const App = () => {
  const [activeTab, setActiveTab] = useState("tutorial");

  return (
    <div>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="md:ml-64 p-4">
        {activeTab === "tutorial" && (
          <TutorialSection activeTab={activeTab} />
        )}

        {activeTab === "auditoria" && (
          <AuditSection activeTab={activeTab} />
        )}

        {activeTab === "dashboard" && (
          <DashboardSection activeTab={activeTab} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
