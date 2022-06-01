//import framer motion
import { motion, AnimatePresence } from "framer-motion";

//import bootstrap
import "bootstrap/dist/css/bootstrap.css";

import { useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps, router }) {
	useEffect(() => {
		document.getElementById("__next").className = "nextBaseCustom";
	}, []);

	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);

	return (
		<>
			<Nav />
			<AnimatePresence
				exitBeforeEnter
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<motion.div
					key={router.route}
					initial="pageInitial"
					animate="pageAnimate"
					exit="pageExit"
					variants={{
						pageInitial: {
							opacity: 0,
							transition: { duration: 0.7 },
						},
						pageAnimate: {
							opacity: 1,
							transition: { duration: 0.7 },
						},
						pageExit: {
							opacity: 0,
							transition: { duration: 0 },
						},
					}}
				>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</motion.div>
			</AnimatePresence>
		</>
	);
}

export default MyApp;
