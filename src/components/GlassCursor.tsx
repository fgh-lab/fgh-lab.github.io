import { motion, useWillChange } from 'framer-motion';

import GlassSurface from './GlassSurface';

import useMousePosition from '@/hooks/useMousePosition';

const CURSOR_SIZE = 96;

export function GlassCursor() {
  const { x, y } = useMousePosition();
  const willChange = useWillChange();

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="fixed w-full h-full pointer-events-none z-[999999]"
      initial={{ opacity: 0 }}
      style={{ willChange }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.div
        animate={{
          x: x - CURSOR_SIZE / 2,
          y: y - CURSOR_SIZE / 2,
        }}
        className="absolute flex items-center justify-center"
        style={{ willChange }}
        transition={{
          duration: 0.3,
        }}
      >
        <GlassSurface
          borderRadius={9999}
          height={CURSOR_SIZE}
          width={CURSOR_SIZE}
        />
      </motion.div>
    </motion.div>
  );
}
