import Layout from "../components/Layout";
import "../styles/globals.css";
import Transition from "../components/Transition";
import Head from "next/head";
// import dynamic from "next/dynamic";

// router
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  //   ssr: false,
  // });

  return (
    <div>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid red",
        }}
        innerStyle={{
          backgroundColor: "white",
        }}
      /> */}
      <Head>
        <link rel="shortcut icon" href="/code.svg" />
      </Head>
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
