---
type: "question"
topic: "Análisis Estructural Avanzado"
question: "¿Cómo se calcula el grado de indeterminación para diferentes tipos de estructuras?"
answerTitle: "Grado de Indeterminación (G.I.)"
nextQuestionId: "avanzado-03"
---

* **Vigas:** $G.I. = r - (n + c)$, donde $r =$ reacciones, $n =$ ecuaciones de equilibrio (3), $c =$ ecuaciones de condición.
* **Armaduras (interno):** $G.I. = r + b - 2j$, donde $b =$ número de barras, $j =$ número de nodos.
* **Marcos:** $G.I. = r + 3m - (3n + c)$, donde $m =$ número de miembros, $n =$ número de uniones.

<div class="flex flex-col items-center my-6 gap-6">
    <img src="/images/questions/avanzado-02.jpg" alt="Grado Indeterminación Vigas" class="rounded-xl shadow-lg border border-slate-600 bg-slate-800/50 w-full md:max-w-2xl" />
    <img src="/images/questions/avanzado-02.1.jpg" alt="Grado Indeterminación Armaduras" class="rounded-xl shadow-lg border border-slate-600 bg-slate-800/50 w-full md:max-w-2xl" />
    <img src="/images/questions/avanzado-02.2.jpg" alt="Grado Indeterminación Marcos" class="rounded-xl shadow-lg border border-slate-600 bg-slate-800/50 w-full md:max-w-2xl" />
</div>