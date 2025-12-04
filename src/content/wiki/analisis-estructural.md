---
title: "Análisis Estructural I"
category: "Módulo 3"
order: 3
---

## MÉTODOS ENERGÉTICOS

### ¿En qué consiste el método de la viga conjugada?

El método de la viga conjugada consiste en "convertir" el diagrama de momentos flexionantes ($M/EI$) en la carga de una viga ficticia. Las reacciones calculadas mediante estática en esta viga conjugada equivalen a las rotaciones (pendientes), y los momentos flexionantes equivalen a las deflexiones de la viga real.

### ¿Cómo se transforman las condiciones de apoyo de la viga real a la viga conjugada?

Las transformaciones principales son:
* Apoyo libre exterior $\to$ Apoyo libre exterior
* Extremos libres $\to$ Empotramiento
* Empotramiento $\to$ Extremo libre
* Articulación interior o perno $\to$ Apoyo libre interior
* Apoyo libre interior $\to$ Articulación interior o perno

<div class="flex flex-col items-center my-6">
    <img src="/images/questions/analisis-02-viga-conjugada.jpg" alt="Transformación de Apoyos" class="rounded-xl shadow-lg border border-slate-200 w-full md:max-w-2xl" />
</div>

### ¿Cuál es la fórmula para calcular deflexiones usando el método de la carga unitaria?

$$\Delta = \int_{0}^{L} \frac{M \cdot m}{EI} dx$$

Donde:
* $M =$ ecuación del momento de la viga original
* $m =$ ecuación del momento de la viga unitaria (con carga = 1)
* $L =$ longitud o intervalo de aplicación

### ¿Qué representa la "carga" en la viga conjugada?

La "carga" en la viga conjugada representa el diagrama $M/EI$ de la viga real. El área bajo este diagrama corresponde a la resultante que se usa para calcular las reacciones (rotaciones), y esta resultante siempre está situada en el centroide del diagrama.

### ¿Cuándo se aplica una carga unitaria de valor 1 y cuándo se aplica un momento unitario?

* Se aplica una carga concentrada de valor 1 cuando se quiere conocer la deflexión en un punto.
* Se aplica un momento unitario cuando se quiere conocer la pendiente o rotación en un punto.

### ¿Dónde ocurre la deflexión máxima en una viga y cómo se identifica en la viga conjugada?

La deflexión máxima ocurre en el punto donde la pendiente es igual a cero. En la viga conjugada, se identifica haciendo un "corte" donde la resultante que representa la pendiente sea cero, y el momento en ese punto será equivalente a la deflexión máxima.

### ¿Cuál es el procedimiento general para aplicar el método de la carga unitaria?

1.  Calcular reacciones y diagramas de momentos de la viga original.
2.  Realizar cortes en cada tramo para obtener la ecuación $M(x)$.
3.  Aplicar carga unitaria (1) en el punto deseado, sin las cargas originales.
4.  Calcular reacciones y momentos de la viga virtual.
5.  Obtener la ecuación del momento unitario $m(x)$.
6.  Aplicar la fórmula integral desarrollando las integrales por tramos.

---

## CÁLCULO DE DEFLEXIONES POR MÉTODOS GEOMÉTRICOS

### ¿Cuál es la ecuación diferencial de la elástica y qué representa?

La ecuación diferencial de la elástica es:

$$\frac{d^{2}y}{dx^{2}} = \frac{M}{EI}$$

Representa la relación entre la curvatura de una viga y el momento flexionante. El término $EI$ se define como la rigidez a la flexión del miembro, donde $E$ es el módulo de elasticidad e $I$ es el momento de inercia de la sección transversal.

### ¿Cuáles son las condiciones de frontera para los diferentes tipos de apoyo?

* **Rodillo:** $\theta \neq 0$ (hay rotación), $\Delta = 0$ (no hay deflexión)
* **Articulado:** $\theta \neq 0$ (hay rotación), $\Delta = 0$ (no hay deflexión)
* **Empotrado:** $\theta = 0$ (no hay rotación), $\Delta = 0$ (no hay deflexión)

<div class="flex flex-col items-center my-6">
    <img src="/images/questions/analisis-09.jpg" alt="Condiciones de Frontera" class="rounded-xl shadow-lg border border-slate-200 w-full md:max-w-2xl" />
</div>

Estas condiciones son fundamentales para calcular las constantes de integración en el método de doble integración.

### ¿En qué consiste el método de doble integración?

El método de doble integración consiste en sustituir la ecuación del momento flexionante $M(x)$ en la ecuación diferencial de la elástica, integrar una vez para obtener la ecuación de la pendiente $\theta$, y luego integrar una segunda vez para obtener la ecuación de la deflexión $\Delta$. Las constantes de integración se determinan aplicando las condiciones de frontera de los apoyos.

### ¿Cuál es el Primer Teorema de Área-Momentos?

El Primer Teorema establece que la rotación o cambio de pendiente entre dos secciones cualesquiera de una viga elástica es igual al área del diagrama de momentos flexionantes entre esas dos secciones dividido entre $EI$.

Matemáticamente:

$$\theta = \int \frac{M}{EI} dx$$

### ¿Cuál es el Segundo Teorema de Área-Momentos?

El Segundo Teorema establece que la distancia entre un punto de la curva elástica y la tangente trazada por otro punto es igual al momento de primer orden del área del diagrama $M/EI$ respecto al primer punto.

Matemáticamente:

$$t_{AB} = A \cdot \bar{x}$$