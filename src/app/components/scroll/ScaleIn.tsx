'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react';

type ScaleInProps = Omit<
  HTMLMotionProps<'div'>,
  'initial' | 'animate' | 'whileInView' | 'transition'
> & {
  delay?: number;
  duration?: number;
  fromScale?: number;
  reverse?: boolean;
};

export default function ScaleIn({
  children,
  delay = 0,
  duration = 0.9,
  fromScale = 0.92,
  reverse = true,
  viewport,
  className = '',
  ...props
}: ScaleInProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      className={`scale-in ${className}`}
      initial={{ opacity: 0, scale: fromScale }}
      animate={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: fromScale }}
      whileInView={{ opacity: 1, scale: 1, transition: { delay: reducedMotion ? 0 : delay } }}
      viewport={{ once: !reverse, amount: 0.55, ...viewport }}
      transition={{
        duration: reducedMotion ? 0 : duration,
        delay: 0,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
