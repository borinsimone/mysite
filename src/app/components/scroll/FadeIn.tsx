'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react';

type FadeInProps = Omit<
  HTMLMotionProps<'div'>,
  'initial' | 'animate' | 'whileInView' | 'transition'
> & {
  delay?: number;
  reverse?: boolean;
};

export default function FadeIn({
  children,
  delay = 0,
  reverse = true,
  viewport,
  ...props
}: FadeInProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, y: 18 }}
      animate={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: reducedMotion ? 0 : delay } }}
      viewport={{ amount: 0.55, once: !reverse, ...viewport }}
      transition={{
        duration: reducedMotion ? 0 : 0.8,
        delay: 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fade-in ${props.className ?? ''}`}
    >
      {children}
    </motion.div>
  );
}
