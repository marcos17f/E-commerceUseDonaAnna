"use client";

import { MotionConfig, motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.2, 0.8, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const cascade: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* reducedMotion="user": com prefers-reduced-motion ativo, o Framer Motion
   desliga os movimentos (transform) e mantém só o fade. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type Props = { children: ReactNode; className?: string };

/* Bloco que aparece ao entrar na tela */
export function Reveal({ children, className, delay = 0 }: Props & { delay?: number }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/* Grupo cujos filhos (StaggerItem) aparecem em cascata */
export function Stagger({ children, className }: Props) {
  return (
    <motion.div
      className={className}
      variants={cascade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, lift = 0 }: Props & { lift?: number }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      whileHover={lift ? { y: -lift, transition: { duration: 0.3, ease: EASE } } : undefined}
    >
      {children}
    </motion.div>
  );
}
