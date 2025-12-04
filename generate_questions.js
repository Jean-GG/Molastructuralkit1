import fs from 'fs';
import path from 'path';

const outputDir = './src/content/questions';

// Asegurar que existe el directorio
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

// --- DATA BASE DE PREGUNTAS (Texto fiel al PDF) ---
const questions = [
    // ================= ESTÁTICA =================
    {
        id: "estatica-01",
        topic: "Estática",
        question: "¿Cuáles son las condiciones necesarias para que una partícula esté en equilibrio?",
        answerTitle: "Suma de Fuerzas = Cero",
        answerDetail: "Para que una partícula esté en equilibrio, la resultante de todas las fuerzas que actúan sobre ella debe ser igual a cero. Esto se expresa matemáticamente como ΣF=0, o en forma de componentes: ΣFx=0, ΣFy=0 y ΣFz=0 en el espacio tridimensional.",
        imgPlaceholder: "estatica-01-equilibrio.jpg"
    },
    {
        id: "estatica-02",
        topic: "Estática",
        question: "¿Qué es un diagrama de cuerpo libre y por qué es importante?",
        answerTitle: "Diagrama de Cuerpo Libre (D.C.L.)",
        answerDetail: "Un diagrama de cuerpo libre es una representación gráfica que muestra la partícula aislada de su entorno, con todas las fuerzas externas que actúan sobre ella representadas mediante vectores. Es fundamental porque permite visualizar claramente todas las fuerzas involucradas y facilita la aplicación de las ecuaciones de equilibrio.",
        imgPlaceholder: "estatica-02-poleas.jpg"
    },
    {
        id: "estatica-03",
        topic: "Estática",
        question: "¿Qué método se utiliza para resolver sistemas con fuerzas concurrentes en el espacio tridimensional?",
        answerTitle: "Método de Componentes Rectangulares",
        answerDetail: "Para resolver sistemas con fuerzas concurrentes en el espacio tridimensional, se utiliza el método de componentes rectangulares, donde cada fuerza se descompone en sus componentes x, y, z. Luego se aplican las tres ecuaciones de equilibrio: ΣFx=0, ΣFy=0, ΣFz=0, obteniendo así un sistema de tres ecuaciones con un máximo de tres incógnitas.",
        imgPlaceholder: "estatica-03-vectores-3d.jpg"
    },
    {
        id: "estatica-04",
        topic: "Estática",
        question: "¿Qué es el principio de transmisibilidad en el contexto del equilibrio de partículas?",
        answerTitle: "Principio de Transmisibilidad",
        answerDetail: "El principio de transmisibilidad establece que las condiciones de equilibrio o movimiento de un cuerpo rígido permanecerán inalteradas si una fuerza que actúa en un punto del cuerpo se reemplaza por una fuerza de igual magnitud y dirección, pero que actúa en un punto diferente, siempre que ambas fuerzas tengan la misma línea de acción.",
        imgPlaceholder: "estatica-04-transmisibilidad.jpg"
    },
    {
        id: "estatica-05",
        topic: "Estática",
        question: "¿Cuáles son las condiciones de equilibrio para un cuerpo rígido?",
        answerTitle: "Equilibrio de Fuerzas y Momentos",
        answerDetail: "Un cuerpo rígido está en equilibrio cuando tanto la suma de todas las fuerzas externas como la suma de todos los momentos externos alrededor de cualquier punto son iguales a cero. Matemáticamente: ΣF=0 y ΣM=0. Esto previene tanto la traslación como la rotación del cuerpo.",
        imgPlaceholder: "estatica-05-cuerpo-rigido.jpg"
    },
    {
        id: "estatica-06",
        topic: "Estática",
        question: "¿Qué es un momento de una fuerza y cómo se calcula?",
        answerTitle: "Momento (M = F × d)",
        answerDetail: "El momento de una fuerza respecto a un punto es la medida de la tendencia de esa fuerza a hacer rotar el cuerpo alrededor de ese punto. Se calcula como el producto de la magnitud de la fuerza por la distancia perpendicular desde el punto hasta la línea de acción de la fuerza: M = F × d donde d es el brazo de momento.",
        imgPlaceholder: "estatica-06-momento.jpg"
    },
    {
        id: "estatica-07",
        topic: "Estática",
        question: "¿Cuál es la diferencia entre fuerzas internas y fuerzas externas en un cuerpo rígido?",
        answerTitle: "Externas vs Internas",
        answerDetail: "Las fuerzas externas son aquellas aplicadas por otros cuerpos sobre el cuerpo rígido en estudio, como cargas, reacciones de apoyos y peso propio. Las fuerzas internas son las que mantienen unidas las partículas del cuerpo y no aparecen en el diagrama de cuerpo libre porque se cancelan entre sí dentro del sistema.",
        imgPlaceholder: "estatica-07-fuerzas.jpg"
    },
    {
        id: "estatica-08",
        topic: "Estática",
        question: "¿Qué tipos de apoyos existen y qué reacciones generan?",
        answerTitle: "Rodillo, Pasador y Empotramiento",
        answerDetail: "Los principales tipos de apoyos son: (1) apoyo de rodillo, que proporciona una reacción perpendicular a la superficie (1 reacción); (2) apoyo de pasador o articulación, que proporciona dos componentes de reacción perpendiculares (2 reacciones); y (3) empotramiento, que proporciona dos componentes de fuerza y un momento (3 reacciones).",
        imgPlaceholder: "estatica-08-tipos-apoyos.jpg"
    },
    {
        id: "estatica-09",
        topic: "Estática",
        question: "¿Cómo se determina si un sistema es estáticamente determinado, indeterminado o inestable?",
        answerTitle: "Clasificación de Estructuras",
        answerDetail: "Un sistema es estáticamente determinado cuando el número de ecuaciones de equilibrio independientes es igual al número de incógnitas (reacciones). Es estáticamente indeterminado si hay más incógnitas que ecuaciones. Es inestable si las reacciones son inadecuadas para prevenir el movimiento, incluso si el número de ecuaciones y reacciones coincide.",
        imgPlaceholder: "estatica-09-determinacion.jpg"
    },
    {
        id: "estatica-10",
        topic: "Estática",
        question: "¿Qué es un par de fuerzas y cuál es su efecto sobre un cuerpo rígido?",
        answerTitle: "Par de Fuerzas",
        answerDetail: "Un par de fuerzas consiste en dos fuerzas paralelas de igual magnitud, sentidos opuestos y líneas de acción diferentes. Su efecto es producir únicamente rotación sin traslación. El momento del par es constante e independiente del punto de referencia elegido, calculándose como M = F × d donde d es la distancia perpendicular entre las fuerzas.",
        imgPlaceholder: "estatica-10-par.jpg"
    },
    {
        id: "estatica-11",
        topic: "Estática",
        question: "¿Qué es una estructura estáticamente determinada y qué criterio se usa para identificarla?",
        answerTitle: "Estructura Determinada (m = 2n - 3)",
        answerDetail: "Una estructura estáticamente determinada es aquella en la que todas las fuerzas internas y reacciones externas pueden calcularse usando únicamente las ecuaciones de equilibrio estático. Para armaduras planas, se verifica con la ecuación: m = 2n - 3 donde m es el número de miembros y n el número de nudos o juntas.",
        imgPlaceholder: "estatica-11-armadura-plana.jpg"
    },
    {
        id: "estatica-12",
        topic: "Estática",
        question: "¿Qué es el método de los nudos para análisis de armaduras?",
        answerTitle: "Método de los Nudos",
        answerDetail: "El método de los nudos es una técnica para determinar las fuerzas en los miembros de una armadura analizando el equilibrio de fuerzas en cada junta o nudo. Se dibuja un diagrama de cuerpo libre de cada nudo y se aplican las ecuaciones ΣFx=0 y ΣFy=0, asumiendo que todas las fuerzas son concurrentes en el nudo.",
        imgPlaceholder: "estatica-12-metodo-nudos.jpg"
    },
    {
        id: "estatica-13",
        topic: "Estática",
        question: "¿Cuál es el método de las secciones y cuándo es más conveniente?",
        answerTitle: "Método de las Secciones",
        answerDetail: "El método de las secciones consiste en hacer un corte imaginario a través de la armadura, dividiéndola en dos partes, y luego aplicar las ecuaciones de equilibrio a una de las secciones. Es más conveniente cuando se desea encontrar la fuerza en un miembro específico sin tener que analizar toda la estructura nuda por nudo.",
        imgPlaceholder: "estatica-13-metodo-secciones.jpg"
    },
    {
        id: "estatica-14",
        topic: "Estática",
        question: "¿Qué diferencia hay entre una armadura simple y una armadura compuesta?",
        answerTitle: "Simple vs Compuesta",
        answerDetail: "Una armadura simple se forma comenzando con un triángulo básico y agregando sucesivamente dos nuevos miembros y un nudo. Una armadura compuesta se forma conectando dos o más armaduras simples mediante juntas comunes, barras de conexión, o ambas. Las armaduras compuestas requieren análisis más complejos.",
        imgPlaceholder: "estatica-14-armadura-compuesta.jpg"
    },
    {
        id: "estatica-15",
        topic: "Estática",
        question: "¿Qué son las fuerzas internas en vigas y cómo se representan?",
        answerTitle: "Fuerzas Internas (V, N, M)",
        answerDetail: "Las fuerzas internas en vigas son la fuerza cortante (V), la fuerza normal (N) y el momento flector (M) que actúan en cualquier sección transversal de la viga. Se determinan haciendo un corte imaginario en la viga y aplicando las ecuaciones de equilibrio a la sección resultante. Se representan mediante diagramas de fuerza cortante y momento flector.",
        imgPlaceholder: "estatica-15-vigas-internas.jpg"
    },

    // ================= MECÁNICA DE MATERIALES =================
    {
        id: "mecanica-01",
        topic: "Mecánica de Materiales",
        question: "¿Qué es el esfuerzo normal y cómo se calcula?",
        answerTitle: "Esfuerzo Normal (σ)",
        answerDetail: "El esfuerzo normal (σ) es la intensidad de fuerza por unidad de área que actúa perpendicular a la sección transversal de un elemento estructural. Se calcula mediante la fórmula: σ = P/A. Donde: σ = esfuerzo normal (Pa o N/m²), P = carga axial aplicada (N), A = área de la sección transversal (m²).",
        imgPlaceholder: "mecanica-01-esfuerzo.jpg"
    },
    {
        id: "mecanica-02",
        topic: "Mecánica de Materiales",
        question: "¿Qué establece la Ley de Hooke para materiales elásticos?",
        answerTitle: "Ley de Hooke (σ = E × ε)",
        answerDetail: "La Ley de Hooke establece que, dentro del rango elástico de un material, existe una relación lineal directamente proporcional entre el esfuerzo aplicado y la deformación resultante: σ = E × ε. Donde: E = módulo de elasticidad o módulo de Young (Pa), ε = deformación unitaria (adimensional).",
        imgPlaceholder: null
    },
    {
        id: "mecanica-03",
        topic: "Mecánica de Materiales",
        question: "¿Cómo se define la deformación unitaria o deformación lineal?",
        answerTitle: "Deformación Unitaria (ε)",
        answerDetail: "La deformación unitaria (ε) es el cambio de longitud por unidad de longitud original de un elemento sometido a carga axial: ε = δ/L. Donde: ε = deformación unitaria, δ = deformación total o alargamiento, L = longitud original.",
        imgPlaceholder: null
    },
    {
        id: "mecanica-04",
        topic: "Mecánica de Materiales",
        question: "¿Qué es el coeficiente de Poisson y qué representa?",
        answerTitle: "Coeficiente de Poisson (ν)",
        answerDetail: "El coeficiente de Poisson (ν) es una constante del material que relaciona la deformación lateral con la deformación axial cuando un elemento está sometido a carga axial: ν = -ε_lateral / ε_axial. Los valores típicos oscilan entre 0.25 y 0.35 para la mayoría de los metales.",
        imgPlaceholder: null
    },
    {
        id: "mecanica-05",
        topic: "Mecánica de Materiales",
        question: "¿Cómo se calcula el alargamiento total de una barra bajo carga axial?",
        answerTitle: "Alargamiento Total (δ)",
        answerDetail: "El alargamiento total (δ) de una barra de longitud L, área A, sometida a una fuerza axial P se calcula mediante: δ = (P × L) / (A × E). Esta ecuación combina la Ley de Hooke con la definición de deformación unitaria.",
        imgPlaceholder: null
    },
    {
        id: "mecanica-06",
        topic: "Mecánica de Materiales",
        question: "¿Qué diferencia existe entre esfuerzo normal de tensión y de compresión?",
        answerTitle: "Tensión vs Compresión",
        answerDetail: "Esfuerzo de tensión: Ocurre cuando las fuerzas axiales tienden a alargar el elemento. Se considera positivo por convención (σ > 0). Esfuerzo de compresión: Ocurre cuando las fuerzas axiales tienden a acortar el elemento. Se considera negativo por convención (σ < 0).",
        imgPlaceholder: "mecanica-06-tension-compresion.jpg"
    },
    {
        id: "mecanica-07",
        topic: "Mecánica de Materiales",
        question: "¿Qué es el factor de seguridad en diseño estructural?",
        answerTitle: "Factor de Seguridad (FS)",
        answerDetail: "El factor de seguridad (FS) es la relación entre la resistencia última o de fluencia del material y el esfuerzo de trabajo permisible: FS = σ_fluencia / σ_trabajo. Valores típicos van de 1.5 a 3.0 dependiendo de la aplicación y las incertidumbres involucradas.",
        imgPlaceholder: null
    },
    {
        id: "mecanica-08",
        topic: "Mecánica de Materiales",
        question: "¿Qué es el momento flector y cómo afecta a una viga?",
        answerTitle: "Momento Flector (M)",
        answerDetail: "El momento flector (M) es el momento interno que se desarrolla en una sección transversal de una viga cuando está sometida a cargas transversales. Produce esfuerzos normales que varían linealmente a lo largo de la altura de la sección. σ = -M × y / I",
        imgPlaceholder: "mecanica-08-flexion.jpg"
    },
    {
        id: "mecanica-09",
        topic: "Mecánica de Materiales",
        question: "¿Qué establece la ecuación de la flexión o fórmula de Navier?",
        answerTitle: "Fórmula de Navier",
        answerDetail: "La ecuación de la flexión relaciona el esfuerzo normal en cualquier punto de una viga con el momento flector: σ/y = M/I = E/R. Esta ecuación también se expresa como: σ = M × y / I, donde y es la distancia desde el eje neutro e I es el momento de inercia.",
        imgPlaceholder: null
    },
    {
        id: "mecanica-10",
        topic: "Mecánica de Materiales",
        question: "¿Qué es el esfuerzo cortante en vigas y cómo se distribuye?",
        answerTitle: "Esfuerzo Cortante (τ)",
        answerDetail: "El esfuerzo cortante (τ) es el esfuerzo tangencial que se desarrolla en una sección transversal debido a la fuerza cortante. Se calcula mediante la fórmula de Jouravski: τ = (V × Q) / (I × b). El esfuerzo cortante en vigas varía parabólicamente a través de la sección, siendo máximo en el eje neutro y cero en las fibras extremas.",
        imgPlaceholder: null
    },
    {
        id: "mecanica-11",
        topic: "Mecánica de Materiales",
        question: "¿Qué es el pandeo de columnas y cuándo ocurre?",
        answerTitle: "Pandeo de Columnas",
        answerDetail: "El pandeo es un fenómeno de inestabilidad elástica que ocurre cuando una columna esbelta sometida a compresión axial se deforma lateralmente súbitamente al alcanzar una carga crítica. Es un modo de falla que depende de la geometría y las condiciones de apoyo.",
        imgPlaceholder: "mecanica-11-pandeo.jpg"
    },
    {
        id: "mecanica-12",
        topic: "Mecánica de Materiales",
        question: "¿Qué establece la fórmula de Euler para la carga crítica?",
        answerTitle: "Carga Crítica de Euler",
        answerDetail: "La fórmula de Euler determina la carga crítica (P_cr) a la cual una columna perfectamente recta con extremos articulados pandea: P_cr = (π² × E × I) / L². Donde: E = módulo de elasticidad, I = momento de inercia mínimo, L = longitud de la columna.",
        imgPlaceholder: "mecanica-12-euler.jpg"
    },

    // ================= ANÁLISIS ESTRUCTURAL =================
    {
        id: "analisis-01",
        topic: "Análisis Estructural",
        question: "¿En qué consiste el método de la viga conjugada?",
        answerTitle: "Método de la Viga Conjugada",
        answerDetail: "El método de la viga conjugada consiste en 'convertir' el diagrama de momentos flexionantes (M/EI) en la carga de una viga ficticia. Las reacciones calculadas mediante estática en esta viga conjugada equivalen a las rotaciones (pendientes), y los momentos flexionantes equivalen a las deflexiones de la viga real.",
        imgPlaceholder: "analisis-01-viga-conjugada.jpg"
    },
    {
        id: "analisis-02",
        topic: "Análisis Estructural",
        question: "¿Cuál es la fórmula para calcular deflexiones usando el método de la carga unitaria?",
        answerTitle: "Método de la Carga Unitaria",
        answerDetail: "La fórmula es: Δ = ∫ (M · m / EI) dx. Donde: M = ecuación del momento de la viga original, m = ecuación del momento de la viga unitaria (con carga = 1), L = longitud o intervalo de aplicación.",
        imgPlaceholder: null
    },
    {
        id: "analisis-03",
        topic: "Análisis Estructural",
        question: "¿Cuándo se aplica una carga unitaria de valor 1 y cuándo se aplica un momento unitario?",
        answerTitle: "Carga vs Momento Unitario",
        answerDetail: "Se aplica una carga concentrada de valor 1 cuando se quiere conocer la deflexión en un punto. Se aplica un momento unitario cuando se quiere conocer la pendiente o rotación en un punto.",
        imgPlaceholder: null
    },
    {
        id: "analisis-04",
        topic: "Análisis Estructural",
        question: "¿Cuál es el Primer Teorema de Área-Momentos?",
        answerTitle: "1er Teorema Área-Momentos",
        answerDetail: "El Primer Teorema establece que la rotación o cambio de pendiente entre dos secciones cualesquiera de una viga elástica es igual al área del diagrama de momentos flexionantes entre esas dos secciones dividido entre EI. Matemáticamente: θ = ∫ (M/EI) dx",
        imgPlaceholder: null
    },

    // ================= ANÁLISIS AVANZADO =================
    {
        id: "avanzado-01",
        topic: "Análisis Estructural Avanzado",
        question: "¿Qué es el método de flexibilidades y cuándo se aplica?",
        answerTitle: "Método de Flexibilidades",
        answerDetail: "El método de flexibilidades (o método de las fuerzas) es un procedimiento para analizar estructuras hiperestáticas. Se basa en liberar las restricciones redundantes de la estructura para convertirla en isostática, calcular las deformaciones producidas, y luego aplicar el principio de compatibilidad para determinar las fuerzas redundantes.",
        imgPlaceholder: null
    },
    {
        id: "avanzado-02",
        topic: "Análisis Estructural Avanzado",
        question: "¿Qué es el principio de compatibilidad y cómo se aplica?",
        answerTitle: "Principio de Compatibilidad",
        answerDetail: "El principio de compatibilidad establece que la deformación total en los puntos donde se liberaron las restricciones debe ser igual a cero (si originalmente no había desplazamiento). Matemáticamente: Δ_B = Δ'_B + δ_BB · R_By",
        imgPlaceholder: null
    },
    {
        id: "avanzado-03",
        topic: "Análisis Estructural Avanzado",
        question: "¿Qué diferencia hay entre la estructura isostática fundamental y las estructuras unitarias?",
        answerTitle: "Fundamental vs Unitarias",
        answerDetail: "Estructura isostática fundamental: Es la estructura original después de liberar las restricciones redundantes, sometida a las cargas reales. Estructuras unitarias: Son la misma estructura isostática pero sometida a una carga unitaria (valor = 1) en el lugar donde se liberó cada restricción.",
        imgPlaceholder: null
    }
];

// --- GENERADOR DE ARCHIVOS ---
questions.forEach((q, index) => {
    const nextQ = questions[index + 1];
    const nextId = nextQ ? nextQ.id : null;

    // Creamos el objeto de datos
    const data = {
        id: q.id,
        topic: q.topic,
        question: q.question,
        answerTitle: q.answerTitle,
        answerDetail: q.answerDetail,
        videoId: "", 
        // SOLUCIÓN DEL ERROR: Usamos 'undefined' si no hay imagen.
        // JSON.stringify eliminará automáticamente la clave si es undefined.
        imgPlaceholder: q.imgPlaceholder || undefined, 
        nextQuestionId: nextId
    };

    const fileContent = JSON.stringify(data, null, 2);
    const filePath = path.join(outputDir, `${q.id}.json`);
    
    fs.writeFileSync(filePath, fileContent);
    console.log(`✅ Generado: ${q.id}.json`);
});

console.log(`\n🎉 ¡Todo listo! ${questions.length} preguntas generadas correctamente.`);