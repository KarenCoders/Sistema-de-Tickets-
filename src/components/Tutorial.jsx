import {
  BookOpen,
  ShieldCheck,
  Settings
} from "lucide-react";

const Tutorial = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">

      <div className="flex items-center gap-3">
        <BookOpen size={32} className="text-blue-600" />
        <h1 className="text-3xl font-bold">
          Tutorial Teórico
        </h1>
      </div>

      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-emerald-600" />
          <h2 className="text-xl font-semibold">
            1. ¿Cómo funciona la Auditoría de Código?
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          La auditoría estática de código consiste en analizar el código fuente
          sin ejecutarlo. Se buscan patrones que violen las reglas de negocio o
          los estándares de la industria, con el objetivo de detectar errores,
          malas prácticas o riesgos antes de que el software llegue a
          producción.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-600">
          “El auditor no es un enemigo, es el primer filtro de calidad antes de
          producción.”
        </blockquote>

        <p className="text-slate-700 font-medium">
          Regla de Oro: Automatiza lo que puedas, revisa manualmente lo lógico.
        </p>
      </section>

      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <div className="flex items-center gap-2">
          <Settings className="text-indigo-600" />
          <h2 className="text-xl font-semibold">
            2. El Ciclo de Vida del Mantenimiento
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          Para gestionar el mantenimiento de forma eficaz, cada solicitud debe
          ser categorizada y priorizada. No es lo mismo un error que impide
          cobrar a los usuarios (Correctivo Crítico) que una mejora estética
          (Perfectivo Baja).
        </p>

        <ul className="list-disc pl-6 text-slate-700 space-y-1">
          <li><strong>Correctivo</strong></li>
          <li><strong>Adaptativo</strong></li>
          <li><strong>Perfectivo</strong></li>
          <li><strong>Preventivo</strong></li>
        </ul>
      </section>

      <footer className="text-center text-sm text-slate-500 pt-6">
        Unidad 5: Mantenimiento - Ingeniería de Sistemas © 2026
      </footer>

    </div>
  );
};

export default Tutorial;
