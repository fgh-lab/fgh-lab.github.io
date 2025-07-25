import { motion } from 'framer-motion';

import LightRays from '@/components/LightRays';
import { title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="fixed top-0 left-0 bottom-0 overflow-hidden z-[-1] w-full min-h-[900px] brightness-150">
        <LightRays
          className="custom-rays"
          distortion={0.03}
          followMouse={true}
          lightSpread={0.4}
          mouseInfluence={0.1}
          noiseAmount={0.3}
          rayLength={1.2}
          raysColor="#ECEDEE"
          raysOrigin="top-center"
          raysSpeed={1}
        />
      </div>
      <motion.section
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center gap-8 py-8 md:py-10"
        initial={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="inline-flex flex-col max-w-lg text-center justify-center">
          <div
            className={title({
              size: 'lg',
              color: 'foreground',
              className: 'font-bold text-5xl mb-4',
            })}
          >
            GHLab
          </div>
          <span className={title()}>
            elegant systems from the{' '}
            <span className={title({ color: 'foreground' })}>
              shadow of the abyss
            </span>
          </span>
        </div>

        <div className="text-xs font-light text-gray-400 tracking-widest uppercase px-4 py-2 border border-gray-200/20 rounded-full bg-white/5">
          ✨ Something awesome is coming soon ✨
        </div>
      </motion.section>
    </DefaultLayout>
  );
}
