'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react';

type FadeInProps = Omit<
  HTMLMotionProps<'div'>,
  'initial' | 'animate' | 'whileInView' | 'transition'
> & {
  delay?: number;
};

export default function FadeIn({ children, delay = 0, ...props }: FadeInProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, y: 18 }}
      animate={reducedMotion ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reducedMotion ? 0 : 0.55,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fade-in ${props.className ?? ''}`}
    >
      {children}
    </motion.div>
  );
}
