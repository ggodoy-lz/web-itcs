'use client'

import { motion } from 'framer-motion'

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid base */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Orb 1 — grande, azul, arriba izquierda */}
      <motion.div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.04) 60%, transparent 80%)',
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb 2 — mediano, índigo, derecha centro */}
      <motion.div
        className="absolute top-1/3 -right-24 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0.03) 60%, transparent 80%)',
        }}
        animate={{
          x: [0, -50, 10, 0],
          y: [0, 40, -20, 0],
          scale: [1, 1.1, 0.92, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Orb 3 — pequeño, cyan, abajo centro */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0.02) 60%, transparent 80%)',
        }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -40, 10, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />

      {/* Orb 4 — sutil, abajo derecha */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.02) 60%, transparent 80%)',
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, -50, 15, 0],
          scale: [1, 1.05, 0.97, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Línea de luz horizontal animada */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.6) 30%, rgba(99,102,241,0.8) 50%, rgba(59,130,246,0.6) 70%, transparent 100%)',
        }}
        animate={{ opacity: [0.3, 0.7, 0.3], scaleX: [0.8, 1, 0.8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Partículas flotantes */}
      {[
        { top: '15%', left: '10%', delay: 0, size: 2 },
        { top: '30%', left: '85%', delay: 1.5, size: 1.5 },
        { top: '60%', left: '20%', delay: 3, size: 2 },
        { top: '50%', left: '70%', delay: 0.8, size: 1.5 },
        { top: '75%', left: '50%', delay: 2, size: 2 },
        { top: '20%', left: '55%', delay: 4, size: 1 },
        { top: '80%', left: '75%', delay: 1, size: 1.5 },
        { top: '45%', left: '35%', delay: 2.5, size: 1 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/40"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size * 3}px`,
            height: `${p.size * 3}px`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}

      {/* Gradiente de fondo base animado */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(15,23,64,0.8) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
