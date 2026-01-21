import { useState } from "react";

export const useAudit = () => {
  const [codeToAudit, setCodeToAudit] = useState(
    '// Pega tu código aquí\nvar x = 10;\nfunction test(){\n  if(x == 10){\n    alert("Error");\n  }\n}'
  );

  const [auditResults, setAuditResults] = useState([]);

  const runAudit = () => {
    const findings = [];
    const lines = codeToAudit.split("\n");

    lines.forEach((line, index) => {
      if (line.includes("var ")) {
        findings.push({
          line: index + 1,
          msg:
            'Uso de "var" detectado. Se recomienda usar "let" o "const" para evitar problemas de scope.',
          severity: "Baja"
        });
      }

      if (line.includes("alert(")) {
        findings.push({
          line: index + 1,
          msg:
            'Uso de "alert()" detectado. Bloquea el hilo principal; usa modales personalizados.',
          severity: "Media"
        });
      }

      if (line.includes(" == ") && !line.includes(" === ")) {
        findings.push({
          line: index + 1,
          msg:
            "Comparación débil (==). Usa comparación estricta (===) para evitar coerción de tipos.",
          severity: "Media"
        });
      }

      if (line.match(/function.*\{\s*\}/)) {
        findings.push({
          line: index + 1,
          msg:
            "Función vacía detectada. Elimina código muerto para mejorar la mantenibilidad.",
          severity: "Baja"
        });
      }
    });

    setAuditResults(findings);
  };

  return {
    codeToAudit,
    setCodeToAudit,
    auditResults,
    runAudit
  };
};
