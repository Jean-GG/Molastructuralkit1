---
title: "Análisis Estructural Avanzado"
category: "Módulo 4"
order: 4
---

## MÉTODO DE LAS RIGIDECES (FLEXIBILIDADES)

### ¿Qué es el método de flexibilidades y cuándo se aplica?

El método de flexibilidades (o método de las fuerzas) es un procedimiento para analizar estructuras hiperestáticas. Se basa en liberar las restricciones redundantes de la estructura para convertirla en isostática, calcular las deformaciones producidas, y luego aplicar el principio de compatibilidad para determinar las fuerzas redundantes. Se aplica cuando el grado de indeterminación de la estructura es mayor que cero ($r > n + c$ para vigas).

### ¿Cómo se calcula el grado de indeterminación para diferentes tipos de estructuras?

* **Vigas:** $G.I. = r - (n + c)$, donde $r =$ reacciones, $n =$ ecuaciones de equilibrio (3), $c =$ ecuaciones de condición.
* **Armaduras (interno):** $G.I. = r + b - 2j$, donde $b =$ número de barras, $j =$ número de nodos.
* **Marcos:** $G.I. = r + 3m - (3n + c)$, donde $m =$ número de miembros, $n =$ número de uniones.

<div class="flex flex-col items-center my-6 gap-6">
    <img src="/images/questions/avanzado-02.jpg" alt="Grado Indeterminación Vigas" class="rounded-xl shadow-lg border border-slate-200 w-full md:max-w-2xl" />
    <img src="/images/questions/avanzado-02.1.jpg" alt="Grado Indeterminación Armaduras" class="rounded-xl shadow-lg border border-slate-200 w-full md:max-w-2xl" />
    <img src="/images/questions/avanzado-02.2.jpg" alt="Grado Indeterminación Marcos" class="rounded-xl shadow-lg border border-slate-200 w-full md:max-w-2xl" />
</div>

### ¿Cuál es el procedimiento general del método de flexibilidades?

1.  1.- Calcular el grado de indeterminación.
2.  2.- Seleccionar las restricciones redundantes a liberar.
3.  3.- Separar la estructura en: estructura isostática fundamental + estructuras unitarias.
4.  4.- Calcular deformaciones de la estructura isostática fundamental ($\Delta'$).
5.  5.- Calcular deformaciones unitarias de las estructuras redundantes ($\delta$).
6.  6.- Aplicar el principio de compatibilidad para formar ecuaciones simultáneas.
7.  7.- Calcular las reacciones restantes por estática.

### ¿Qué es el principio de compatibilidad y cómo se aplica?

El principio de compatibilidad establece que la deformación total en los puntos donde se liberaron las restricciones debe ser igual a cero (si originalmente no había desplazamiento).

Matemáticamente:

$$\Delta_{B} = \Delta'_{B} + \delta_{BB} \cdot R_{By}$$

Donde:
* $\Delta =$ deformación total (debe ser cero en apoyos)
* $\Delta' =$ deformación de la estructura isostática fundamental
* $\delta =$ deformación unitaria (flexibilidad)
* $R =$ reacción redundante desconocida

### ¿Cómo se calculan las deformaciones en estructuras isostáticas usando el método de la carga unitaria?

Para estructuras tipo viga o marco, se usa:

$$\Delta = \int_{0}^{L} \frac{M \cdot m}{EI} dx$$

Para armaduras, se usa:

$$\Delta' = \sum \frac{F'U'L}{AE}$$

Donde:
* $M =$ momento de la estructura original
* $m =$ momento de la estructura unitaria
* $F =$ fuerza axial de la estructura original
* $U =$ fuerza axial de la estructura unitaria
* $L =$ longitud del elemento

### ¿Qué diferencia hay entre la estructura isostática fundamental y las estructuras unitarias?

* **Estructura isostática fundamental:** Es la estructura original después de liberar las restricciones redundantes, sometida a las cargas reales. Se calculan sus deformaciones ($\Delta'$) en los puntos donde se liberaron las restricciones.
* **Estructuras unitarias:** Son la misma estructura isostática pero sometida a una carga unitaria (valor = 1) en el lugar donde se liberó cada restricción. Se calculan sus deformaciones unitarias ($\delta$) que representan las flexibilidades del sistema.