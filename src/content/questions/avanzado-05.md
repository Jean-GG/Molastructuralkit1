---
type: "question"
topic: "Análisis Estructural Avanzado"
question: "¿Cómo se calculan las deformaciones en estructuras isostáticas usando el método de la carga unitaria?"
answerTitle: "Cálculo de Deformaciones"
nextQuestionId: "avanzado-06"
---

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