import Layout from "../components/Layout";
import "../styles/globals.css";
import Transition from "../components/Transition";
import Head from "next/head";

// router
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      <Layout className="min-h-screen">
        <AnimatePresence mode="wait" className="min-h-screen">
          <motion.div key={router.route} className="min-h-screen">
            <Transition className="" />
            <Component {...pageProps} className="" />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default MyApp;
