'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'none',
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const cappedDelay = Math.min(delay, 0.15)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === 'up' ? 16 : direction === 'down' ? -16 : 0, x: direction === 'left' ? 16 : direction === 'right' ? -16 : 0 }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : undefined}
      transition={{ duration: 0.35, delay: cappedDelay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
