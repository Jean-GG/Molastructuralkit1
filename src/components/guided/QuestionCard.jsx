// src/components/guided/QuestionCard.jsx
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const THEMES = {
    "Estática": {
        gradient: "from-orange-500 to-red-600",
        border: "border-orange-500/50",
        text: "text-orange-200",
        button: "bg-orange-600 hover:bg-orange-700"
    },
    "Mecánica de Materiales": {
        gradient: "from-slate-400 to-blue-500",
        border: "border-blue-400/50",
        text: "text-blue-200",
        button: "bg-blue-600 hover:bg-blue-700"
    },
    "Análisis Estructural": {
        gradient: "from-rose-900 to-slate-800",
        border: "border-rose-500/50",
        text: "text-rose-200",
        button: "bg-rose-700 hover:bg-rose-800"
    },
    "Análisis Estructural Avanzado": {
        gradient: "from-blue-900 to-slate-900",
        border: "border-indigo-500/50",
        text: "text-indigo-200",
        button: "bg-indigo-700 hover:bg-indigo-800"
    }
};

export default function QuestionCard({ questionData }) {
    const [isRevealed, setIsRevealed] = useState(false);
    const containerRef = useRef(null);
    const answerRef = useRef(null);

    const theme = THEMES[questionData.topic] || THEMES["Estática"];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".question-content", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" });
        }, containerRef);
        return () => ctx.revert();
    }, [questionData]);

    const handleReveal = () => {
        setIsRevealed(true);
        gsap.to(".question-content", { scale: 0.95, opacity: 0.6, duration: 0.5 });
        setTimeout(() => {
            gsap.fromTo(answerRef.current,
                { y: 50, opacity: 0, display: 'none' },
                { y: 0, opacity: 1, display: 'block', duration: 0.8, ease: "back.out(1.7)" }
            );
        }, 100);
    };

    // Lógica para saber a dónde va el botón de "Saltar"
    const nextLink = questionData.nextQuestionId
        ? `/repaso/${questionData.nextQuestionId}`
        : '/agradecimientos';

    return (
        <div ref={containerRef} className="w-full max-w-3xl mx-auto">

            {/* --- TARJETA DE PREGUNTA --- */}
            <div className={`question-content bg-gradient-to-br ${theme.gradient} border ${theme.border} p-8 rounded-2xl shadow-2xl mb-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white rounded-full blur-3xl opacity-10"></div>

                <span className={`${theme.text} font-bold tracking-wider text-sm uppercase mb-2 block`}>
                    {questionData.topic}
                </span>
                <h2 className="text-2xl md:text-3xl text-white font-bold leading-tight mb-8 text-shadow-sm">
                    {questionData.question}
                </h2>

                {/* --- ZONA DE BOTONES (Antes de revelar) --- */}
                {!isRevealed && (
                    <div className="flex flex-col md:flex-row gap-4">

                        {/* Botón 1: Ver Explicación (Principal) */}
                        <button
                            onClick={handleReveal}
                            className={`flex-1 py-4 ${theme.button} text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2`}
                        >
                            Ver Explicación
                        </button>

                        {/* Botón 2: Saltar Pregunta (Secundario) */}
                        <a
                            href={nextLink}
                            className="flex-1 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white font-semibold rounded-xl transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2"
                        >
                            Siguiente Pregunta
                        </a>

                    </div>
                )}
            </div>

            {/* --- SECCIÓN DE RESPUESTA --- */}
            <div ref={answerRef} style={{ display: 'none' }}>
                <div className="bg-slate-900/90 border border-slate-700 p-8 rounded-2xl backdrop-blur-md flex flex-col gap-6">

                    <h3 className={`text-3xl md:text-4xl ${theme.text} font-extrabold mb-2 text-center border-b border-white/10 pb-4`}>
                        {questionData.answerTitle}
                    </h3>

                    <p className="text-slate-300 leading-relaxed text-lg text-justify">
                        {questionData.answerDetail}
                    </p>

                    {questionData.imgPlaceholder && (
                        <div className="w-full h-48 md:h-72 border-2 border-dashed border-slate-600 rounded-xl flex flex-col items-center justify-center bg-slate-800/50 group hover:border-slate-400 transition-colors relative overflow-hidden">
                            <img
                                src={`/images/questions/${questionData.imgPlaceholder}`}
                                alt="Esquema explicativo"
                                className="absolute inset-0 w-full h-full object-contain z-10 bg-slate-900"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                            <div className="text-slate-400 text-center p-4 z-0">
                                <p className="font-mono text-sm text-slate-500">Esperando imagen:</p>
                                <p className="font-bold text-slate-300">{questionData.imgPlaceholder}</p>
                            </div>
                        </div>
                    )}

                    {questionData.videoId && (
                        <div className="aspect-video rounded-lg overflow-hidden shadow-lg border border-slate-700 bg-black">
                            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${questionData.videoId}`} title="Video" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    )}

                    {/* BOTÓN AL FINAL DE LA RESPUESTA (Flujo normal) */}
                    <div className="flex justify-end pt-4 border-t border-slate-700/50">
                        {questionData.nextQuestionId ? (
                            <a href={`/repaso/${questionData.nextQuestionId}`} className="inline-flex items-center gap-2 px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-all hover:scale-105 font-bold shadow-lg border border-slate-500">
                                Siguiente
                            </a>
                        ) : (
                            <a href="/agradecimientos" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                                Finalizar Experiencia
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}