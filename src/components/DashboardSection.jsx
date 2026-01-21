import {
  AlertCircle,
  Settings,
  CheckCircle2,
  Trash2
} from "lucide-react";
import useTickets from "../hooks/useTickets";

const DashboardSection = ({ activeTab }) => {
  const { tickets, toggleStatus } = useTickets();

  if (activeTab !== "dashboard") return null;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">
            Gestión de Mantenimiento
          </h2>
          <p className="text-slate-500">
            Control de deuda técnica y evolutivos.
          </p>
        </div>

        <div className="flex gap-4 text-center">
          <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase">
              Total
            </p>
            <p className="text-xl font-bold">
              {tickets.length}
            </p>
          </div>

          <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase">
              Abiertos
            </p>
            <p className="text-xl font-bold text-blue-600">
              {tickets.filter(t => t.status === "Abierto").length}
            </p>
          </div>
        </div>
      </div>

      {/* Lista de Tickets */}
      <div className="grid grid-cols-1 gap-4">
        {tickets.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl py-20 text-center text-slate-400">
            El backlog está vacío. ¡Buen trabajo!
          </div>
        ) : (
          tickets.map(ticket => (
            <div
              key={ticket.id}
              className={`group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all ${
                ticket.status === "Resuelto"
                  ? "opacity-60 grayscale"
                  : ""
              }`}
            >
              {/* Info */}
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-full ${
                    ticket.type === "Correctivo"
                      ? "bg-red-50 text-red-600"
                      : ticket.type === "Adaptativo"
                      ? "bg-blue-50 text-blue-600"
                      : ticket.type === "Perfectivo"
                      ? "bg-purple-50 text-purple-600"
                      : "bg-amber-50 text-amber-600"
                  }`}
                >
                  {ticket.type === "Correctivo" ? (
                    <AlertCircle size={24} />
                  ) : (
                    <Settings size={24} />
                  )}
                </div>

                <div>
                  <h4
                    className={`font-bold text-lg ${
                      ticket.status === "Resuelto"
                        ? "line-through text-slate-400"
                        : ""
                    }`}
                  >
                    {ticket.title}
                  </h4>

                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="font-medium">
                      {ticket.type}
                    </span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span>{ticket.date}</span>
                  </div>
                </div>
              </div>

              {/* Acciones */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    toggleStatus(ticket.id, ticket.status)
                  }
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${
                    ticket.status === "Abierto"
                      ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <CheckCircle2 size={18} />
                  {ticket.status === "Abierto"
                    ? "Resolver"
                    : "Reabrir"}
                </button>

                <button
                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                  disabled
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardSection;
