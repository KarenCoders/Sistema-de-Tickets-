import {
  ShieldCheck,
  Settings,
  LayoutDashboard,
  BookOpen
} from "lucide-react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const baseBtn =
    "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all";
  const active =
    "bg-blue-50 text-blue-700 shadow-sm";
  const inactive =
    "hover:bg-slate-100 text-slate-500";

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 p-6 hidden md:block">
      <div className="flex items-center gap-2 mb-10 px-2">
        <Settings className="text-blue-600 w-8 h-8" />
        <span className="font-bold text-xl tracking-tight">Sistemas V</span>
      </div>

      <div className="space-y-2">
        <button
          onClick={() => setActiveTab("tutorial")}
          className={`${baseBtn} ${
            activeTab === "tutorial" ? active : inactive
          }`}
        >
          <BookOpen size={20} />
          <span className="font-medium">Tutorial Teórico</span>
        </button>

        <button
          onClick={() => setActiveTab("auditoria")}
          className={`${baseBtn} ${
            activeTab === "auditoria" ? active : inactive
          }`}
        >
          <ShieldCheck size={20} />
          <span className="font-medium">Herramienta Auditoría</span>
        </button>

        <button
          onClick={() => setActiveTab("dashboard")}
          className={`${baseBtn} ${
            activeTab === "dashboard" ? active : inactive
          }`}
        >
          <LayoutDashboard size={20} />
          <span className="font-medium">Gestión Mantenimiento</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
