---
title: "Mecánica de Materiales"
category: "Módulo 2"
order: 2
---

## TEMA 1: ESFUERZO NORMAL Y DEFORMACIÓN LINEAL

### ¿Qué es el esfuerzo normal y cómo se calcula?

El esfuerzo normal ($\sigma$) es la intensidad de fuerza por unidad de área que actúa perpendicular a la sección transversal de un elemento estructural. Se calcula mediante la fórmula:

$$\sigma = \frac{P}{A}$$

Donde:
* $\sigma =$ esfuerzo normal (Pa o N/m²)
* $P =$ carga axial aplicada (N)
* $A =$ área de la sección transversal (m²)

> "El esfuerzo normal se define como la fuerza axial dividida por el área de la sección transversal sobre la cual actúa" (Gere & Goodno, Mecánica de Materiales).

### ¿Qué establece la Ley de Hooke para materiales elásticos?

La Ley de Hooke establece que, dentro del rango elástico de un material, existe una relación lineal directamente proporcional entre el esfuerzo aplicado y la deformación resultante:

$$\sigma = E \times \epsilon$$

Donde:
* $E =$ módulo de elasticidad o módulo de Young (Pa)
* $\epsilon =$ deformación unitaria (adimensional)

> "Para un material elástico lineal, el esfuerzo es directamente proporcional a la deformación, siendo la constante de proporcionalidad el módulo de elasticidad E" (Beer, Johnston & DeWolf, Mecánica de Materiales).

### ¿Cómo se define la deformación unitaria o deformación lineal?

La deformación unitaria ($\epsilon$) es el cambio de longitud por unidad de longitud original de un elemento sometido a carga axial:

$$\epsilon = \frac{\delta}{L}$$

Donde:
* $\epsilon =$ deformación unitaria (adimensional o mm/mm)
* $\delta =$ deformación total o alargamiento (m)
* $L =$ longitud original (m)

> "La deformación unitaria se define como el alargamiento o acortamiento por unidad de longitud" (Hibbeler, Mecánica de Materiales).

### ¿Qué es el coeficiente de Poisson y qué representa?

El coeficiente de Poisson ($\nu$) es una constante del material que relaciona la deformación lateral con la deformación axial cuando un elemento está sometido a carga axial:

$$\nu = -\frac{\epsilon_{lateral}}{\epsilon_{axial}}$$

Los valores típicos oscilan entre 0.25 y 0.35 para la mayoría de los metales.

> "El coeficiente de Poisson es la relación negativa entre la deformación lateral y la deformación axial" (Timoshenko & Gere, Mecánica de Materiales).

### ¿Cómo se calcula el alargamiento total de una barra bajo carga axial?

El alargamiento total ($\delta$) de una barra de longitud $L$, área $A$, sometida a una fuerza axial $P$ se calcula mediante:

$$\delta = \frac{P \times L}{A \times E}$$

Esta ecuación combina la Ley de Hooke con la definición de deformación unitaria.

> "El alargamiento de una barra prismática bajo carga axial es igual al producto de la fuerza, la longitud, dividido por el área transversal y el módulo de elasticidad" (Pytel & Kiusalaas, Mecánica de Materiales).

### ¿Qué diferencia existe entre esfuerzo normal de tensión y de compresión?

* **Esfuerzo de tensión:** Ocurre cuando las fuerzas axiales tienden a alargar el elemento. Se considera positivo por convención ($\sigma > 0$).
* **Esfuerzo de compresión:** Ocurre cuando las fuerzas axiales tienden a acortar el elemento. Se considera negativo por convención ($\sigma < 0$).

<div class="flex flex-col items-center my-6">
    <img src="/images/questions/mecanica-06-tension-compresion.jpg" alt="Esfuerzo de Tensión y Compresión" class="rounded-xl shadow-lg border border-slate-200 w-full md:max-w-2xl" />
</div>

> "El esfuerzo normal es de tensión cuando tiende a alargar el elemento y de compresión cuando tiende a acortarlo" (Fitzgerald, Mecánica de Materiales).

### ¿Qué es el factor de seguridad en diseño estructural?

El factor de seguridad ($FS$) es la relación entre la resistencia última o de fluencia del material y el esfuerzo de trabajo permisible:

$$FS = \frac{\sigma_{fluencia}}{\sigma_{trabajo}}$$

Valores típicos van de 1.5 a 3.0 dependiendo de la aplicación y las incertidumbres involucradas.

> "El factor de seguridad se define como la relación entre la resistencia del material y el esfuerzo permisible en condiciones de servicio" (Mott, Resistencia de Materiales).

---

## TEMA 2: FLEXIÓN, CORTANTE Y TORSIÓN EN VIGAS

### ¿Qué es el momento flector y cómo afecta a una viga?

El momento flector ($M$) es el momento interno que se desarrolla en una sección transversal de una viga cuando está sometida a cargas transversales. Produce esfuerzos normales que varían linealmente a lo largo de la altura de la sección.

$$\sigma = -\frac{M \times y}{I}$$

Donde:
* $y =$ distancia desde el eje neutro
* $I =$ momento de inercia de la sección

> "El momento flector produce esfuerzos normales que varían linealmente desde cero en el eje neutro hasta un máximo en las fibras externas" (Gere & Goodno).

### ¿Qué establece la ecuación de la flexión o fórmula de Navier?

La ecuación de la flexión relaciona el esfuerzo normal en cualquier punto de una viga con el momento flector:

$$\frac{\sigma}{y} = \frac{M}{I} = \frac{E}{R}$$

Esta ecuación también se expresa como: $\sigma = \frac{M \times y}{I}$

> "La fórmula de la flexión establece que el esfuerzo en un punto es proporcional a su distancia del eje neutro y al momento flector aplicado" (Beer, Johnston & DeWolf).

### ¿Qué es el esfuerzo cortante en vigas y cómo se distribuye?

El esfuerzo cortante ($\tau$) es el esfuerzo tangencial que se desarrolla en una sección transversal debido a la fuerza cortante. Se calcula mediante la fórmula de Jouravski:

$$\tau = \frac{V \times Q}{I \times b}$$

Donde:
* $V =$ fuerza cortante
* $Q =$ momento estático del área
* $b =$ ancho de la sección
* $I =$ momento de inercia

> "El esfuerzo cortante en vigas varía parabólicamente a través de la sección, siendo máximo en el eje neutro y cero en las fibras extremas" (Hibbeler).

### ¿Qué es el módulo de sección y cuál es su importancia?

El módulo de sección ($S$ o $W$) es una propiedad geométrica de la sección transversal definida como:

$$S = \frac{I}{c}$$

Donde:
* $I =$ momento de inercia
* $c =$ distancia del eje neutro a la fibra extrema

Permite calcular el esfuerzo máximo como: $\sigma_{max} = \frac{M}{S}$

> "El módulo de sección es una medida de la eficiencia estructural de una sección en flexión" (Timoshenko & Gere).

### ¿Qué es la torsión y cómo se calcula el esfuerzo cortante por torsión?

La torsión es la solicitación que produce rotación de una sección respecto a otra alrededor del eje longitudinal. El esfuerzo cortante por torsión en ejes circulares se calcula:

$$\tau = \frac{T \times r}{J}$$

Donde:
* $T =$ momento torsor o par de torsión
* $r =$ distancia radial desde el centro
* $J =$ momento polar de inercia

> "El esfuerzo cortante por torsión varía linealmente desde cero en el centro hasta un máximo en la superficie exterior del eje" (Gere & Goodno).

### ¿Cuál es la ecuación para el ángulo de giro por torsión?

El ángulo de giro ($\phi$) de un eje circular sometido a torsión se calcula mediante:

$$\phi = \frac{T \times L}{G \times J}$$

Donde:
* $T =$ momento torsor
* $L =$ longitud del eje
* $G =$ módulo de rigidez o módulo de cortante
* $J =$ momento polar de inercia

> "El ángulo de torsión es directamente proporcional al momento aplicado y a la longitud, e inversamente proporcional a la rigidez torsional" (Beer, Johnston & DeWolf).

### ¿Qué diferencia existe entre vigas estáticamente determinadas e indeterminadas?

* **Vigas estáticamente determinadas:** Las reacciones y esfuerzos internos pueden calcularse únicamente con ecuaciones de equilibrio estático.
* **Vigas estáticamente indeterminadas:** Requieren ecuaciones adicionales de compatibilidad de deformaciones además del equilibrio.

> "Una viga es estáticamente indeterminada cuando el número de reacciones desconocidas excede el número de ecuaciones de equilibrio disponibles" (Hibbeler).

---

## TEMA 3: INESTABILIDAD ELÁSTICA DE COLUMNAS

### ¿Qué es el pandeo de columnas y cuándo ocurre?

El pandeo es un fenómeno de inestabilidad elástica que ocurre cuando una columna esbelta sometida a compresión axial se deforma lateralmente súbitamente al alcanzar una carga crítica. Es un modo de falla que depende de la geometría y las condiciones de apoyo.

> "El pandeo es un fenómeno de inestabilidad en el cual una columna sometida a compresión puede fallar por deflexión lateral súbita antes de alcanzar el esfuerzo de fluencia del material" (Timoshenko & Gere).

### ¿Qué establece la fórmula de Euler para la carga crítica?

La fórmula de Euler determina la carga crítica ($P_{cr}$) a la cual una columna perfectamente recta con extremos articulados pandea:

$$P_{cr} = \frac{\pi^2 \times E \times I}{L^2}$$

Donde:
* $E =$ módulo de elasticidad
* $I =$ momento de inercia mínimo
* $L =$ longitud de la columna

> "La carga crítica de Euler representa la carga mínima que causa inestabilidad en una columna ideal con extremos articulados" (Gere & Goodno).

### ¿Qué es la relación de esbeltez y cómo afecta al pandeo?

La relación de esbeltez ($\lambda$) es un parámetro adimensional que caracteriza la susceptibilidad al pandeo:

$$\lambda = \frac{L}{r}$$

Donde:
* $L =$ longitud efectiva de la columna
* $r =$ radio de giro $= \sqrt{I/A}$

A mayor esbeltez, menor es la carga crítica de pandeo.

> "La relación de esbeltez es el parámetro fundamental que determina si una columna fallará por pandeo o por aplastamiento" (Beer, Johnston & DeWolf).

### ¿Qué es la longitud efectiva de una columna?

La longitud efectiva ($L_e$) es la distancia entre puntos de inflexión en la forma de pandeo, que depende de las condiciones de apoyo en los extremos:

$$L_e = K \times L$$

Donde $K$ es el factor de longitud efectiva:
* $K = 0.5$ para extremos empotrados
* $K = 0.7$ para un extremo empotrado y otro articulado
* $K = 1.0$ para extremos articulados
* $K = 2.0$ para un extremo empotrado y otro libre

<div class="flex flex-col items-center my-6">
    <img src="/images/questions/mecanica-18-longitud_efectiva.jpg" alt="Longitud Efectiva y Factor K" class="rounded-xl shadow-lg border border-slate-200 w-full md:max-w-2xl" />
</div>

> "La longitud efectiva considera el efecto de las restricciones en los extremos sobre el comportamiento de pandeo" (Hibbeler).

### ¿Qué es el esfuerzo crítico de Euler?

El esfuerzo crítico ($\sigma_{cr}$) es el esfuerzo promedio en la columna cuando alcanza la carga crítica de pandeo:

$$\sigma_{cr} = \frac{P_{cr}}{A} = \frac{\pi^2 \times E}{(L/r)^2}$$

<div class="flex flex-col items-center my-6">
    <img src="/images/questions/mecanica-19-euler.jpg" alt="Gráfica de Esfuerzo Crítico" class="rounded-xl shadow-lg border border-slate-200 w-full md:max-w-2xl" />
</div>

Es independiente de la resistencia del material y solo depende del módulo de elasticidad y la esbeltez.

> "El esfuerzo crítico de Euler establece el límite de esfuerzo para pandeo elástico en función de la relación de esbeltez" (Gere & Goodno).

### ¿Qué es el factor de seguridad en diseño de columnas?

En diseño de columnas, el factor de seguridad se aplica a la carga crítica para obtener la carga permisible:

$$P_{permisible} = \frac{P_{cr}}{FS}$$

Los factores de seguridad típicos para columnas son mayores que para otros elementos ($FS = 2.5$ a $3.5$) debido a la naturaleza súbita y catastrófica de la falla por pandeo.

> "El factor de seguridad para columnas debe ser mayor que para elementos sometidos a tensión o flexión debido a las imperfecciones inevitables y a la naturaleza catastrófica de la falla por pandeo" (Mott).