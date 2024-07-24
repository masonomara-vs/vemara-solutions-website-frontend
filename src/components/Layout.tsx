import { motion } from 'framer-motion';
import Link from 'next/link';

export const perspective = {
  initial: {
    scale: 1,
    y: 0,
  },
  enter: {
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0.5,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

export const slide = {
  initial: {
    y: "100vh",
  },
  enter: {
    y: "100vh"
  },
  exit: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

export const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 1
  }
}

const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants
  }
}

export default function Layout({ children }: { children: any }) {

  return (
    <div className='inner'>
      <motion.div className='slide' {...anim(slide)} />
      <motion.div className='page' {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <div className='header'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          {
            children
          }
        </motion.div>
      </motion.div>
    </div>
  )
}