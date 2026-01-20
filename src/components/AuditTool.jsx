import { useState } from "react";
import {
  Search,
  CheckCircle2
} from "lucide-react";

const AuditTool = () => {
  const [codeToAudit, setCodeToAudit] = useState(
`// Pega tu código aquí
var x = 10;
function test(){
  if(x == 10){
    alert("Error");
  }
}`
  );

  const [results, setResults] = useState([]);

  const runAudit = () => {
    const findings = [];
    const lines = codeToAudit.split("\n");

    lines.forEach((line, index) => {
      if (line.includes("var ")) {
        findings.push({
          line: index + 1,
          severity: "Baja",
          msg: 'Uso de "var" detectado. Se recomienda usar "let" o "const" para evitar problemas de scope.'
        });
      }

      if (line.includes("==") && !line.includes("===")) {
        findings.push({
          line: index + 1,
          severity: "Media",
          msg: 'Comparación débil (==). Usa comparación estricta (===) para evitar coerción de tipos.'
        });
      }

      if (line.includes("alert(")) {
        findings.push({
          line: index + 1,
          severity: "Media",
          msg: 'Uso de "alert()" detectado. Bloquea el hilo principal; usa modales personalizados.'
        });
      }
    });

    setResults(findings);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* TÍTULO */}
      <h1 className="text-3xl font-bold">
        Linter Básico de Auditoría
      </h1>

      {/* EDITOR */}
      <div className="space-y-2">
        <h2 className="font-semibold">
          Código a analizar (JS/HTML)
        </h2>

        <textarea
          className="w-full h-64 p-4 bg-slate-900 text-emerald-400 rounded-xl font-mono"
          value={codeToAudit}
          onChange={(e) => setCodeToAudit(e.target.value)}
        />
      </div>

      {/* BOTÓN */}
      <button
        onClick={runAudit}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
      >
        <Search size={20} />
        Ejecutar Auditoría
      </button>

      {/* RESULTADOS */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">

        <h2 className="text-xl font-semibold">
          Hallazgos de Seguridad/Calidad
        </h2>

        <div className="text-3xl font-bold">
          {results.length}
        </div>

        {results.length === 0 ? (
          <div className="flex items-center gap-2 text-emerald-600">
            <CheckCircle2 />
            <span>No se encontraron problemas evidentes.</span>
          </div>
        ) : (
          <div className="space-y-6">
            {results.map((r, i) => (
              <div key={i} className="bg-amber-50 p-4 rounded-lg">
                <p className="font-bold">
                  Línea {r.line}{r.severity}
                </p>
                <p>
                  {r.msg}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* PIE */}
      <footer className="text-center text-sm text-slate-500 pt-6">
        Unidad 5: Mantenimiento - Ingeniería de Sistemas © 2026
      </footer>

    </div>
  );
};

export default AuditTool;
