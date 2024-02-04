"use client";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <div className="relative z-50 ">
      <motion.div
        className="slide-in"
        initial={{ scale: 0 }}
        animate={{ scale: 0 }}
        exit={{ scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] , delay : 0.2 }}
      />
      <motion.div
        className="slide-out"
        initial={{ scale: 1 }}
        animate={{ scale: 0 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] , delay : 0.2 }}
      />
      
      {children}
    </div>
  );
}
