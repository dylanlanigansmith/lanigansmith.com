'use client';

import { motion } from 'framer-motion'

export const MotionDiv = motion.div;
//import { MotionDiv } from './components/TextFade';
export default function TextFade({ params, dur = 0.75, children }) {


    return (
        <motion.div
            initial={{ y: 0, opacity: 0 }}
         
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and correct Y position
            viewport={{ once: true }} 
            transition={{ ease: "easeInOut", duration: dur }}
        >
            {children}
        </motion.div>
    )
}