
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });


export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={inter.className}>
      <AnimatePresence >
        <Component key={router.route} {...pageProps} />
        <Analytics />
      </AnimatePresence>
      <Footer/>
    </div>);
}
